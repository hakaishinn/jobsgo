import { LocationOnOutlined, AccessTime, AttachMoney } from '@mui/icons-material';
import { Link } from 'react-router-dom';
function JobItem({ job, className }) {
    const classes = className ? className : '';
    return (
        <Link to={'/jobs/1'} className={`p-2 flex items-center bg-white mx-1 my-2 border rounded-md ${classes}`}>
            <div className="w-[80px] h-[80px]">
                <img src="https://jobsgo.vn/media/img/employer/89916-200x200.jpg?v=1657185647" alt="cty" />
            </div>
            <div className="pl-1">
                <p className="text-red-600 font-semibold">Trưởng phòng kinh doanh - Hồ Chí Minh</p>
                <p className="text-sm py-1">Công ty cổ phần Thép việt xô Hà Nội</p>

                <div className="flex items-center flex-wrap">
                    <div className="border flex items-center p-1 m-1">
                        <LocationOnOutlined fontSize="small"></LocationOnOutlined>
                        <span className="text-xs">Bình Dương</span>
                    </div>
                    <div className="border flex items-center ml-1 p-1 m-1">
                        <AccessTime fontSize="small"></AccessTime>
                        <span className="text-xs">05/06/2023</span>
                    </div>
                    <div className="border flex items-center ml-1 p-1 m-1">
                        <AttachMoney fontSize="small"></AttachMoney>
                        <span className="text-xs">20 triệu VNĐ</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default JobItem;
