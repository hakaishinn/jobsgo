import SaveIcon from '@mui/icons-material/Save';
function ModalEducation({ setShowModalEducation }) {
    return (
        <div
            className="bg-black/40 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-start z-10"
            onClick={() => setShowModalEducation(false)}
        >
            <div className="p-4 bg-white rounded-lg min-w-[40%] mt-8" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-bold uppercase my-4">Kinh nghiệm làm việc</h2>
                <div className="border px-4 py-6 grid grid-cols-2 gap-4">
                    <div className="">
                        <p className="text-sky-600 mb-2">
                            Trường học <span className="text-red-600">*</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Tên trường học"
                            className="outline-none border px-2 py-1 w-full"
                        />
                    </div>
                    <div className="">
                        <p className="text-sky-600 mb-2">
                            Chuyên ngành <span className="text-red-600">*</span>
                        </p>
                        <input type="text" placeholder="Ngành học" className="w-full outline-none border px-2 py-1" />
                    </div>
                    <div className="">
                        <p className="text-sky-600 mb-2">
                            Bằng cấp <span className="text-red-600">*</span>
                        </p>
                        <select defaultValue={0} className="outline-none p-2 border w-full">
                            <option disabled value={0}>
                                Chọn...
                            </option>
                            <option value={1}>Trung cấp - Nghề</option>
                            <option value={2}>Cao đẳng</option>
                            <option value={3}>Đại học</option>
                            <option value={4}>Thạc sỹ</option>
                            <option value={5}>Tiến sỹ</option>
                            <option value={6}>Chứng chỉ chuyên ngành</option>
                        </select>
                    </div>
                    <div className="">
                        <div className="text-sky-600 mb-2 flex items-center gap-4">
                            <div>
                                Năm tốt nghiệp <span className="text-red-600">*</span>
                            </div>
                            <div>
                                <input type="checkbox" id="status" />
                                <label htmlFor="status" className="text-black ml-2">
                                    Đang học tại đây
                                </label>
                            </div>
                        </div>
                        <input type="date" className="w-full outline-none border px-2 py-1" />
                    </div>
                    <div className="col-span-2">
                        <p className="text-sky-600 mb-2">
                            Mô tả quá trình học tập <span className="text-red-600">*</span>
                        </p>
                        <textarea
                            placeholder="Thành tích nổi bật..."
                            className="w-full min-h-[100px] border p-2 outline-none"
                        ></textarea>
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

export default ModalEducation;
