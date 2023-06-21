import { HowToRegOutlined, LockPersonOutlined, PersonOffOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalCVDetail from '~/components/modal/modalCVDetail';
import * as handleDate from '~/utils/handleDate';
import * as applyService from '~/service/applyService';

function ListCandidate({ type, tab, listResume, setListResume }) {
    const classActive = 'bg-lime-600 text-white';
    const [typeCandidate, setTypeCandidate] = useState(1);
    const [resumeCurrent, setResumeCurrent] = useState();
    const [showModalDetailCV, setShowModalDetailCV] = useState(false);

    const handleApprove = async (id) => {
        const res = await applyService.approve(id);
        if (res?.success) {
            setListResume(listResume.filter((resume) => resume.applyId !== id));
        }
    };
    const handleConsider = async (id) => {
        const res = await applyService.consider(id);
        if (res?.success) {
            setListResume(listResume.filter((resume) => resume.applyId !== id));
        }
    };
    const handleDenied = async (id) => {
        const res = await applyService.denied(id);
        if (res?.success) {
            setListResume(listResume.filter((resume) => resume.applyId !== id));
        }
    };

    return (
        <div>
            {showModalDetailCV && <ModalCVDetail resume={resumeCurrent} setShowModalDetailCV={setShowModalDetailCV} />}
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
                        {listResume?.map((resume) => (
                            <tr key={resume.resumeId}>
                                <td>
                                    <div
                                        className="block max-w-[100px] cursor-pointer"
                                        onClick={() => {
                                            setResumeCurrent(resume);
                                            setShowModalDetailCV(true);
                                        }}
                                    >
                                        <img
                                            src="https://employer.jobsgo.vn/media/img/male.jpg?v=1684939280"
                                            alt="avatar"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <p>Năm sinh: {handleDate.formatDate(resume.birthday)}</p>
                                    <p>Giới tính: Nam</p>
                                    <p>Chỗ ở: {resume.address}</p>
                                </td>
                                <td>
                                    <Link
                                        to={`/recruiter/jobs/${resume?.jobId}`}
                                        className="text-lime-600 underline font-semibold text-base"
                                    >
                                        {resume.nameJobApply}
                                    </Link>
                                    <p>Ngày ứng tuyển: {handleDate.formatDate(resume.applyAt)}</p>
                                </td>
                                <td>
                                    {resume?.listWorkExperience.map((exp) => (
                                        <p key={exp.id}>Vị trí: {`${exp.position}-${exp.nameCompany}`}</p>
                                    ))}
                                </td>
                                <td>
                                    {resume?.listResumeProSkill?.map((proSkill) => (
                                        <p key={proSkill.id}>
                                            - {proSkill.yearExperience} năm kinh nghiệm {proSkill.proSkillName}
                                        </p>
                                    ))}
                                </td>
                                <td>
                                    {resume?.listResumeEducation?.map((education) => (
                                        <p key={education.id}>{`${education.nameSchool} - ${education.majors}`}</p>
                                    ))}
                                </td>
                                {tab !== 'search' && (
                                    <td>
                                        {tab !== 'selected' && (
                                            <button
                                                className="p-1 mb-2 w-full flex items-center justify-center border rounded-lg hover:bg-black/5"
                                                onClick={() => handleApprove(resume.applyId)}
                                            >
                                                <HowToRegOutlined fontSize="small" className="mr-1" />{' '}
                                                <span className="w-max">Duyệt</span>
                                            </button>
                                        )}
                                        {tab !== 'consider' && (
                                            <button
                                                className="p-1 mb-2 w-full flex items-center justify-center border rounded-lg hover:bg-black/5"
                                                onClick={() => handleConsider(resume.applyId)}
                                            >
                                                <LockPersonOutlined fontSize="small" className="mr-1" />
                                                <span className="w-max">Xem xét</span>
                                            </button>
                                        )}
                                        {tab !== 'denied' && (
                                            <button
                                                className="p-1 mb-2 w-full flex items-center justify-center border rounded-lg hover:bg-black/5"
                                                onClick={() => handleDenied(resume.applyId)}
                                            >
                                                <PersonOffOutlined fontSize="small" className="mr-1" />
                                                <span className="w-max">Từ chối</span>
                                            </button>
                                        )}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListCandidate;
