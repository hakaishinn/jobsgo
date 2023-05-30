import SaveIcon from '@mui/icons-material/Save';
function ModalProSkill({ setShowModalProSkill }) {
    return (
        <div
            className="bg-black/40 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-start z-10"
            onClick={() => setShowModalProSkill(false)}
        >
            <div className="p-4 mt-8 bg-white rounded-lg min-w[40%]" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-bold uppercase my-4">Kỹ năng chuyên môn</h2>
                <div className="border px-4 py-6 grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <p className="text-sky-600 mb-2">
                            Kỹ năng chuyên môn <span className="text-red-600">*</span>
                        </p>
                        <select defaultValue={0} className="outline-none p-2 border w-full">
                            <option disabled value={0}>
                                Chọn kỹ năng chuyên môn
                            </option>
                            <option value={1}>Java</option>
                            <option value={2}>.NET</option>
                            <option value={3}>Python</option>
                            <option value={4}>NodeJS</option>
                            <option value={5}>ReactJS</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <p className="text-sky-600 mb-2">
                            Số năm kinh nghiệm <span className="text-red-600">*</span>
                        </p>
                        <select defaultValue={0} className="outline-none p-2 border">
                            <option disabled value={0}>
                                Chọn số năm kinh nghiệm
                            </option>
                            <option value={1}>6 tháng</option>
                            <option value={2}>1 năm</option>
                            <option value={3}>2 năm</option>
                            <option value={4}>3 năm</option>
                            <option value={5}>4 năm</option>
                        </select>
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

export default ModalProSkill;
