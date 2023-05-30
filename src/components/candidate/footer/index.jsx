import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-slate-200 py-8 mt-8">
            <div className="grid grid-cols-6 gap-2 container m-auto">
                <div className="flex flex-col justify-start items-start col-span-2">
                    <p className="font-bold mb-3">CÔNG TY CỔ PHẦN JOBSGO</p>
                    <div className="flex">
                        <span>
                            <strong>Địa chỉ:</strong> 54 Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng
                        </span>
                    </div>
                    <div>
                        <span>
                            <strong>Email: </strong>
                            <Link className="text-cyan-600">duongdinhthanh@gmail.com</Link>
                        </span>
                    </div>
                    <div>
                        <span>
                            <strong>Liên hệ: </strong>
                            <Link className="text-cyan-600">0356856565</Link>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="font-bold mb-3">Việc làm theo địa điểm</p>

                    <Link className="hover:text-[#1772bd] pb-1">Hà Nội</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Hà Nội</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Hà Nội</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Hà Nội</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Hà Nội</Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold mb-3">Việc làm theo ngành nghề</p>

                    <Link className="hover:text-[#1772bd] pb-1">Công nghệ thông tin</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Công nghệ thông tin</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Công nghệ thông tin</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Công nghệ thông tin</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Công nghệ thông tin</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Công nghệ thông tin</Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold mb-3">Việc làm theo loại hình</p>

                    <Link className="hover:text-[#1772bd] pb-1">Full time</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Full time</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Full time</Link>
                    <Link className="hover:text-[#1772bd] pb-1">Full time</Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold mb-3">Mạng xã hội</p>

                    <Link>Facebook</Link>
                    <Link>Facebook</Link>
                    <Link>Facebook</Link>
                    <Link>Facebook</Link>
                    <Link>Facebook</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
