import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '~/service/auth/authService';
import Loading from '../loading';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase';

function RegisterRecruiter() {
    const navigate = useNavigate();
    const [recruiter, setRecruiter] = useState({
        name: '',
        email: '',
        password: '',
        rePassWord: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, recruiter.email, recruiter.password)
            .then(async () => {
                const res = await authService.register(
                    recruiter.email,
                    recruiter.password,
                    recruiter.name,
                    'RECRUITER',
                );
                if (res?.success) {
                    navigate('/recruiter/login');
                }
            })
            .catch((error) => {
                alert(error.code);
            });
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
                    Đăng ký dành cho nhà tuyển dụng
                </h2>
                <div className="my-4">
                    <label htmlFor="name" className="text-sky-500 font-semibold">
                        Tên công ty <span className="text-red-700">*</span>
                    </label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        value={recruiter?.name}
                        onChange={(e) => setRecruiter({ ...recruiter, name: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-sky-500 font-semibold">
                        Email <span className="text-red-700">*</span>
                    </label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        value={recruiter?.email}
                        onChange={(e) => setRecruiter({ ...recruiter, email: e.target.value })}
                    />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="name" className="text-sky-500 font-semibold">
                        Số điện thoại <span className="text-red-700">*</span>
                    </label>
                    <input
                        name="phone"
                        id="name"
                        type="text"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                    />
                </div> */}
                <div className="mb-4">
                    <label htmlFor="password" className="text-sky-500 font-semibold">
                        Mật khẩu <span className="text-red-700">*</span>
                    </label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        value={recruiter?.password}
                        onChange={(e) => setRecruiter({ ...recruiter, password: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirm-password" className="text-sky-500 font-semibold">
                        Nhập lại mật khẩu <span className="text-red-700">*</span>
                    </label>
                    <input
                        name="rePassword"
                        id="confirm-password"
                        type="password"
                        className="w-full border py-1 px-2 outline-none focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        value={recruiter?.rePassWord}
                        onChange={(e) => setRecruiter({ ...recruiter, rePassWord: e.target.value })}
                    />
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
                        to={'/recruiter/login'}
                        className="block w-full p-2 text-center uppercase bg-white border hover:bg-black/5"
                    >
                        Đăng nhập ngay
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterRecruiter;
