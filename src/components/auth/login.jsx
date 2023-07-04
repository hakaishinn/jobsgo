import { Link, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
// import PhoneIcon from '@mui/icons-material/Phone';
import { useContext, useState } from 'react';
import { AppContext } from '~/context/AppProvider';
import * as authService from '~/service/auth/authService';
import Loading from '../loading';
import BackGroundAuth from '~/assets/images/background-auth.jpg';

import { signInWithPopup } from 'firebase/auth';
import { auth, providerGoogle, providerFacebook } from '~/firebase';
import LoginPhone from './loginPhone';

function Login() {
    const { setUser } = useContext(AppContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showLoginPhone, setShowLoginPhone] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        const res = await authService.login(email, password);
        if (res?.success && res?.data?.roles.includes('CANDIDATE')) {
            localStorage.setItem('user', JSON.stringify(res?.data));
            setUser(res?.data);
            navigate('/');
        }
        setIsLoading(false);
    };

    const handleLoginWithGoogle = async () => {
        signInWithPopup(auth, providerGoogle)
            .then(async (result) => {
                const email = result.user.email;
                const name = result.user.displayName;
                const res = await authService.loginGoogleAndFacebook(email, name, 'CANDIDATE');
                if (res?.success && res?.data?.roles.includes('CANDIDATE')) {
                    localStorage.setItem('user', JSON.stringify(res?.data));
                    setUser(res?.data);
                    navigate('/');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLoginWithFacebook = async () => {
        signInWithPopup(auth, providerFacebook)
            .then(async (result) => {
                const email = result.user.email;
                const name = result.user.displayName;
                const res = await authService.loginGoogleAndFacebook(email, name, 'CANDIDATE');
                if (res?.success && res?.data?.roles.includes('CANDIDATE')) {
                    localStorage.setItem('user', JSON.stringify(res?.data));
                    setUser(res?.data);
                    navigate('/');
                }
            })
            .catch(async (error) => {
                const email = error.customData.email;
                const res = await authService.loginGoogleAndFacebook(email, '', 'CANDIDATE');
                if (res?.success && res?.data?.roles.includes('CANDIDATE')) {
                    localStorage.setItem('user', JSON.stringify(res?.data));
                    setUser(res?.data);
                    navigate('/');
                }
            });
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"
            style={{ backgroundImage: `url("${BackGroundAuth}")` }}
        >
            {showLoginPhone && <LoginPhone setShowLoginPhone={setShowLoginPhone} />}
            {isLoading && <Loading />}
            <div className="bg-white p-4 w-[30%] min-w-[400px] rounded-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-700 pb-2 border-b">Đăng nhập</h2>

                <div id="sign-in-button"></div>

                <div className="my-4">
                    <label htmlFor="email" className="text-sky-500 font-semibold">
                        Email <span className="text-red-700">*</span>
                    </label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <span className="text-sm text-red-600">abc</span> */}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-sky-500 font-semibold">
                        Mật khẩu <span className="text-red-700">*</span>
                    </label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* {false && <span className="text-sm text-red-600">abc</span>} */}
                </div>
                <div className="text-right my-2">
                    <Link to={`/forgotPassword`} className="text-sky-600 hover:text-red-600 cursor-pointer">
                        Quên mật khẩu?
                    </Link>
                </div>

                <div>
                    <button
                        className="w-full p-2 text-center uppercase bg-sky-800 text-white hover:opacity-90"
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </button>
                </div>

                <p className="relative text-center text-[#666] my-2">hoặc</p>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <button
                            className="w-full bg-sky-700 text-white flex items-center justify-center py-2 px-1 rounded-lg hover:opacity-90"
                            onClick={handleLoginWithFacebook}
                        >
                            <FacebookIcon className="mr-2"></FacebookIcon>Facebook
                        </button>
                    </div>
                    <div>
                        <button
                            className="w-full bg-red-600 text-white flex items-center justify-center py-2 px-1 rounded-lg hover:opacity-90"
                            onClick={handleLoginWithGoogle}
                        >
                            <GoogleIcon className="mr-2"></GoogleIcon>Google
                        </button>
                    </div>
                    {/* <div>
                        <button
                            className="w-full bg-lime-500 text-white flex items-center justify-center py-2 px-1 rounded-lg hover:opacity-90"
                            onClick={() => setShowLoginPhone(true)}
                        >
                            <PhoneIcon className="mr-2"></PhoneIcon>Phone
                        </button>
                    </div> */}
                </div>

                <p className="my-2 text-[#666] text-center">Bạn chưa có tài khoản?</p>
                <div>
                    <Link
                        to={'/register'}
                        className="block w-full p-2 text-center uppercase bg-white border hover:bg-black/5"
                    >
                        Đăng ký nhanh
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
