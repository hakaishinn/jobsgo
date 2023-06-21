import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '~/service/userService';
import * as careerService from '~/service/careerService';
import { FacebookOutlined, LinkedIn, PublicOutlined, Twitter } from '@mui/icons-material';

function Footer() {
    const [admin, setAdmin] = useState();
    const [listCareer, setListCareer] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const resAdmin = await userService.getUserById(1);
            if (resAdmin?.success) {
                setAdmin(resAdmin.data);
            }

            const resCareer = await careerService.getAllCareer();
            if (resCareer?.success) {
                setListCareer(resCareer.data);
            }
        };
        getData();
    }, []);
    return (
        <div className="bg-slate-200 py-8">
            <div className="grid grid-cols-6 gap-2 container m-auto">
                <div className="flex flex-col justify-start items-start col-span-2">
                    <p className="font-bold mb-3">CÔNG TY CỔ PHẦN JOBSGO</p>
                    <div>
                        <span>
                            <strong>Địa chỉ: </strong>
                            {admin?.specificAddress}, {admin?.wards}, {admin?.districts}, {admin?.city}
                        </span>
                    </div>
                    <div>
                        <span>
                            <strong>Email: </strong>
                            <Link className="text-cyan-600">{admin?.email}</Link>
                        </span>
                    </div>
                    <div>
                        <span>
                            <strong>Liên hệ: </strong>
                            <Link className="text-cyan-600">{admin?.phone}</Link>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="font-bold mb-3">Việc làm theo địa điểm</p>

                    <Link className="hover:text-[#1772bd] pb-1">Hà Nội</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Đà Nẵng</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Hồ Chí Minh</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Bình Dương</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Quảng Nam</Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold mb-3">Việc làm theo ngành nghề</p>
                    {listCareer?.map((career) => (
                        <Link key={career.id} className="hover:text-[#1772bd] pb-1">
                            {career.name}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col">
                    <p className="font-bold mb-3">Việc làm theo loại hình</p>

                    <Link className="hover:text-[#1772bd] pb-1">Full time</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Part time</Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold mb-3">Mạng xã hội</p>

                    <div className="flex justify-between">
                        <Link>
                            <FacebookOutlined color="primary" fontSize="large" />
                        </Link>
                        <Link>
                            <LinkedIn color="primary" fontSize="large" />
                        </Link>
                        <Link>
                            <Twitter color="primary" fontSize="large" />
                        </Link>
                        <Link>
                            <PublicOutlined color="primary" fontSize="large" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
