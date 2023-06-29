import MenuCV from './menuCV';
import AvatarMale from '~/assets/images/candidate/avatar-candidate-male.jpg';
import BackGroundTemplate1 from '~/assets/images/candidate/background-template-1-cv.jpg';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import * as resumeService from '~/service/resumeService';
import * as format from '~/utils/handleDate';
import { AttachFileOutlined, FileDownloadOutlined } from '@mui/icons-material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import SliderLine from '../slider/line';

function ViewDetailCV() {
    const { id } = useParams();
    const [resume, setResume] = useState();
    const CVRef = useRef();

    const handleDownloadPdf = () => {
        html2canvas(CVRef.current, {}).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pageWidth = 210;
            console.log(imgData);
            // const pageHeight = 297;
            const height = (canvas.height * pageWidth) / canvas.width;

            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, height);
            pdf.save(`${resume?.positionApply}.pdf`);
        });
    };

    useEffect(() => {
        const getResume = async () => {
            const res = await resumeService.getResumeById(id);
            if (res?.success) {
                setResume(res.data);
            }
        };
        getResume();
    }, [id]);
    return (
        <div className="my-[100px] text-base">
            <div className="container mx-auto flex gap-4">
                <MenuCV tab={'viewDetailCV'} id={id} />
                <button
                    className={`outline-none flex items-center px-4 py-1 border border-sky-500 rounded-md uppercase font-semibold hover:bg-sky-700 hover:text-white`}
                    onClick={handleDownloadPdf}
                >
                    <FileDownloadOutlined className="mr-1" />
                    Tải xuống
                </button>
            </div>
            <div className="mt-8 flex justify-center items-end">
                <div className="shadow-ssm w-[210mm] min-h-[297mm] ">
                    <div ref={CVRef} className="bg-white">
                        <div
                            className="bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url("${BackGroundTemplate1}")` }}
                        >
                            <div className="flex justify-start items-center">
                                <div className="py-16 px-12">
                                    <div className="border-2 border-[#000] overflow-hidden rounded-lg w-[120px] h-[120px]">
                                        <img src={resume?.image || AvatarMale} alt="avatar" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-3xl mb-2">{resume?.name}</h2>
                                    <h2 className="text-xl">{resume?.positionApply}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-10 gap-4 mt-8 px-4">
                            <div className="col-span-4 flex justify-center">
                                <div>
                                    <div className="mb-12">
                                        <h2 className="text-xl uppercase font-bold mb-4">Thông tin liên hệ</h2>
                                        <div className="mb-4">
                                            <p className="font-semibold mb-2 text-lg">Số điện thoại</p>
                                            <p className="text-lg">{resume?.phone}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="font-semibold mb-2 text-lg">Email</p>
                                            <p className="text-lg">{resume?.email}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="font-semibold mb-2 text-lg">Ngày sinh</p>
                                            <p className="text-lg">{format.formatDate(resume?.birthday)}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="font-semibold mb-2 text-lg">Địa chỉ</p>
                                            <p className="text-lg">{resume?.address}</p>
                                        </div>
                                    </div>
                                    <div className="mb-12">
                                        <h2 className="text-xl uppercase font-bold mb-2">Kỹ năng</h2>
                                        <ul className="mb-4">
                                            {resume?.listResumeProSkill.map((proSkill) => (
                                                <li key={proSkill.id} className="text-lg list-none">
                                                    - {proSkill?.proSkillName} ({proSkill?.yearExperience} năm)
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-12">
                                        <h2 className="text-xl uppercase font-bold mb-4">Sở thích</h2>
                                        <ul className="mb-8">
                                            {resume?.listResumeHobby?.map((hobby) => (
                                                <li key={hobby.id} className="text-lg list-none">
                                                    - {hobby?.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-12">
                                        <h2 className="text-xl uppercase font-bold mb-4">Kỹ năng mềm</h2>
                                        {resume?.listResumeSoftSkill?.map((softSkill) => (
                                            <div key={softSkill.id}>
                                                <p className="text-lg">{softSkill?.softSkillName}</p>
                                                <div className="flex justify-center items-center">
                                                    <SliderLine color="orange" value={softSkill?.prowess || 0} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-6 pr-8">
                                <div className="mb-12">
                                    <h2 className="text-xl uppercase font-bold mb-4">Giới thiệu bản thân</h2>
                                    <div className="mb-4">
                                        <p className="text-justify text-lg">{resume?.introduce}</p>
                                    </div>
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-xl uppercase font-bold mb-4">Mục tiêu nghề nghiệp</h2>
                                    <div className="mb-4">
                                        <p className="text-justify text-lg">{resume?.careerGoals}</p>
                                    </div>
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-xl uppercase font-bold mb-4">Học vấn</h2>
                                    {resume?.listResumeEducation?.map((education) => (
                                        <div key={education.id} className="mb-4 text-lg">
                                            <p className="font-bold">{education?.nameSchool}</p>
                                            <p>Bằng cấp: {education?.degree}</p>
                                            <p>Chuyên ngành: {education?.majors}</p>
                                            <p>
                                                {education?.statusEducation
                                                    ? `Tốt nghiệp năm ${education?.graduationYear}`
                                                    : 'Đang học tại đây'}
                                            </p>
                                            <p>{education?.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-xl uppercase font-bold mb-4">Kinh nghiệm làm việc</h2>

                                    {resume?.listWorkExperience?.map((workExp) => (
                                        <div key={workExp.id} className="mb-4 text-lg">
                                            <p className="font-bold">{workExp?.nameCompany}</p>
                                            <p>
                                                Thời gian: {format.formatDate(workExp?.startDay)} đến{' '}
                                                {workExp?.statusWork ? 'nay' : format.formatDate(workExp?.endDay)}
                                            </p>
                                            <p>Vị trí: {workExp?.position}</p>
                                            <p>{workExp?.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-xl uppercase font-bold mb-4">File đính kèm</h2>

                                    {resume?.listAttachments?.map((attachment) => (
                                        <Link
                                            to={attachment?.url}
                                            key={attachment.id}
                                            className="mb-4 text-lg flex justify-start items-center"
                                        >
                                            <AttachFileOutlined />
                                            <p>{attachment?.name}</p>
                                        </Link>
                                    ))}
                                </div>
                                {/* <div className="mb-12">
                                    <h2 className="text-3xl uppercase font-bold mb-4">Hoạt động</h2>
                                    <div className="mb-4">
                                        <p className="font-bold">Ngày hội tuyển dụng IT (9/4/2023 - 9/4/2023)</p>
                                        <p>Diễn giả/ cố vấn kĩ thuật</p>
                                        <p>Trả lời câu hỏi về vị trí cũng như tổ chức người tham dự quan tâm</p>
                                    </div>
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-3xl uppercase font-bold mb-4">Giải thưởng</h2>
                                    <div className="mb-4">
                                        <p className="font-bold">Nhân viên xuất sắc FPT năm 2023</p>
                                    </div>
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-3xl uppercase font-bold mb-4">Chứng chỉ</h2>
                                    <div className="mb-4">
                                        <p className="font-bold">Chứng chỉ IELTS 7.0 (2023)</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewDetailCV;
