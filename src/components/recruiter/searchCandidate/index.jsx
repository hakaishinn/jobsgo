import { People, Search } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';
import ListCandidate from '../listCandidate';
import BtnCreateJob from '../btnCreateJob';

function SearchCandidate({ className, title, tab }) {
    const jobs = ['Tuyển fresher'];
    return (
        <div className={className}>
            <BtnCreateJob />
            <div className="p-4 border-t">
                <h2 className="text-base uppercase font-semibold mb-4">Bộ lọc ứng viên</h2>

                <input
                    type="text"
                    placeholder="Nhập từ khóa tìm kiếm..."
                    className="w-full mb-2 p-2 outline-none border rounded-lg"
                />
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <p className="font-semibold mb-1">Vị trí tuyển dụng</p>
                        <Autocomplete
                            className="bg-white rounded-md w-full"
                            disablePortal
                            options={jobs}
                            size="small"
                            renderInput={(params) => <TextField {...params} placeholder="Chọn vị trí tuyển dụng" />}
                        />
                    </div>
                    <div>
                        <p className="font-semibold mb-1">Địa điểm</p>
                        <Autocomplete
                            className="bg-white rounded-md w-full"
                            disablePortal
                            options={jobs}
                            size="small"
                            renderInput={(params) => <TextField {...params} placeholder="Chọn địa điểm" />}
                        />
                    </div>
                    <div>
                        <p className="font-semibold mb-1">Ngôn ngữ</p>
                        <Autocomplete
                            className="bg-white rounded-md w-full"
                            disablePortal
                            options={jobs}
                            size="small"
                            renderInput={(params) => <TextField {...params} placeholder="Chọn ngôn ngữ" />}
                        />
                    </div>
                    <div>
                        <p className="font-semibold mb-1">Bằng cấp</p>
                        <Autocomplete
                            className="bg-white rounded-md w-full"
                            disablePortal
                            options={jobs}
                            size="small"
                            renderInput={(params) => <TextField {...params} placeholder="Chọn bằng cấp" />}
                        />
                    </div>
                </div>

                <div>
                    <button className=" my-4 flex justify-center items-center px-2 py-1 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-800">
                        <Search className="mr-1" /> Tìm ứng viên
                    </button>
                </div>

                <div className="flex items-center border-y py-2 pl-4 font-semibold bg-black/5">
                    <People className="mr-1" /> {title}
                </div>

                <div>
                    <ListCandidate tab={tab}></ListCandidate>
                </div>
            </div>
        </div>
    );
}

export default SearchCandidate;
