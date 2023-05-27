import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async () => {
        // await createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         console.log(userCredential);
        //         navigate('/login');
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log(errorCode);
        //         console.log(errorMessage);
        //     });
    };
    return (
        <div
            className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"
            style={{ backgroundImage: 'url("https://jobsgo.vn/bolt/assets/images/backgrounds/bg-9.jpg")' }}
        >
            <div className="bg-white p-4 w-[30%] min-w-[400px] rounded-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-700 pb-2 border-b">Đăng ký</h2>
                <div className="my-4">
                    <label htmlFor="name" className="text-sky-500 font-semibold">
                        Họ và tên <span className="text-red-700">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* <span className="text-sm text-red-600">abc</span> */}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-sky-500 font-semibold">
                        Email <span className="text-red-700">*</span>
                    </label>
                    <input
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
                        id="password"
                        type="password"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* {false && <span className="text-sm text-red-600">abc</span>} */}
                </div>
                <div className="mb-4">
                    <label htmlFor="confirm-password" className="text-sky-500 font-semibold">
                        Nhập lại mật khẩu <span className="text-red-700">*</span>
                    </label>
                    <input
                        id="confirm-password"
                        type="password"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                    />
                    {/* {false && <span className="text-sm text-red-600">abc</span>} */}
                </div>

                <div>
                    <button
                        className="w-full p-2 text-center uppercase bg-sky-800 text-white hover:opacity-90"
                        onClick={handleRegister}
                    >
                        Đăng ký
                    </button>
                </div>

                <p className="my-2 text-[#666] text-center">Bạn đã có tài khoản?</p>
                <div>
                    <Link
                        to={'/login'}
                        className="block w-full p-2 text-center uppercase bg-white border hover:bg-black/5"
                    >
                        Đăng nhập ngay
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
