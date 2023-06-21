import { LocationOnOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function CompanyItem({ company }) {
    return (
        <Link to={`/company/${company?.id}`} className="bg-white">
            <div className="py-2 p-1 flex flex-col justify-center items-center rounded-xl">
                <div className="w-[80px] h-[80px]">
                    <img src={company?.image} alt="avatar"></img>
                </div>
                <p className="p-1 font-semibold text-center">{company?.name}</p>
                <div className="flex justify-end items-center">
                    <LocationOnOutlined fontSize="small"></LocationOnOutlined>
                    <p className="text-sm">{company?.city}</p>
                </div>
            </div>
        </Link>
    );
}

export default CompanyItem;
