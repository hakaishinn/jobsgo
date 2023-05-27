import SaveIcon from '@mui/icons-material/Save';
import { Slider } from '@mui/material';
function ModalSoftSkill({ setShowModalSoftSkill }) {
    return (
        <div
            className="bg-black/40 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-start z-10"
            onClick={() => setShowModalSoftSkill(false)}
        >
            <div className="p-4 mt-8 bg-white rounded-lg min-w-[30%]" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-bold uppercase my-4">Kỹ năng mềm</h2>
                <div className="border px-4 py-6 grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sky-600 mb-2">
                            Kỹ năng mềm <span className="text-red-600">*</span>
                        </p>
                        <select defaultValue={0} className="outline-none p-2 border w-full">
                            <option disabled value={0}>
                                Chọn...
                            </option>
                            <option value={1}>Quản lý thời gian</option>
                            <option value={2}>Làm việc nhóm</option>
                            <option value={3}>Đàm phán</option>
                            <option value={4}>Năng động</option>
                            <option value={5}>Lãnh đạo</option>
                            <option value={6}>Phân tích</option>
                            <option value={7}>Lập kế hoạch</option>
                            <option value={8}>Hòa đồng</option>
                            <option value={9}>Xây dựng quan hệ</option>
                            <option value={10}>Giao tiếp</option>
                            <option value={11}>Thuyết trình</option>
                            <option value={12}>Giải quyết vấn đề</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <p className="text-sky-600">
                            Độ thành thạo ngôn ngữ <span className="text-red-600">*</span>
                        </p>
                        <p className="text-gray-500">(Độ thành thạo từ 0% đến 100%)</p>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </div>
                </div>

                <button className="flex justify-center items-center px-4 py-2 bg-sky-600 text-white my-4 rounded-lg">
                    <SaveIcon />
                    Lưu lại
                </button>
            </div>
        </div>
    );
}

export default ModalSoftSkill;
