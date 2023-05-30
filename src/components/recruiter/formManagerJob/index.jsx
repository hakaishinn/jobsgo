import { BusinessCenter, EditOutlined, PauseCircleOutlineRounded, PlayCircleOutline } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import BtnCreateJob from '../btnCreateJob';

const addr = ['Hà Nội', 'Đà Nẵng', 'Quảng Nam'];
function FormManagerJob({ className, title, tab }) {
    return (
        <div className={className}>
            <BtnCreateJob />

            <div className="flex items-center border-y py-2 pl-4 font-semibold bg-black/5">
                <BusinessCenter className="mr-1" /> {title}
            </div>

            <div className="mt-4 mx-2">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 text-sky-500 py-2">Tiêu đề công việc</th>
                            <th className="border border-slate-300 text-sky-500 py-2">Nơi làm việc</th>
                            <th className="border border-slate-300 text-sky-500 py-2">Số ứng viên ứng tuyển</th>
                            <th className="border border-slate-300 text-sky-500 py-2">Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className="block outline-none p-2 border w-full"
                                />
                            </td>
                            <td>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={addr}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Nơi làm việc" />}
                                />
                            </td>
                            <td></td>
                            <td className="border border-slate-300"></td>
                        </tr>

                        <tr>
                            <td>
                                <Link
                                    to={'/recruiter/jobs/1'}
                                    className="text-lime-600 underline font-semibold text-base"
                                >
                                    Tuyển Fresher
                                </Link>
                                <p>Tạo lúc 22:06 - 24/05/2023</p>
                                <p>Cập nhật lúc 14:49 - 25/05/2023</p>
                            </td>
                            <td>Đà Nẵng</td>
                            <td>
                                <div className="flex justify-center items-center">
                                    <div className="flex justify-center items-center font-semibold text-xl">1</div>
                                </div>
                            </td>
                            <td className="border border-slate-300 p-2 ">
                                <div className="flex flex-col items-stretch justify-center">
                                    <button className="px-2 py-1 mb-2 flex items-center justify-center border rounded-lg hover:bg-black/5">
                                        <EditOutlined fontSize="small" className="mr-1" /> Chỉnh sửa
                                    </button>
                                    {tab === 'open' && (
                                        <button className="px-2 py-1 mb-2 flex items-center justify-center border rounded-lg hover:bg-black/5">
                                            <PauseCircleOutlineRounded fontSize="small" className="mr-1" />
                                            Tạm dừng
                                        </button>
                                    )}
                                    {tab === 'pause' && (
                                        <button className="px-2 py-1 mb-2 flex items-center justify-center border rounded-lg hover:bg-black/5">
                                            <PlayCircleOutline fontSize="small" className="mr-1" />
                                            Kích hoạt
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FormManagerJob;
