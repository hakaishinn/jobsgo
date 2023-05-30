import { BusinessCenter, SaveOutlined } from '@mui/icons-material';
import BtnCreateJob from '../btnCreateJob';
import { Button } from '@mui/material';

function ChangePassword({ className, title }) {
    return (
        <div className={className}>
            <BtnCreateJob />

            <div className="flex items-center border-y py-2 pl-4 font-semibold bg-black/5">
                <BusinessCenter className="mr-1" /> {title}
            </div>

            <div className="flex justify-center">
                <div className="min-w-[600px] p-4 mt-8">
                    <div className="grid grid-cols-3 gap-4">
                        <p className="font-semibold col-span-1 text-right">
                            Mật khẩu hiện tại <span className="text-red-600">*</span>
                        </p>
                        <input
                            type="text"
                            className="col-span-2 outline-none border rounded-lg p-2 flex-1 focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4 my-8">
                        <p className="font-semibold col-span-1 text-right">
                            Mật khẩu mới <span className="text-red-600">*</span>
                        </p>
                        <input
                            type="text"
                            className="col-span-2 outline-none border rounded-lg p-2 flex-1 focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <p className="font-semibold col-span-1 text-right">
                            Nhập lại mật khẩu mới<span className="text-red-600">*</span>
                        </p>
                        <input
                            type="text"
                            className="col-span-2 outline-none border rounded-lg p-2 flex-1 focus:border-sky-500 focus:shadow-ssm shadow-sky-500"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1"></div>
                        <div className="col-span-2 mt-8">
                            <Button startIcon={<SaveOutlined />} variant="contained" color="success">
                                Lưu
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
