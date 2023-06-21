import { Autocomplete, Button, TextField } from '@mui/material';
import CompanyItem from '../slider/companyItem';
import { useEffect, useState } from 'react';

import * as careerService from '~/service/careerService';
import * as userService from '~/service/userService';
import addressArray from '~/data/address.json';

function ListCompany() {
    const [listCareer, setListCareer] = useState([]);
    const [listCompany, setListCompany] = useState([]);
    const cityArray = addressArray.map((city) => city.name);
    useEffect(() => {
        const getData = async () => {
            const resCareer = await careerService.getAllCareer();
            if (resCareer?.success) {
                setListCareer(resCareer?.data);
            }

            const resListCompany = await userService.getAllRecruiter();
            if (resListCompany?.success) {
                setListCompany(resListCompany?.data);
            }
        };
        getData();
    }, []);
    return (
        <div className='mb-8'>
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
                            options={listCareer?.map((career) => career.name)}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} placeholder="Ngành nghề" />}
                        />
                        <Autocomplete
                            className="mx-3 bg-white rounded-md"
                            disablePortal
                            options={cityArray}
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
                    {listCompany?.map((company) => (
                        <div className="border hover:shadow-ssm">
                            <CompanyItem company={company}></CompanyItem>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListCompany;
