import { useEffect, useState } from 'react';
import JobItem from '../slider/jobItem';
import * as jobService from '~/service/jobService';
import { useParams, useSearchParams } from 'react-router-dom';

function ListJobSearch({ type = 'jobs' }) {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const [listJob, SetListJob] = useState([]);
    useEffect(() => {
        const getData = async () => {
            switch (type) {
                case 'jobs':
                    if (
                        (searchParams.get('keyword') === '' && searchParams.get('address') === '') ||
                        (searchParams.get('keyword') === null && searchParams.get('address') === null)
                    ) {
                        const res = await jobService.viewJobOpen();
                        if (res?.success) {
                            SetListJob(res?.data);
                        }
                    } else if (searchParams.get('keyword') !== '' && searchParams.get('address') === '') {
                        const res = await jobService.search(searchParams.get('keyword'), null);
                        if (res?.success) {
                            SetListJob(res.data);
                        }
                    } else if (searchParams.get('keyword') === '' && searchParams.get('address') !== '') {
                        const res = await jobService.search(null, searchParams.get('address'));
                        if (res?.success) {
                            SetListJob(res.data);
                        }
                    } else if (searchParams.get('keyword') !== '' && searchParams.get('address') !== '') {
                        const res = await jobService.search(searchParams.get('keyword'), searchParams.get('address'));
                        if (res?.success) {
                            SetListJob(res.data);
                        }
                    }
                    break;
                case 'jobs-career':
                    const res = await jobService.viewJobByCareerId(id);
                    if (res?.success) {
                        SetListJob(res.data);
                    }
                    break;
                case 'jobs-noExp':
                    const resNoExp = await jobService.viewJobNoExp();
                    if (resNoExp?.success) {
                        SetListJob(resNoExp.data);
                    }
                    break;
                default:
                    break;
            }
        };
        getData();
    }, [searchParams, type, id]);
    return (
        <div className="container m-auto">
            <p className="uppercase p-2 font-semibold bg-slate-300 mt-8 container m-auto">Danh sách công việc</p>
            <div className="grid grid-cols-3 gap-1 mt-4">
                {listJob?.map((job) => (
                    <JobItem key={job.id} job={job} className="hover:shadow-md hover:bg-slate-50"></JobItem>
                ))}
            </div>
        </div>
    );
}

export default ListJobSearch;
