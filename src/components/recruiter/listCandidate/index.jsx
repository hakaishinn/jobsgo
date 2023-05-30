import { HowToRegOutlined, LockPersonOutlined, PersonOffOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ListCandidate({ type, tab }) {
    const [typeCandidate, setTypeCandidate] = useState(1);
    const classActive = 'bg-lime-600 text-white';
    return (
        <div>
            {/* button */}
            {type === 'detailJob' && (
                <div className="flex items-center">
                    <button
                        className={`px-4 py-2 border rounded-lg mr-4 ${typeCandidate === 1 ? classActive : ''}`}
                        onClick={() => setTypeCandidate(1)}
                    >
                        Tất cả
                    </button>
                    <button
                        className={`px-4 py-2 border rounded-lg mr-4 ${typeCandidate === 2 ? classActive : ''}`}
                        onClick={() => setTypeCandidate(2)}
                    >
                        Mới ứng tuyển
                    </button>
                    <button
                        className={`px-4 py-2 border rounded-lg mr-4 ${typeCandidate === 3 ? classActive : ''}`}
                        onClick={() => setTypeCandidate(3)}
                    >
                        Đã được chọn
                    </button>
                    <button
                        className={`px-4 py-2 border rounded-lg mr-4 ${typeCandidate === 4 ? classActive : ''}`}
                        onClick={() => setTypeCandidate(4)}
                    >
                        Quyết định sau
                    </button>
                    <button
                        className={`px-4 py-2 border rounded-lg mr-4 ${typeCandidate === 5 ? classActive : ''}`}
                        onClick={() => setTypeCandidate(5)}
                    >
                        Đã từ chối
                    </button>
                </div>
            )}

            {/* table */}
            <div>
                <table className="w-full mt-6">
                    <thead>
                        <tr>
                            <th className="text-sky-600">Ảnh đại diện</th>
                            <th className="text-sky-600">Họ tên</th>
                            <th className="text-sky-600">Công việc ứng tuyển</th>
                            <th className="text-sky-600">Kinh nghiệm làm việc</th>
                            <th className="text-sky-600">Kỹ năng chuyên môn</th>
                            <th className="text-sky-600">Học vấn</th>
                            {tab !== 'search' && <th className="text-sky-600">Thao tác</th>}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link className="block max-w-[100px]">
                                    <img
                                        src="https://employer.jobsgo.vn/media/img/male.jpg?v=1684939280"
                                        alt="avatar"
                                    />
                                </Link>
                            </td>
                            <td>
                                <p>Năm sinh: 29/03/2001</p>
                                <p>Giới tính: Nam</p>
                                <p>Chỗ ở: Huế</p>
                            </td>
                            <td>
                                <Link className="text-lime-600 underline font-semibold text-base">Tuyển Fresher</Link>
                                <p>Ngày ứng tuyển: 25/05/2023</p>
                            </td>
                            <td>
                                <p>Vị trí: Fresher - FPT</p>
                            </td>
                            <td>
                                <p>- 1 năm kinh nghiệm Java</p>
                                <p>- 1 năm kinh nghiệm ReactJS</p>
                            </td>
                            <td>
                                <p>- Học đại học bách khoa Đà Nẵng</p>
                                <p>- Chuyên ngành: Công nghệ thông tin</p>
                            </td>
                            {tab !== 'search' && (
                                <td>
                                    {tab !== 'selected' && (
                                        <button className="p-1 mb-2 w-full flex items-center justify-center border rounded-lg hover:bg-black/5">
                                            <HowToRegOutlined fontSize="small" className="mr-1" />{' '}
                                            <span className="w-max">Duyệt</span>
                                        </button>
                                    )}
                                    {tab !== 'consider' && (
                                        <button className="p-1 mb-2 w-full flex items-center justify-center border rounded-lg hover:bg-black/5">
                                            <LockPersonOutlined fontSize="small" className="mr-1" />
                                            <span className="w-max">Xem xét</span>
                                        </button>
                                    )}
                                    {tab !== 'denied' && (
                                        <button className="p-1 mb-2 w-full flex items-center justify-center border rounded-lg hover:bg-black/5">
                                            <PersonOffOutlined fontSize="small" className="mr-1" />
                                            <span className="w-max">Từ chối</span>
                                        </button>
                                    )}
                                </td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListCandidate;
