import { Add } from '@mui/icons-material';
import { useState } from 'react';
import ModalEducation from '~/components/modal/modalEducation';
import ModalExp from '~/components/modal/modalExp';
import ModalProSkill from '~/components/modal/modalProSkill';
import MenuCV from './menuCV';
import ModalLanguage from '~/components/modal/modalLanguage';
import ModalSoftSkill from '~/components/modal/modalSoftSkill';
import ModalHobby from '~/components/modal/modalHobby';
import AvatarMale from '~/assets/images/candidate/avatar-candidate-male.jpg';

function FormCV({ tab }) {
    const [showModalProSkill, setShowModalProSkill] = useState(false);
    const [showModalExp, setShowModalExp] = useState(false);
    const [showModalEducation, setShowModalEducation] = useState(false);
    const [showModalLanguage, setShowModalLanguage] = useState(false);
    const [showModalSoftSkill, setShowModalSoftSkill] = useState(false);
    const [showModalHobby, setShowModalHobby] = useState(false);

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
                        <div className="w-[170px] h-[170px]">
                            <img src={AvatarMale} alt="avatar" />
                        </div>
                        <div className="ml-4 text-[#333] flex-1">
                            <div className="flex">
                                <strong className="w-max mr-2">Họ tên: </strong>
                                <input type="text" placeholder="(Chưa có dữ liệu)" className="outline-none flex-1" />
                            </div>
                            <div>
                                <strong>Ngày sinh: </strong>
                                <input type="date" className="outline-none p-2" />
                            </div>
                            <div>
                                <strong>Vị trí/Chức vụ: </strong>
                                <select defaultValue={0} className="outline-none p-2 appearance-none">
                                    <option className="" disabled value={0}>
                                        (Chưa có dữ liệu)
                                    </option>
                                    <option value={1}>Thực tập sinh</option>
                                    <option value={1}>Nhân viên/Chuyên viên</option>
                                    <option value={2}>Trưởng nhóm/Trưởng phòng</option>
                                    <option value={3}>Giám đốc và cấp cao hơn</option>
                                </select>
                            </div>
                            <div className="flex">
                                <strong className="w-max mr-2">Vị trí ứng tuyển: </strong>
                                <input type="text" placeholder="(Chưa có dữ liệu)" className="outline-none flex-1" />
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <h3 className="uppercase text-lg text-sky-600 font-semibold">thông tin cơ bản</h3>
                        <div className="my-2 flex gap-2">
                            <strong className="w-max">Số điện thoại: </strong>
                            <input type="text" placeholder="(Chưa có dữ liệu)" className="outline-none flex-1" />
                        </div>
                        <div className="my-2 flex gap-2">
                            <strong className="w-max">Email: </strong>
                            <input type="text" placeholder="(Chưa có dữ liệu)" className="outline-none flex-1" />
                        </div>
                        <div className="my-2 flex gap-2">
                            <strong className="w-max">Chỗ ở hiện tại: </strong>
                            <input type="text" placeholder="(Chưa có dữ liệu)" className="outline-none flex-1" />
                        </div>
                        <div className="my-2 flex justify-start items-center gap-2">
                            <strong className="w-max">Mức lương hiện tại: </strong>
                            <select defaultValue={0} className="outline-none p-2 appearance-none font-bold">
                                <option disabled value={0}>
                                    0 triệu
                                </option>
                                <option value={1}>1 triệu</option>
                                <option value={1}>5 triệu</option>
                                <option value={2}>10 triệu</option>
                                <option value={3}>100 triệu</option>
                            </select>{' '}
                        </div>
                        <div className="my-2 flex justify-start items-center gap-2">
                            <strong className="w-max">Mức lương mong muốn: </strong>
                            <span>
                                Từ
                                <select defaultValue={0} className="outline-none p-2 appearance-none font-bold">
                                    <option disabled value={0}>
                                        0 triệu
                                    </option>
                                    <option value={1}>1 triệu</option>
                                    <option value={1}>5 triệu</option>
                                    <option value={2}>10 triệu</option>
                                    <option value={3}>100 triệu</option>
                                </select>
                                đến{' '}
                                <select defaultValue={0} className="outline-none p-2 appearance-none font-bold">
                                    <option className="" disabled value={0}>
                                        0 triệu
                                    </option>
                                    <option value={1}>1 triệu</option>
                                    <option value={1}>5 triệu</option>
                                    <option value={2}>10 triệu</option>
                                    <option value={3}>100 triệu</option>
                                </select>
                            </span>
                            {/* <input type="text" placeholder="(Chưa có dữ liệu)" className="outline-none flex-1" /> */}
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <h3 className="uppercase text-lg text-sky-600 font-semibold">Giới thiệu bản thân</h3>
                        <textarea
                            placeholder="(Chưa có dữ liệu)"
                            className="w-full outline-none border p-2 mt-4 min-h-[100px]"
                        ></textarea>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <h3 className="uppercase text-lg text-sky-600 font-semibold">Mục tiêu nghề nghiệp</h3>
                        <textarea
                            placeholder="(Chưa có dữ liệu)"
                            className="w-full outline-none border p-2 mt-4 min-h-[100px]"
                        ></textarea>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Kĩ năng chuyên môn</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => setShowModalProSkill(true)}
                            >
                                <Add fontSize="small" />
                                Thêm kĩ năng chuyên môn
                            </button>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Kinh nghiệm làm việc</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => setShowModalExp(true)}
                            >
                                <Add fontSize="small" />
                                Thêm mới kinh nghiệm làm việc
                            </button>
                        </div>
                    </div>

                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Quá trình học tập</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => setShowModalEducation(true)}
                            >
                                <Add fontSize="small" />
                                Thêm kĩ mới quá trình học tập
                            </button>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Ngôn ngữ thành thạo</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => setShowModalLanguage(true)}
                            >
                                <Add fontSize="small" />
                                Thêm kĩ mới ngôn ngữ thành thạo
                            </button>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Kỹ năng mềm</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => setShowModalSoftSkill(true)}
                            >
                                <Add fontSize="small" />
                                Thêm kĩ mới kỹ nẵng mềm
                            </button>
                        </div>
                    </div>
                    <div className="border p-4 text-[#333] mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="uppercase text-lg text-sky-600 font-semibold">Sở thích</h3>
                            <button
                                className="flex justify-center items-center px-1 py-2 border border-sky-400 text-sky-700"
                                onClick={() => setShowModalHobby(true)}
                            >
                                <Add fontSize="small" />
                                Thêm mới sở thích
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showModalProSkill && <ModalProSkill setShowModalProSkill={setShowModalProSkill} />}
            {showModalExp && <ModalExp setShowModalExp={setShowModalExp} />}
            {showModalEducation && <ModalEducation setShowModalEducation={setShowModalEducation} />}
            {showModalLanguage && <ModalLanguage setShowModalLanguage={setShowModalLanguage} />}
            {showModalSoftSkill && <ModalSoftSkill setShowModalSoftSkill={setShowModalSoftSkill} />}
            {showModalHobby && <ModalHobby setShowModalHobby={setShowModalHobby} />}
        </div>
    );
}

export default FormCV;
