import { LocationOnOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function CompanyItem() {
    return (
        <Link to="/company/1" className="bg-white">
            <div className="py-2 p-1 flex flex-col justify-center items-center rounded-xl">
                <div className="w-[80px] h-[80px]">
                    <img src="https://jobsgo.vn/media/img/employer/89916-200x200.jpg?v=1657185647" alt="avatar"></img>
                </div>
                <p className="p-1 font-semibold text-center">Công ty bảo hiểm nhân thọ Việt Nam</p>
                <div className="flex justify-end items-center">
                    <LocationOnOutlined fontSize="small"></LocationOnOutlined>
                    <p>Hồ Chí Minh</p>
                </div>
            </div>
        </Link>
    );
}

export default CompanyItem;
