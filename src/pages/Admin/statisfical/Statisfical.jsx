import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useEffect, useState } from 'react';
import * as userService from '~/service/userService';
import * as jobService from '~/service/jobService';
import * as applyService from '~/service/applyService';
import * as paymentService from '~/service/paymentService';
import * as handleDate from '~/utils/handleDate';
import { AttachMoney, Work } from '@mui/icons-material';
function Statisfical() {
    const [candidates, setCandidates] = useState([]);
    const [recruiters, setRecruiters] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [revenue, setRevenue] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const resCandidate = await userService.getAllCandidate();
            if (resCandidate?.success) {
                setCandidates(resCandidate.data);
            }
            const resRecruiter = await userService.getAllRecruiter();
            if (resRecruiter?.success) {
                setRecruiters(resRecruiter.data);
            }
            const resJobs = await jobService.viewAllJob();
            if (resJobs?.success) {
                setJobs(resJobs.data);
            }
            const resRevenue = await paymentService.getAllPayment();
            if (resRevenue?.success) {
                console.log(resRevenue.data);
                setRevenue(resRevenue.data);
            }
        };
        getData();
        totalDs();
    }, []);

    const totalDs = () => {
        let total = 0;
        for (let i = 0; i < revenue.length; i++) {
            total += revenue[i]['total'];
        }
        return (
            <>
                <p className="text-[35px] font-[700]">{total}</p>
            </>
        );
    };
    console.log(recruiters);
    const render = () => {
        return recruiters.map((value1) => {
            return value1.listJob?.map((value2) => {
                return (
                    <tr key={value2.id}>
                        <td>{value2.title}r</td>
                        <td>{value1.name}</td>
                        <td>{value2.specificAddress}</td>
                        <td>
                            {value2.salaryFrom}.000.000-{value2.salaryTo}.000.000
                        </td>
                        <td>{value1.email}</td>
                        <td> {handleDate.formatDate(value2?.createAt, 'dd-mm-yyyy hh:MM:ss')}</td>
                        <td>
                            {value2.status == 2 ? (
                                <p style={{ background: 'red' }}>Hết hạn</p>
                            ) : (
                                <p style={{ background: 'green' }}>Đang tuyển dụng</p>
                            )}
                        </td>
                    </tr>
                );
            });
        });
    };
    return (
        <>
            <div className="statisfical w-[full] ">
                <main className="py-10 bg-gray-100">
                    <div className="mx-10 grid grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg">
                            <div className="flex flex-col justify-center items-center py-2">
                                <div className="flex items-center justify-center gap-4">
                                    <AssignmentIndIcon color="primary" style={{ fontSize: 50 }} />
                                    <p className="text-[18px] font-bold">Ứng viên</p>
                                </div>
                                <div>
                                    <p className="text-[35px] font-[700]">{candidates.length}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg">
                            <div className="flex flex-col justify-center items-center py-2">
                                <div className="flex items-center justify-center gap-4">
                                    <AssignmentIndIcon color="secondary" style={{ fontSize: 50 }} />
                                    <p className="text-[18px] font-bold">Nhà tuyển dụng</p>
                                </div>
                                <div>
                                    <p className="text-[35px] font-[700]">{recruiters.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg">
                            <div className="flex flex-col justify-center items-center py-2">
                                <div className="flex items-center justify-center gap-4">
                                    <Work color="success" style={{ fontSize: 50 }} />
                                    <p className="text-[18px] font-bold">Công việc</p>
                                </div>
                                <div>
                                    <p className="text-[35px] font-[700]">{jobs.length}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg">
                            <div className="flex flex-col justify-center items-center py-2">
                                <div className="flex items-center justify-center gap-4">
                                    <AttachMoney color="error" style={{ fontSize: 50 }} />
                                    <p className="text-[18px] font-bold">Doanh số</p>
                                </div>
                                <div>
                                    <div className="text-[35px] font-[700]">{totalDs()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mx-10 mt-10">
                        <table class="table-auto w-full text-[20px]">
                            <thead className="bg-gray-400">
                                <tr>
                                    <th>Tên công việc</th>
                                    <th>Tên công ty</th>
                                    <th>Nơi làm việc</th>
                                    <th>Lương</th>
                                    <th>Liên hệ</th>
                                    <th>Ngày tạo</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {render()}
                            </tbody>
                        </table>
                    </div> */}
                </main>
            </div>
        </>
    );
}
export default Statisfical;
