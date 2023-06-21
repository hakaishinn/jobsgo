import { BusinessCenter, EditOutlined, PauseCircleOutlineRounded, PlayCircleOutline } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import BtnCreateJob from '../btnCreateJob';
import { useEffect, useState } from 'react';
import * as handelDate from '~/utils/handleDate';

import * as jobService from '~/service/jobService';

const addr = ['Hà Nội', 'Đà Nẵng', 'Quảng Nam'];
function FormManagerJob({ className, title, tab }) {
    const [listJob, setListJob] = useState([]);

    const handlePause = async (id) => {
        const res = await jobService.changeStatusPause(id);
        if (res?.success) {
            setListJob(listJob.filter((job) => job.id !== id));
        }
    };

    const handleStatusApply = async (id) => {
        const res = await jobService.changeStatusApply(id);
        if (res?.success) {
            setListJob(listJob.filter((job) => job.id !== id));
        }
    };

    useEffect(() => {
        const getData = async () => {
            if (tab === 'pending') {
                const res = await jobService.viewJobPending();
                if (res?.success && res?.data?.length > 0) {
                    setListJob(res.data);
                }
            } else if (tab === 'open') {
                const res = await jobService.viewJobOpen();
                if (res?.success && res?.data?.length > 0) {
                    setListJob(res.data);
                }
            } else if (tab === 'pause') {
                const res = await jobService.viewJobPause();
                if (res?.success && res?.data?.length > 0) {
                    setListJob(res.data);
                }
            }
            if (tab === 'expired') {
                const res = await jobService.viewJobExpired();
                if (res?.success && res?.data?.length > 0) {
                    setListJob(res.data);
                }
            }
        };
        getData();
    }, [tab]);
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

                        {listJob.map((job) => (
                            <tr key={job.id}>
                                <td>
                                    <Link
                                        to={`/recruiter/jobs/${job.id}`}
                                        className="text-lime-600 underline font-semibold text-base"
                                    >
                                        {job.title}
                                    </Link>
                                    <p>Tạo lúc: {handelDate.formatDate(job.createAt, 'dd-mm-yyyy hh:MM:ss')}</p>
                                    <p>
                                        Cập nhật lúc:{' '}
                                        {job.updateAt
                                            ? handelDate.formatDate(job.updateAt, 'dd-mm-yyyy hh:MM:ss')
                                            : 'Chưa cập nhật'}
                                    </p>
                                </td>
                                <td>{job.city}</td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <div className="flex justify-center items-center font-semibold text-xl">
                                            {job?.listApply?.length}
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-slate-300 p-2 ">
                                    <div className="flex flex-col items-stretch justify-center">
                                        <Link
                                            to={`/recruiter/jobs/update/${job.id}`}
                                            className="px-2 py-1 mb-2 flex items-center justify-center border rounded-lg hover:bg-black/5"
                                        >
                                            <EditOutlined fontSize="small" className="mr-1" /> Chỉnh sửa
                                        </Link>
                                        {tab === 'open' && (
                                            <button
                                                className="px-2 py-1 mb-2 flex items-center justify-center border rounded-lg hover:bg-black/5"
                                                onClick={() => handlePause(job?.id)}
                                            >
                                                <PauseCircleOutlineRounded fontSize="small" className="mr-1" />
                                                Tạm dừng
                                            </button>
                                        )}
                                        {tab === 'pause' && (
                                            <button
                                                className="px-2 py-1 mb-2 flex items-center justify-center border rounded-lg hover:bg-black/5"
                                                onClick={() => handleStatusApply(job?.id)}
                                            >
                                                <PlayCircleOutline fontSize="small" className="mr-1" />
                                                Kích hoạt
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FormManagerJob;
