import { Add, AttachFileOutlined, CameraAlt } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import ModalEducation from '~/components/modal/modalEducation';
import ModalExp from '~/components/modal/modalExp';
import ModalProSkill from '~/components/modal/modalProSkill';
import MenuCV from './menuCV';
import ModalLanguage from '~/components/modal/modalLanguage';
import ModalSoftSkill from '~/components/modal/modalSoftSkill';
import ModalHobby from '~/components/modal/modalHobby';
import AvatarMale from '~/assets/images/candidate/avatar-candidate-male.jpg';
import { Autocomplete, Button, TextField } from '@mui/material';
import { typePositions } from '~/data/constants';
import * as format from '~/utils/handleDate';
import * as resumeService from '~/service/resumeService';

import { AppContext } from '~/context/AppProvider';
import { Link, useParams } from 'react-router-dom';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { v4 } from 'uuid';
import { storage } from '~/firebase';
import ModalAttachments from '~/components/modal/modalAttachments';
import SliderLine from '../slider/line';

function FormCV({ tab, type }) {
    const { user } = useContext(AppContext);
    const { id } = useParams();

    const [showModalProSkill, setShowModalProSkill] = useState(false);
    const [showModalExp, setShowModalExp] = useState(false);
    const [showModalEducation, setShowModalEducation] = useState(false);
    const [showModalLanguage, setShowModalLanguage] = useState(false);
    const [showModalSoftSkill, setShowModalSoftSkill] = useState(false);
    const [showModalHobby, setShowModalHobby] = useState(false);
    const [showModalAttachments, setShowModalAttachments] = useState(false);

    const [keyModal, setKeyModal] = useState(null);

    const [resume, setResume] = useState({
        file: null,
        name: '',
        image: '',
        birthday: '',
        typePosition: '',
        positionApply: '',
        phone: '',
        email: '',
        address: '',
        currentSalary: '',
        desiredSalary: '',
        introduce: '',
        careerGoals: '',
        candidateId: user?.userId,
        status: 0,
        listResumeProSkill: [],
        listWorkExperience: [],
        listResumeEducation: [],
        listResumeLanguage: [],
        listResumeSoftSkill: [],
        listResumeHobby: [],
        listAttachments: [],
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        let flag = true;
        if (!file) {
            flag = false;
            setResume({ ...resume, image: null, file: null });
        } else {
            let img = ['png', 'jpg', 'jpeg', 'PNG', 'JPG'];
            if (file.size > 1024 * 1024) {
                flag = false;
                alert('Kích thước file quá lớn');
                return;
            } else if (!img.includes(file.name.split('.').pop())) {
                flag = false;
                setResume({ ...resume, image: null, file: null });
                alert('File phải thuộc định dạng png, jpg, jpeg');
                return;
            }
        }
        if (flag) {
            const reader = new FileReader();
            reader.onload = () => {
                setResume({ ...resume, image: reader.result, file: file });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (resume, id) => {
        let dataCreate = {
            ...resume,
            candidateId: user?.userId,
            birthday: new Date(resume.birthday).toISOString().split('T')[0],
            currentSalary: Number.parseFloat(resume.currentSalary),
            desiredSalary: Number.parseFloat(resume.desiredSalary),
            listResumeEducation: resume.listResumeEducation.map((education) => ({
                ...education,
                graduationYear: Number.parseInt(education.graduationYear),
                statusEducation: education?.statusEducation ? true : false,
            })),
            listResumeProSkill: resume.listResumeProSkill.map((proSkill) => ({
                ...proSkill,
                yearExperience: Number.parseInt(proSkill.yearExperience),
            })),
            listWorkExperience: resume.listWorkExperience.map((workExperience) => ({
                ...workExperience,
                startDay: new Date(workExperience.startDay).toISOString().split('T')[0],
                endDay: new Date(workExperience.endDay).toISOString().split('T')[0],
                statusWork: workExperience?.statusWork ? true : false,
            })),
        };
        console.log(dataCreate);

        if (resume?.file) {
            const imageRef = ref(storage, `images/${resume?.file.name + v4()}`);
            const snapshot = await uploadBytes(imageRef, resume?.file);
            const url = await getDownloadURL(snapshot.ref);
            dataCreate = { ...dataCreate, image: url };
        }

        if (type === 'create') {
            const res = await resumeService.create(dataCreate);
            if (res?.success) {
                alert('Tạo CV thành công');
            } else {
                alert('Tạo CV thất bại');
            }
        } else {
            const res = await resumeService.update(dataCreate, id);
            if (res?.success) {
                alert('Cập nhật CV thành công');
            } else {
                alert('Cập nhật CV thất bại');
            }
        }
    };

    useEffect(() => {
        const getResume = async () => {
            const res = await resumeService.getResumeById(id);
            if (res?.success) {
                setResume({
                    ...res.data,
                    listResumeProSkill: res.data.listResumeProSkill.map((proSkill, index) => ({
                        ...proSkill,
                        keyProSkill: index,
                    })),
                    listResumeEducation: res.data.listResumeEducation.map((education, index) => ({
                        ...education,
                        keyEducation: index,
                    })),
                    listWorkExperience: res.data.listWorkExperience.map((workExp, index) => ({
                        ...workExp,
                        keyExp: index,
                    })),
                    listResumeLanguage: res.data.listResumeLanguage.map((language, index) => ({
                        ...language,
                        keyLanguage: index,
                    })),
                    listResumeSoftSkill: res.data.listResumeSoftSkill.map((softSkill, index) => ({
                        ...softSkill,
                        keySoftSkill: index,
                    })),
                    listResumeHobby: res.data.listResumeHobby.map((hobby, index) => ({
                        ...hobby,
                        keyHobby: index,
                    })),
                    listAttachments: res.data?.listAttachments?.map((attachment, index) => ({
                        ...attachment,
                        keyAttachment: index,
                    })),
                });
            }
        };
        if (type === 'update') {
            getResume();
        }
    }, [id, type]);
    return (
        <div className="container mx-auto mt-[100px]">
            <MenuCV tab={tab}></MenuCV>

            <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="border rounded p-2">
                    <div className="px-2 py-1 border mt-1">
                        <h2 className="text-xl font-semibold">1. Thông tin cơ bản</h2>
                    </div>
                    <div className="px-2 py-1 border mt-1">
                        <h2 className="text-xl font-semibold">2. Kỹ năng chuyên môn</h2>
                    </div>
                    <div className="px-2 py-1 border mt-1">
                        <h2 className="text-xl font-semibold">3. Kinh nghiệm làm việc</h2>
                    </div>
                    <div className="px-2 py-1 border mt-1">
                        <h2 className="text-xl font-semibold">4. Quá trình học tập</h2>
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="flex justify-start items-center border p-4">
                        <div className="w-[170px] h-[170px] relative group">
                            <img src={resume?.image || AvatarMale} alt="avatar" />
                            <label
                                className="cursor-pointer absolute bottom-0 left-[50%] translate-x-[-50%] bg-white w-[50px] h-[50px] rounded-full justify-center items-center border hidden group-hover:flex"
                                htmlFor="avatar"
                            >
                                <CameraAlt />
                            </label>
                            <input id="avatar" type="file" className="hidden" onChange={handleImageUpload} />
                        </div>
                        <div className="ml-4 text-[#333] flex-1">
                            <div className="flex">
                                <strong className="w-max mr-2">Họ tên: </strong>
                                <input
                                    type="text"
                                    placeholder="(Chưa có dữ liệu)"
                                    className="outline-none flex-1"
                                    value={resume?.name}
                                    onChange={(e) => setResume({ ...resume, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <strong>Ngày sinh: </strong>
                                <input
                                    type="date"
                                    className="outline-none p-2"
                                    value={resume?.birthday ? format.formatDate(resume?.birthday, 'yyyy-mm-dd') : ''}
                                    onChange={(e) => setResume({ ...resume, birthday: e.target.value })}
                                />
                            </div>
                            <div className="flex gap-2 items-center">
                                <strong>Loại vị trí: </strong>
                                <Autocomplete
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '0',
                                            padding: '0',
                                        },
                                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                    }}
                                    className="bg-white rounded-md flex-1"
                                    disablePortal
                                    popupIcon={''}
                                    options={typePositions}
                                    size="small"
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="(Chưa có dữ liệu)"
                                            inputProps={{
                                                ...params.inputProps,
                                            }}
                                        />
                                    )}
                                    value={resume?.typePosition ? resume?.typePosition : null}
                                    onChange={(e, value) => setResume({ ...resume, typePosition: value })}
                                />
                            </div>
                            <div className="flex">
                                <strong className="w-max mr-2">Vị trí ứng tuyển: </strong>
                                <input
                                    type="text"
                                    placeholder="(Chưa có dữ liệu)"
                                    className="outline-none flex-1"
                                    value={resume?.positionApply}
                                    onChange={(e) => setResume({ ...resume, positionApply: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <h3 className="uppercase text-lg text-sky-600 font-semibold">thông tin cơ bản</h3>
                        <div className="my-2 flex gap-2">
                            <strong className="w-max">Số điện thoại: </strong>
                            <input
                                type="text"
                                placeholder="(Chưa có dữ liệu)"
                                className="outline-none flex-1"
                                value={resume?.phone}
                                onChange={(e) => setResume({ ...resume, phone: e.target.value })}
                            />
                        </div>
                        <div className="my-2 flex gap-2">
                            <strong className="w-max">Email: </strong>
                            <input
                                type="text"
                                placeholder="(Chưa có dữ liệu)"
                                className="outline-none flex-1"
                                value={resume?.email}
                                onChange={(e) => setResume({ ...resume, email: e.target.value })}
                            />
                        </div>
                        <div className="my-2 flex gap-2">
                            <strong className="w-max">Chỗ ở hiện tại: </strong>
                            <input
                                type="text"
                                placeholder="(Chưa có dữ liệu)"
                                className="outline-none flex-1"
                                value={resume?.address}
                                onChange={(e) => setResume({ ...resume, address: e.target.value })}
                            />
                        </div>
                        <div className="my-2 flex justify-start items-center gap-2">
                            <strong className="w-max">Mức lương hiện tại: </strong>
                            <input
                                className="outline-none p-2 text-center border-b"
                                type="number"
                                placeholder="(Chưa có dữ liệu)"
                                value={resume?.currentSalary}
                                onChange={(e) => setResume({ ...resume, currentSalary: e.target.value })}
                            />
                            <p>(triệu VNĐ)</p>
                        </div>
                        <div className="my-2 flex justify-start items-center gap-2">
                            <strong className="w-max">Mức lương mong muốn: </strong>
                            <input
                                className="outline-none border-b p-2 text-center"
                                type="number"
                                placeholder="(Chưa có dữ liệu)"
                                value={resume?.desiredSalary}
                                onChange={(e) => setResume({ ...resume, desiredSalary: e.target.value })}
                            />
                            <p>(triệu VNĐ)</p>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <h3 className="uppercase text-lg text-sky-600 font-semibold">Giới thiệu bản thân</h3>
                        <textarea
                            placeholder="(Chưa có dữ liệu)"
                            className="w-full outline-none border p-2 mt-4 min-h-[100px]"
                            value={resume?.introduce}
                            onChange={(e) => setResume({ ...resume, introduce: e.target.value })}
                        ></textarea>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <h3 className="uppercase text-lg text-sky-600 font-semibold">Mục tiêu nghề nghiệp</h3>
                        <textarea
                            placeholder="(Chưa có dữ liệu)"
                            className="w-full outline-none border p-2 mt-4 min-h-[100px]"
                            value={resume?.careerGoals}
                            onChange={(e) => setResume({ ...resume, careerGoals: e.target.value })}
                        ></textarea>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Kĩ năng chuyên môn</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => {
                                    setKeyModal(null);
                                    setShowModalProSkill(true);
                                }}
                            >
                                <Add fontSize="small" />
                                Thêm kĩ năng chuyên môn
                            </button>
                        </div>
                        <ul className="pl-4">
                            {resume.listResumeProSkill.map((proSkill, index) => (
                                <div key={index} className="group relative mt-2 border-b py-2">
                                    <li>{`${proSkill.proSkillName} (${proSkill.yearExperience} NĂM)`}</li>
                                    <div className="hidden absolute gap-2 bg-white top-0 right-0 group-hover:flex">
                                        <Button
                                            className="p-2"
                                            size="small"
                                            variant="outlined"
                                            color="success"
                                            onClick={() => {
                                                setKeyModal(index);
                                                setShowModalProSkill(true);
                                            }}
                                        >
                                            Chỉnh sửa
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => {
                                                setResume({
                                                    ...resume,
                                                    listResumeProSkill: resume.listResumeProSkill
                                                        .filter((proSkill) => proSkill.keyProSkill !== index)
                                                        .map((proSkill) => {
                                                            if (proSkill.keyProSkill > index) {
                                                                return {
                                                                    ...proSkill,
                                                                    keyProSkill: proSkill.keyProSkill - 1,
                                                                };
                                                            }
                                                            return proSkill;
                                                        }),
                                                });
                                            }}
                                        >
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Kinh nghiệm làm việc</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => {
                                    setKeyModal(null);
                                    setShowModalExp(true);
                                }}
                            >
                                <Add fontSize="small" />
                                Thêm mới kinh nghiệm làm việc
                            </button>
                        </div>
                        <div>
                            {resume.listWorkExperience.map((exp, index) => (
                                <div key={index} className="group relative mt-2">
                                    <div className="border-b pb-2">
                                        <p className="font-bold">{`${exp.nameCompany} (${format.formatDate(
                                            exp.startDay,
                                        )} đến ${exp.statusWork ? 'nay' : format.formatDate(exp.endDay)})`}</p>
                                        <p>Vị trí: {exp.position}</p>
                                        <p>Mô tả: {exp.description}</p>
                                    </div>
                                    <div className="hidden absolute gap-2 bg-white top-0 right-0 group-hover:flex">
                                        <Button
                                            className="p-2"
                                            size="small"
                                            variant="outlined"
                                            color="success"
                                            onClick={() => {
                                                setKeyModal(index);
                                                setShowModalExp(true);
                                            }}
                                        >
                                            Chỉnh sửa
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => {
                                                setResume({
                                                    ...resume,
                                                    listWorkExperience: resume.listWorkExperience
                                                        .filter((exp) => exp.keyExp !== index)
                                                        .map((exp) => {
                                                            if (exp.keyExp > index) {
                                                                return {
                                                                    ...exp,
                                                                    keyExp: exp.keyExp - 1,
                                                                };
                                                            }
                                                            return exp;
                                                        }),
                                                });
                                            }}
                                        >
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Quá trình học tập</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => {
                                    setKeyModal(null);
                                    setShowModalEducation(true);
                                }}
                            >
                                <Add fontSize="small" />
                                Thêm kĩ mới quá trình học tập
                            </button>
                        </div>
                        <div>
                            {resume.listResumeEducation.map((education, index) => (
                                <div key={index} className="group relative mt-2">
                                    <div className="py-4 border-b">
                                        <p className="font-bold">{education.nameSchool}</p>
                                        <p>Chuyên ngành: {education.majors}</p>
                                        <p>Bằng cấp: {education.degree}</p>
                                        {education.statusEducation ? (
                                            <p>Đang học tại đây</p>
                                        ) : (
                                            <p>Năm tốt nghiệp: {education.graduationYear}</p>
                                        )}
                                        <p>Mô tả: {education.description}</p>
                                    </div>
                                    <div className="hidden absolute gap-2 bg-white top-0 right-0 group-hover:flex">
                                        <Button
                                            className="p-2"
                                            size="small"
                                            variant="outlined"
                                            color="success"
                                            onClick={() => {
                                                setKeyModal(index);
                                                setShowModalEducation(true);
                                            }}
                                        >
                                            Chỉnh sửa
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => {
                                                setResume({
                                                    ...resume,
                                                    listResumeEducation: resume.listResumeEducation
                                                        .filter((education) => education.keyEducation !== index)
                                                        .map((education) => {
                                                            if (education.keyEducation > index) {
                                                                return {
                                                                    ...education,
                                                                    keyEducation: education.keyEducation - 1,
                                                                };
                                                            }
                                                            return education;
                                                        }),
                                                });
                                            }}
                                        >
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Ngôn ngữ thành thạo</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => {
                                    setKeyModal(null);
                                    setShowModalLanguage(true);
                                }}
                            >
                                <Add fontSize="small" />
                                Thêm kĩ mới ngôn ngữ thành thạo
                            </button>
                        </div>
                        <div>
                            <div>
                                {resume.listResumeLanguage.map((language, index) => (
                                    <div key={index} className="group relative mt-2">
                                        <div className="flex justify-start items-center">
                                            <p className="text-base font-semibold my-1">{language.languageName}</p>
                                        </div>
                                        <SliderLine value={language?.prowess || 0} />
                                        <div className="hidden absolute gap-2 bg-white top-0 right-0 group-hover:flex">
                                            <Button
                                                className="p-2"
                                                size="small"
                                                variant="outlined"
                                                color="success"
                                                onClick={() => {
                                                    setKeyModal(index);
                                                    setShowModalLanguage(true);
                                                }}
                                            >
                                                Chỉnh sửa
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                                onClick={() => {
                                                    setResume({
                                                        ...resume,
                                                        listResumeLanguage: resume.listResumeLanguage
                                                            .filter((language) => language.keyLanguage !== index)
                                                            .map((language) => {
                                                                if (language.keyLanguage > index) {
                                                                    return {
                                                                        ...language,
                                                                        keyLanguage: language.keyLanguage - 1,
                                                                    };
                                                                }
                                                                return language;
                                                            }),
                                                    });
                                                }}
                                            >
                                                Xóa
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Kỹ năng mềm</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => {
                                    setKeyModal(null);
                                    setShowModalSoftSkill(true);
                                }}
                            >
                                <Add fontSize="small" />
                                Thêm kĩ mới kỹ nẵng mềm
                            </button>
                        </div>
                        <div>
                            {resume.listResumeSoftSkill.map((softSkill, index) => (
                                <div key={index} className="group relative mt-2">
                                    <div className="flex justify-start items-center">
                                        <p className="text-base font-semibold my-1">{softSkill.softSkillName}</p>
                                    </div>

                                    <SliderLine value={softSkill?.prowess || 0} />
                                    <div className="hidden absolute gap-2 bg-white top-0 right-0 group-hover:flex">
                                        <Button
                                            className="p-2"
                                            size="small"
                                            variant="outlined"
                                            color="success"
                                            onClick={() => {
                                                setKeyModal(index);
                                                setShowModalSoftSkill(true);
                                            }}
                                        >
                                            Chỉnh sửa
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => {
                                                setResume({
                                                    ...resume,
                                                    listResumeSoftSkill: resume.listResumeSoftSkill
                                                        .filter((softSkill) => softSkill.keySoftSkill !== index)
                                                        .map((softSkill) => {
                                                            if (softSkill.keySoftSkill > index) {
                                                                return {
                                                                    ...softSkill,
                                                                    keySoftSkill: softSkill.keySoftSkill - 1,
                                                                };
                                                            }
                                                            return softSkill;
                                                        }),
                                                });
                                            }}
                                        >
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Sở thích</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => {
                                    setKeyModal(null);
                                    setShowModalHobby(true);
                                }}
                            >
                                <Add fontSize="small" />
                                Thêm mới sở thích
                            </button>
                        </div>
                        <div>
                            <ul className="pl-2">
                                {resume.listResumeHobby.map((hobby, index) => (
                                    <div key={index} className="group relative mt-2">
                                        <li className="border-b py-2">{hobby.name}</li>
                                        <div className="hidden absolute gap-2 bg-white top-0 right-0 group-hover:flex">
                                            <Button
                                                className="p-2"
                                                size="small"
                                                variant="outlined"
                                                color="success"
                                                onClick={() => {
                                                    setKeyModal(index);
                                                    setShowModalHobby(true);
                                                }}
                                            >
                                                Chỉnh sửa
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                                onClick={() => {
                                                    setResume({
                                                        ...resume,
                                                        listResumeHobby: resume.listResumeHobby
                                                            .filter((hobby) => hobby.keyHobby !== index)
                                                            .map((hobby) => {
                                                                if (hobby.keyHobby > index) {
                                                                    return {
                                                                        ...hobby,
                                                                        keyProSkill: hobby.keyHobby - 1,
                                                                    };
                                                                }
                                                                return hobby;
                                                            }),
                                                    });
                                                }}
                                            >
                                                Xóa
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">File đính kèm</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => {
                                    setKeyModal(null);
                                    setShowModalAttachments(true);
                                }}
                            >
                                <Add fontSize="small" />
                                Thêm file đính kèm
                            </button>
                        </div>
                        <div>
                            <ul className="pl-2">
                                {resume.listAttachments?.map((attachment, index) => (
                                    <div key={index} className="group relative mt-2">
                                        <Link
                                            to={attachment?.url}
                                            className="border-b py-2 flex justify-start items-center gap-4"
                                        >
                                            <AttachFileOutlined />
                                            {attachment.name}
                                        </Link>
                                        <div className="hidden absolute gap-2 bg-white top-0 right-0 group-hover:flex">
                                            <Button
                                                className="p-2"
                                                size="small"
                                                variant="outlined"
                                                color="success"
                                                onClick={() => {
                                                    setKeyModal(index);
                                                    setShowModalAttachments(true);
                                                }}
                                            >
                                                Chỉnh sửa
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                                onClick={() => {
                                                    setResume({
                                                        ...resume,
                                                        listAttachments: resume.listAttachments
                                                            .filter((attachment) => attachment.keyAttachments !== index)
                                                            .map((attachment) => {
                                                                if (attachment.keyAttachments > index) {
                                                                    return {
                                                                        ...attachment,
                                                                        keyProSkill: attachment.keyAttachments - 1,
                                                                    };
                                                                }
                                                                return attachment;
                                                            }),
                                                    });
                                                }}
                                            >
                                                Xóa
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button Create/Update */}
            <div className="py-4 flex justify-center">
                {type === 'create' ? (
                    <Button size="large" variant="contained" onClick={() => handleSubmit(resume, -1)}>
                        Tạo CV ngay
                    </Button>
                ) : (
                    <Button size="large" variant="contained" onClick={() => handleSubmit(resume, id)}>
                        Cập nhật CV
                    </Button>
                )}
            </div>
            {showModalProSkill && (
                <ModalProSkill
                    setShowModalProSkill={setShowModalProSkill}
                    keyModal={keyModal}
                    setResume={setResume}
                    resume={resume}
                />
            )}
            {showModalExp && (
                <ModalExp keyModal={keyModal} setShowModalExp={setShowModalExp} setResume={setResume} resume={resume} />
            )}
            {showModalEducation && (
                <ModalEducation
                    setShowModalEducation={setShowModalEducation}
                    keyModal={keyModal}
                    setResume={setResume}
                    resume={resume}
                />
            )}
            {showModalLanguage && (
                <ModalLanguage
                    setShowModalLanguage={setShowModalLanguage}
                    keyModal={keyModal}
                    setResume={setResume}
                    resume={resume}
                />
            )}
            {showModalSoftSkill && (
                <ModalSoftSkill
                    setShowModalSoftSkill={setShowModalSoftSkill}
                    keyModal={keyModal}
                    setResume={setResume}
                    resume={resume}
                />
            )}
            {showModalHobby && (
                <ModalHobby
                    setShowModalHobby={setShowModalHobby}
                    keyModal={keyModal}
                    setResume={setResume}
                    resume={resume}
                />
            )}
            {showModalAttachments && (
                <ModalAttachments
                    setShowModalAttachments={setShowModalAttachments}
                    keyModal={keyModal}
                    setResume={setResume}
                    resume={resume}
                />
            )}
        </div>
    );
}

export default FormCV;
