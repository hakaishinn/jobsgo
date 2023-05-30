import { People, Search } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';
import ListCandidate from '../listCandidate';
import BtnCreateJob from '../btnCreateJob';

function FormManagerCandidate({ className, title, tab }) {
    const jobs = ['Tuyển fresher'];
    return (
        <div className={className}>
            <BtnCreateJob />
            <div className="p-4 border-t">
                <h2 className="text-base uppercase font-semibold mb-4">Bộ lọc ứng viên</h2>

                <div className="mb-4">
                    <p className="font-semibold mb-1">Việc làm đang tuyển</p>
                    <Autocomplete
                        className="bg-white rounded-md w-full"
                        disablePortal
                        options={jobs}
                        size="small"
                        renderInput={(params) => <TextField {...params} placeholder="Chọn việc làm" />}
                    />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <p className="font-semibold mb-1">Ngành nghề chuyên môn</p>
                        <Autocomplete
                            className="bg-white rounded-md w-full"
                            disablePortal
                            options={jobs}
                            size="small"
                            renderInput={(params) => <TextField {...params} placeholder="Chọn ngành nghề" />}
                        />
                    </div>
                    <div>
                        <p className="font-semibold mb-1">Kỹ năng mềm</p>
                        <Autocomplete
                            className="bg-white rounded-md w-full"
                            disablePortal
                            options={jobs}
                            size="small"
                            renderInput={(params) => <TextField {...params} placeholder="Chọn kỹ năng mềm" />}
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
                        <Search className="mr-1" /> Lọc ứng viên
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

export default FormManagerCandidate;
