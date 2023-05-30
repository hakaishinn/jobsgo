import { Autocomplete, Button, TextField } from '@mui/material';
import CompanyItem from '../slider/companyItem';

const jobs = ['CNTT', 'Bất động sản', 'Kinh doanh', 'Du lịch'];
const addr = ['Hà Nội', 'Đà Nẵng', 'Quảng Nam'];
function ListCompany() {
    return (
        <div>
            <div
                className="mt-[80px]"
                style={{ backgroundImage: 'url("https://jobsgo.vn/static/assets/img/1600x300-2.jpg")' }}
            >
                <div className="container m-auto py-8">
                    <h1 className="text-3xl text-white font-bold">CÓ 1000 CÔNG TY TRÊN HỆ THỐNG</h1>
                    <p className="text-white text-xl py-2">
                        Các công ty doanh nghiệp đang tuyển dụng, hàng ngàn công việc mỗi ngày
                    </p>
                    <div className="flex">
                        <Autocomplete
                            className="bg-white rounded-md"
                            disablePortal
                            options={jobs}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} placeholder="Ngành nghề" />}
                        />
                        <Autocomplete
                            className="mx-3 bg-white rounded-md"
                            disablePortal
                            options={addr}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} placeholder="Địa điểm" />}
                        />
                        <Button variant="contained" color="warning">
                            Lọc công ty
                        </Button>
                    </div>
                </div>
            </div>
            <p className="uppercase p-2 font-semibold bg-slate-300 mt-8 container m-auto">Danh sách công ty</p>

            <div className="mt-8">
                <div className="grid grid-cols-5 gap-4 container m-auto">
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                    <div className="border hover:shadow-ssm">
                        <CompanyItem></CompanyItem>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListCompany;
