import MenuCV from './menuCV';
import AvatarMale from '~/assets/images/candidate/avatar-candidate-male.jpg';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import * as resumeService from '~/service/resumeService';
import * as format from '~/utils/handleDate';
import {
    AttachFileOutlined,
    Cake,
    Facebook,
    FileDownloadOutlined,
    GitHub,
    LinkedIn,
    LocalPhone,
    LocationOn,
    Mail,
    Twitter,
} from '@mui/icons-material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import SliderLine from '../slider/line';
import Template2 from '../template/template2';

function ViewDetailCV() {
    const { id, template } = useParams();
    const [resume, setResume] = useState();
    const CVRef = useRef();

    const handleDownloadPdf = () => {
        html2canvas(CVRef.current, {}).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pageWidth = 210;
            const pageHeight = 297;
            // const height = (canvas.height * pageWidth) / canvas.width;

            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
            pdf.save(`${resume?.name}-${resume?.positionApply}.pdf`);
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

    const template1 = (resume) => {
        return (
            <div className="my-[100px] text-base">
                <div className="container mx-auto flex gap-4">
                    <MenuCV template={template} tab={'viewDetailCV'} id={id} />
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
                            <div className="bg-orange-400">
                                <div className="flex justify-start items-center">
                                    <div className="px-4 py-8">
                                        <div className="border border-[#000] overflow-hidden rounded-lg w-[120px] h-[120px]">
                                            <img
                                                className="w-full h-full object-contain"
                                                src={resume?.image || AvatarMale}
                                                alt="avatar"
                                            />
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
                                        <div className="mb-4">
                                            <h2 className="text-xl uppercase font-bold mb-2 text-orange-500">
                                                Thông tin liên hệ
                                            </h2>
                                            <div className="mb-2 flex justify-start items-center gap-2">
                                                <LocalPhone />
                                                <p className="text-lg">{resume?.phone}</p>
                                            </div>
                                            <div className="mb-2 flex justify-start items-center gap-2">
                                                <Mail />
                                                <p className="text-lg">{resume?.email}</p>
                                            </div>
                                            {resume?.facebook && (
                                                <div className="mb-2 flex justify-start items-center gap-2">
                                                    <Facebook />
                                                    <p className="text-lg">{resume?.facebook}</p>
                                                </div>
                                            )}
                                            {resume?.twitter && (
                                                <div className="mb-2 flex justify-start items-center gap-2">
                                                    <Twitter />
                                                    <p className="text-lg">{resume?.twitter}</p>
                                                </div>
                                            )}
                                            {resume?.linkedIn && (
                                                <div className="mb-2 flex justify-start items-center gap-2">
                                                    <LinkedIn />
                                                    <p className="text-lg">{resume?.linkedIn}</p>
                                                </div>
                                            )}
                                            {resume?.github && (
                                                <div className="mb-2 flex justify-start items-center gap-2">
                                                    <GitHub />
                                                    <p className="text-lg">{resume?.github}</p>
                                                </div>
                                            )}
                                            <div className="mb-2 flex justify-start items-center gap-2">
                                                <Cake />
                                                <p className="text-lg">{format.formatDate(resume?.birthday)}</p>
                                            </div>
                                            <div className="mb-2 flex justify-start items-center gap-2">
                                                <LocationOn />
                                                <p className="text-lg">{resume?.address}</p>
                                            </div>
                                        </div>
                                        {resume?.listResumeProSkill.length > 0 && (
                                            <div className="mb-4">
                                                <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                    Kỹ năng
                                                </h2>
                                                <ul>
                                                    {resume?.listResumeProSkill.map((proSkill) => (
                                                        <li key={proSkill.id} className="text-lg list-none">
                                                            - {proSkill?.proSkillName} ({proSkill?.yearExperience} năm)
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {resume?.listResumeHobby.length > 0 && (
                                            <div className="mb-4">
                                                <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                    Sở thích
                                                </h2>
                                                <ul className="mb-2">
                                                    {resume?.listResumeHobby?.map((hobby) => (
                                                        <li key={hobby.id} className="text-lg list-none">
                                                            - {hobby?.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {resume?.listResumeSoftSkill?.length > 0 && (
                                            <div className="mb-4">
                                                <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                    Kỹ năng mềm
                                                </h2>
                                                {resume?.listResumeSoftSkill?.map((softSkill) => (
                                                    <div key={softSkill.id}>
                                                        <p className="text-lg">{softSkill?.softSkillName}</p>
                                                        <div className="flex justify-center items-center">
                                                            <SliderLine
                                                                color="orange"
                                                                value={softSkill?.prowess || 0}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {resume?.listResumeLanguage?.length > 0 && (
                                            <div className="mb-4">
                                                <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                    Ngôn ngữ
                                                </h2>
                                                {resume?.listResumeLanguage?.map((language) => (
                                                    <div key={language.id}>
                                                        <p className="text-lg">{language?.languageName}</p>
                                                        <div className="flex justify-center items-center">
                                                            <SliderLine color="orange" value={language?.prowess || 0} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-span-6 pr-8">
                                    {resume?.introduce && (
                                        <div className="mb-4">
                                            <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                Giới thiệu bản thân
                                            </h2>
                                            <div>
                                                <p className="text-justify text-lg">{resume?.introduce}</p>
                                            </div>
                                        </div>
                                    )}

                                    {resume?.careerGoals && (
                                        <div className="mb-4">
                                            <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                Mục tiêu nghề nghiệp
                                            </h2>
                                            <div>
                                                <p className="text-justify text-lg">{resume?.careerGoals}</p>
                                            </div>
                                        </div>
                                    )}

                                    {resume?.listResumeEducation.length > 0 && (
                                        <div className="mb-4">
                                            <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                Học vấn
                                            </h2>
                                            {resume?.listResumeEducation?.map((education) => (
                                                <div key={education.id} className="mb-1 text-lg">
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
                                    )}

                                    {resume?.listWorkExperience.length > 0 && (
                                        <div className="mb-4">
                                            <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                Kinh nghiệm làm việc
                                            </h2>

                                            {resume?.listWorkExperience?.map((workExp) => (
                                                <div key={workExp.id} className="mb-1 text-lg">
                                                    <p className="font-bold">{workExp?.nameCompany}</p>
                                                    <p>
                                                        Thời gian: {format.formatDate(workExp?.startDay)} đến{' '}
                                                        {workExp?.statusWork
                                                            ? 'nay'
                                                            : format.formatDate(workExp?.endDay)}
                                                    </p>
                                                    <p>Vị trí: {workExp?.position}</p>
                                                    <p>{workExp?.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {resume?.listAttachments.length > 0 && (
                                        <div className="mb-4">
                                            <h2 className="text-xl uppercase font-bold mb-1 text-orange-500">
                                                File đính kèm
                                            </h2>

                                            {resume?.listAttachments?.map((attachment) => (
                                                <Link
                                                    to={attachment?.url}
                                                    key={attachment.id}
                                                    className="mb-1 text-lg flex justify-start items-center"
                                                >
                                                    <AttachFileOutlined />
                                                    <p>{attachment?.name}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* <div className="mb-4">
                                    <h2 className="text-3xl uppercase font-bold mb-4">Hoạt động</h2>
                                    <div className="mb-4">
                                        <p className="font-bold">Ngày hội tuyển dụng IT (9/4/2023 - 9/4/2023)</p>
                                        <p>Diễn giả/ cố vấn kĩ thuật</p>
                                        <p>Trả lời câu hỏi về vị trí cũng như tổ chức người tham dự quan tâm</p>
                                    </div>
                                </div>
                                <div className="mb-4">
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
    };
    const template2 = (resume) => {
        return (
            <Template2
                template={template}
                resume={resume}
                handleDownloadPdf={handleDownloadPdf}
                CVRef={CVRef}
                id={id}
            />
        );
    };
    return (
        <>
            {template === '1' && template1(resume)}
            {template === '2' && template2(resume)}
        </>
    );
}

export default ViewDetailCV;
