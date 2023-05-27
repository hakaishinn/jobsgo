import { BusinessCenter, SaveOutlined } from '@mui/icons-material';
import BtnCreateJob from '../btnCreateJob';
import { Button } from '@mui/material';

function Info({ className, title }) {
    return (
        <div className={className}>
            <BtnCreateJob />

            <div className="flex items-center border-y py-2 pl-4 font-semibold bg-black/5">
                <BusinessCenter className="mr-1" /> {title}
            </div>

            <div className="p-4 border-b">
                <h2 className="font-bold uppercase mb-2">Thông tin cơ bản</h2>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Tên đăng nhập</span>
                    <input
                        type="text"
                        disabled
                        value={'thanh@gmail.com'}
                        className="col-span-3 outline-none p-2 w-max cursor-not-allowed"
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Email công ty</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Tên công ty</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Tên viết tắt</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Số điện thoại</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
            </div>
            <div className="p-4 border-b">
                <h2 className="font-bold uppercase mb-2">Thông tin thêm</h2>

                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Địa chỉ</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Website</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Facebook</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Twitter</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Linkedin</span>
                    <input type="text" placeholder="(Chưa có dữ liệu)" className="col-span-3 outline-none p-2 w-full" />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Mô tả</span>
                    <textarea
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 p-2 outline-none border min-h-[100px] w-full"
                    ></textarea>
                </div>
            </div>

            <div className="p-4 mb-8">
                <Button startIcon={<SaveOutlined />} variant="contained" color="success">
                    Lưu
                </Button>
            </div>
        </div>
    );
}

export default Info;
