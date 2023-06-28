import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '~/context/AppProvider';
import * as authService from '~/service/auth/authService';
import Loading from '../loading';

function LoginRecruiter() {
    const { setRecruiter } = useContext(AppContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        const res = await authService.login(email, password);
        if (res?.success && res?.data?.roles.includes('RECRUITER')) {
            localStorage.setItem('user', JSON.stringify(res?.data));
            setRecruiter(res?.data);
            navigate('/recruiter/managerJobs/open');
        }
        setIsLoading(false);
    };
    return (
        <div
            className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex justify-center items-center text-sm"
            style={{ backgroundImage: 'url("https://jobsgo.vn/bolt/assets/images/backgrounds/bg-9.jpg")' }}
        >
            {isLoading && <Loading />}
            <div className="bg-white p-4 w-[30%] min-w-[400px] rounded-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-700 pb-2 border-b">
                    Đăng nhập dành cho nhà tuyển dụng
                </h2>
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
                    <Link className="text-sky-600 hover:text-red-600">Quên mật khẩu?</Link>
                </div>

                <div>
                    <button
                        className="w-full p-2 text-center uppercase bg-sky-800 text-white hover:opacity-90"
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </button>
                </div>

                <p className="my-2 text-[#666] text-center">Bạn chưa có tài khoản?</p>
                <div>
                    <Link
                        to={'/recruiter/register'}
                        className="block w-full p-2 text-center uppercase bg-white border hover:bg-black/5"
                    >
                        Đăng ký nhanh
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginRecruiter;
