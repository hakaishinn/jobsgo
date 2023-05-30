import { DeleteOutline, EditOutlined, FileDownloadOutlined } from '@mui/icons-material';
import MenuCV from './menuCV';
import { Link } from 'react-router-dom';
import Template1CV from '~/assets/images/candidate/template-1-cv.png';

function ListCV() {
    return (
        <div>
            <div className="container mx-auto mt-[100px]">
                <MenuCV tab={'viewCV'}></MenuCV>
                <h2 className="text-lg font-bold my-8 border bg-black/5 p-2">Quản lý CV</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-2 border rounded-lg flex justify-start items-center">
                        <Link to={'/cv/view/1'} className="max-w-[100px] mr-4">
                            <img src={Template1CV} alt="cv1" />
                        </Link>
                        <div>
                            <p className="font-bold">CV thứ nhất</p>
                            <p className="my-2">Mẫu CV 1</p>
                            <div className="flex items-center">
                                <button className="p-1 border rounded-lg flex items-center justify-center">
                                    <EditOutlined fontSize="small" className="mr-1" />
                                    Chỉnh sửa
                                </button>
                                <button className="p-1 border rounded-lg flex items-center justify-center mx-4">
                                    <FileDownloadOutlined className="mr-1" />
                                    Tải xuống
                                </button>
                                <button className="p-1 border rounded-lg flex items-center justify-center">
                                    <DeleteOutline className="mr-1" />
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 border rounded-lg flex justify-start items-center">
                        <Link to={'/cv/view/1'} className="max-w-[100px] mr-4">
                            <img src={Template1CV} alt="cv1" />
                        </Link>
                        <div>
                            <p className="font-bold">CV thứ nhất</p>
                            <p className="my-2">Mẫu CV 1</p>
                            <div className="flex items-center">
                                <button className="p-1 border rounded-lg flex items-center justify-center">
                                    <EditOutlined fontSize="small" className="mr-1" />
                                    Chỉnh sửa
                                </button>
                                <button className="p-1 border rounded-lg flex items-center justify-center mx-4">
                                    <FileDownloadOutlined className="mr-1" />
                                    Tải xuống
                                </button>
                                <button className="p-1 border rounded-lg flex items-center justify-center">
                                    <DeleteOutline className="mr-1" />
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 border rounded-lg flex justify-start items-center">
                        <Link to={'/cv/view/1'} className="max-w-[100px] mr-4">
                            <img src={Template1CV} alt="cv1" />
                        </Link>
                        <div>
                            <p className="font-bold">CV thứ nhất</p>
                            <p className="my-2">Mẫu CV 1</p>
                            <div className="flex items-center">
                                <button className="p-1 border rounded-lg flex items-center justify-center">
                                    <EditOutlined fontSize="small" className="mr-1" />
                                    Chỉnh sửa
                                </button>
                                <button className="p-1 border rounded-lg flex items-center justify-center mx-4">
                                    <FileDownloadOutlined className="mr-1" />
                                    Tải xuống
                                </button>
                                <button className="p-1 border rounded-lg flex items-center justify-center">
                                    <DeleteOutline className="mr-1" />
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListCV;
