import { LocationOnOutlined, AccessTime, AttachMoney } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import * as format from '~/utils/handleDate';
function JobItem({ job, className }) {
    const classes = className ? className : '';
    return (
        <Link
            to={`/jobs/${job?.id}`}
            className={`p-2 flex items-center bg-white mx-1 my-2 border rounded-md ${classes}`}
        >
            <div className="w-[80px] h-[80px]">
                <img src={job?.recruiter?.image} alt="avatar" />
            </div>
            <div className="pl-1">
                <p className="text-red-600 font-semibold">{job?.title}</p>
                <p className="text-sm py-1">{job?.recruiter?.name}</p>

                <div className="flex items-center flex-wrap gap-1 pb-2">
                    <div className="border flex items-center p-1">
                        <LocationOnOutlined fontSize="small"></LocationOnOutlined>
                        <span className="text-xs">{job?.city}</span>
                    </div>
                    <div className="border flex items-center p-1">
                        <AccessTime fontSize="small"></AccessTime>
                        <span className="text-xs">{format.formatDate(job?.expiredAt)}</span>
                    </div>
                    <div className="border flex items-center p-1">
                        <AttachMoney fontSize="small"></AttachMoney>
                        <span className="text-xs">
                            {job?.statusSalary ? (
                                <p>Thỏa thuận</p>
                            ) : (
                                <p>
                                    {job?.salaryFrom} - {job?.salaryTo} triệu
                                </p>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default JobItem;
