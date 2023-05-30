import { Button } from '@mui/material';
import MenuCV from './menuCV';
import { UploadFileOutlined } from '@mui/icons-material';

function UploadCV() {
    return (
        <div className="container mx-auto mt-[100px]">
            <MenuCV tab={'upload'}></MenuCV>
            <div className="border mt-8 flex justify-center items-center min-h-[50vh]">
                <div className="">
                    <h2 className="text-sky-600 font-bold">
                        Tải lên CV của bạn <span className="text-red-600">*</span>
                    </h2>
                    <div className="my-2">
                        <input type="file" className="border outline-none rounded-md p-2" />
                    </div>
                    <Button startIcon={<UploadFileOutlined />} variant="contained">
                        Tải lên
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default UploadCV;
