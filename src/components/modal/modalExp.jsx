import SaveIcon from '@mui/icons-material/Save';
function ModalExp({ setShowModalExp }) {
    return (
        <div
            className="bg-black/40 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-start z-10"
            onClick={() => setShowModalExp(false)}
        >
            <div className="p-4 bg-white rounded-lg min-w-[40%] mt-8" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-bold uppercase my-4">Kinh nghiệm làm việc</h2>
                <div className="border px-4 py-6 grid grid-cols-2 gap-4">
                    <div className="">
                        <p className="text-sky-600 mb-2">
                            Tên công ty <span className="text-red-600">*</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Công ty đã làm việc"
                            className="outline-none border px-2 py-1 w-full"
                        />
                    </div>
                    <div className="">
                        <p className="text-sky-600 mb-2">
                            Chức danh <span className="text-red-600">*</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Vị trí công việc"
                            className="w-full outline-none border px-2 py-1"
                        />
                    </div>
                    <div className="">
                        <p className="text-sky-600 mb-2">
                            Ngày bắt đầu <span className="text-red-600">*</span>
                        </p>
                        <input
                            type="date"
                            placeholder="Vị trí công việc"
                            className="w-full outline-none border px-2 py-1"
                        />
                    </div>
                    <div className="">
                        <div className="text-sky-600 mb-2 flex items-center gap-4">
                            <div>
                                Ngày kết thúc <span className="text-red-600">*</span>
                            </div>
                            <div>
                                <input type="checkbox" id="status" />
                                <label htmlFor="status" className="text-black ml-2">
                                    Đang làm việc
                                </label>
                            </div>
                        </div>
                        <input type="date" className="w-full outline-none border px-2 py-1" />
                    </div>
                    <div className="col-span-2">
                        <p className="text-sky-600 mb-2">
                            Mô tả công việc <span className="text-red-600">*</span>
                        </p>
                        <textarea
                            placeholder="Thông tin bổ sung..."
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

export default ModalExp;
