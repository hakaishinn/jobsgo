import { LocationOnOutlined, PublicOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import JobItem from '../slider/jobItem';

import * as userService from '~/service/userService';

function CompanyDetail() {
    const { id } = useParams();
    const [tab, setTab] = useState(1);
    const [company, setCompany] = useState();

    useEffect(() => {
        const getCompany = async () => {
            const res = await userService.getUserById(id);
            if (res?.success) {
                setCompany(res.data);
            }
        };
        getCompany();
    }, [id]);

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center mb-4">
                <div className="w-[100px] h-[100px]">
                    <img src={company?.image} alt="avatar" />
                </div>

                <div className="flex flex-col p-4">
                    <h1 className="text-2xl font-bold">{company?.name}</h1>
                    <p className="text-xl">{company?.shortName}</p>
                </div>
            </div>
            <div className="border-b">
                <button
                    onClick={() => setTab(1)}
                    className={`mr-[1px] py-2 px-4 ${
                        tab === 1 ? 'text-sky-600 border-b-2 border-sky-800' : ''
                    } hover:text-sky-600 hover:border-b-2 hover:border-sky-800`}
                >
                    Tổng quan
                </button>
                <button
                    onClick={() => setTab(2)}
                    className={`mr-[1px] py-2 px-4 ${
                        tab === 2 ? 'text-sky-600 border-b-2 border-sky-800' : ''
                    } hover:text-sky-600 hover:border-b-2 hover:border-sky-800`}
                >
                    Việc làm <span className="text-sky-700">(3)</span>
                </button>
            </div>

            {tab === 1 ? (
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="col-span-2">
                        <h2 className="text-xl font-bold my-2">Giới thiệu công ty</h2>

                        <p>{company?.description}</p>
                    </div>

                    <div className="rounded-lg p-4 shadow-ssm h-max my-4">
                        <h2 className="text-xl font-bold">Thông tin</h2>
                        <div>
                            <div className="flex items-center gap py-4 text-[#666]">
                                <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full text-sky-600 bg-sky-100 mr-2">
                                    <LocationOnOutlined fontSize="small" />
                                </div>
                                <span>{`${company?.specificAddress}, ${company?.wards}, ${company?.districts}, ${company?.city}`}</span>
                            </div>
                            <div className="flex items-center gap py-4 text-[#666]">
                                <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full text-sky-600 bg-sky-100 mr-2">
                                    <PublicOutlined fontSize="small" />
                                </div>
                                <Link className="text-sky-600 underline">seabank.com.vn</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-1">
                    <JobItem></JobItem>
                    <JobItem></JobItem>
                    <JobItem></JobItem>
                </div>
            )}
        </div>
    );
}

export default CompanyDetail;
