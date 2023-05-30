import { NoteAddOutlined } from '@mui/icons-material';
import { Autocomplete, Switch, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const addr = ['Hà Nội', 'Hồ Chí Minh'];
const certificate = ['Trung cấp - Nghề', 'Cao đăng', 'Đại học', 'Thạc Sỹ', 'Tiến Sỹ', 'Chứng chỉ chuyên ngành'];
const genders = ['Không yêu cầu', 'Nam', 'Nữ'];
function CreateJob({ className }) {
    return (
        <div className={className}>
            <div className="flex justify-end items-center">
                <Link className="flex items-center justify-center p-2 bg-orange-500 font-bold hover:bg-orange-700 text-white mx-4 my-2 rounded-lg">
                    <NoteAddOutlined fontSize="small" className="mr-1" />
                    Đăng tin tuyển dụng mới
                </Link>
            </div>
            <div className="p-4 border-t">
                <h2 className="text-base font-semibold mb-12">Đăng tuyển việc làm mới</h2>
                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-10 gap-4 mb-12">
                        <p className="font-semibold col-span-2 text-right">
                            Tiêu đề công việc <span className="text-red-500">*</span>
                        </p>
                        <input type="text" className="outline-none border p-2 flex-1 rounded-md col-span-8" />
                    </div>
                    <div className="grid grid-cols-10 gap-4 mb-12">
                        <p className="font-semibold col-span-2 text-right">
                            Mô tả công việc <span className="text-red-500">*</span>
                        </p>
                        <textarea className="outline-none border p-2 flex-1 rounded-md col-span-8" />
                    </div>
                    <div className="grid grid-cols-10 gap-4 mb-12">
                        <p className="font-semibold col-span-2 text-right">
                            Yêu cầu công việc <span className="text-red-500">*</span>
                        </p>
                        <textarea className="outline-none border p-2 flex-1 rounded-md col-span-8" />
                    </div>
                    <div className="grid grid-cols-10 gap-4 mb-12">
                        <p className="font-semibold col-span-2 text-right">
                            Quyền lợi được hưởng <span className="text-red-500">*</span>
                        </p>
                        <textarea className="outline-none border p-2 flex-1 rounded-md col-span-8" />
                    </div>
                </div>

                <div className="bg-black/5">
                    <div className="p-4">
                        <div>
                            <p className="font-semibold mb-2 uppercase">
                                Địa điểm làm việc <span className="text-red-500">*</span>
                            </p>

                            <div className="grid grid-cols-4 gap-2">
                                <input
                                    type="text"
                                    placeholder="Nhập số tầng, số nhà, tên đường"
                                    className="outline-none border p-2 flex-1 rounded-md"
                                />
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={addr}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn xã, phường" />}
                                />
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={addr}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn quận, huyện" />}
                                />
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={addr}
                                    size="small"
                                    renderInput={(params) => (
                                        <TextField {...params} placeholder="Chọn tỉnh, thành phố" />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mt-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <p className="font-semibold uppercase mb-2">
                                    SĐT nhà tuyển dụng <span className="text-red-500">*</span>
                                </p>
                                <input type="text" className="outline-none border p-2 flex-1 rounded-md w-full" />
                            </div>
                            <div>
                                <p className="font-semibold uppercase mb-2">
                                    Bằng cấp tối thiểu <span className="text-red-500">*</span>
                                </p>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={certificate}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
                                />
                            </div>
                            <div>
                                <p className="font-semibold uppercase mb-2">
                                    Chức vụ <span className="text-red-500">*</span>
                                </p>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={addr}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
                                />
                            </div>
                            <div>
                                <p className="font-semibold uppercase mb-2">Vị trí làm việc</p>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={addr}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
                                />
                            </div>
                            <div>
                                <p className="font-semibold uppercase mb-2">Yêu cầu giới tính</p>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={genders}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
                                />
                            </div>
                            <div>
                                <p className="font-semibold uppercase mb-2">Yêu cầu độ tuổi</p>
                                <input type="text" className="outline-none border p-2 flex-1 rounded-md w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 mt-4">
                        <div className="grid grid-cols-2 gap-16">
                            <div>
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold uppercase">
                                        Số năm kinh nghiệm <span className="text-red-500">*</span>
                                    </p>
                                    <div className="">
                                        Không yêu cầu kinh nghiệm
                                        <Switch></Switch>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <span>Từ</span>
                                    <input
                                        type="number"
                                        className="outline-none border p-2 text-center mx-1 rounded-lg"
                                    />
                                    <span className="mr-2">năm</span>
                                    <span>Đến</span>
                                    <input
                                        type="number"
                                        className="outline-none border p-2 text-center mx-1 rounded-lg"
                                    />
                                    <span>năm</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold uppercase">
                                        Mức lương (VNĐ) <span className="text-red-500">*</span>
                                    </p>
                                    <div className="">
                                        Thỏa thuận
                                        <Switch></Switch>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <span>Từ</span>
                                    <input
                                        type="number"
                                        className="outline-none border p-2 text-center mx-1 rounded-lg"
                                    />
                                    <span className="mr-2">triệu</span>
                                    <span>Đến</span>
                                    <input
                                        type="number"
                                        className="outline-none border p-2 text-center mx-1 rounded-lg"
                                    />
                                    <span>triệu</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 mt-4">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="font-semibold mb-2 uppercase">
                                    Ngành nghề <span className="text-red-500">*</span>
                                </p>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={certificate}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
                                />
                            </div>
                            <div>
                                <p className="font-semibold mb-2 uppercase">
                                    Tính chất công việc <span className="text-red-500">*</span>
                                </p>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={certificate}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
                                />
                            </div>
                            <div>
                                <p className="font-semibold mb-2 uppercase">
                                    Kỹ năng <span className="text-red-500">*</span>
                                </p>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={certificate}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
                                />
                            </div>
                            <div>
                                <p className="font-semibold mb-2 uppercase">
                                    Ngôn ngữ <span className="text-red-500">*</span>
                                </p>
                                <Autocomplete
                                    className="bg-white rounded-md w-full"
                                    disablePortal
                                    options={certificate}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-4 mb-16">
                <button className="px-4 py-1 bg-sky-600 text-white rounded-lg text-lg hover:bg-sky-500">
                    Tạo công việc
                </button>
            </div>
        </div>
    );
}

export default CreateJob;
