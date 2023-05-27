import {
    LocationOnOutlined,
    CalculateOutlined,
    ComputerOutlined,
    Settings,
    LocalMallOutlined,
} from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
function ItemHomeSearch() {
    return (
        <div className="flex justify-center pt-3 gap-2">
            <Link className="flex justify-center items-center bg-white rounded-lg border hover:bg-slate-200 px-2 py-1">
                <LocationOnOutlined color="error" fontSize="small" className="text-[#ccc]"></LocationOnOutlined>
                <span className="text-[#666] text-[15px] w-max">Việc làm tại Đà Nẵng</span>
            </Link>
            <Link className="flex justify-center items-center bg-white rounded-lg border hover:bg-slate-200 px-2 py-1">
                <LocalMallOutlined sx={{ color: pink[500] }} fontSize="small"></LocalMallOutlined>
                <span className="text-[#666] text-[15px] w-max">Kinh doanh</span>
            </Link>
            <Link className="flex justify-center items-center bg-white rounded-lg border hover:bg-slate-200 px-2 py-1">
                <CalculateOutlined sx={{ color: 'yellow' }} fontSize="small"></CalculateOutlined>
                <span className="text-[#666] text-[15px] w-max">Kế toán</span>
            </Link>
            <Link className="flex justify-center items-center bg-white rounded-lg border hover:bg-slate-200 px-2 py-1">
                <ComputerOutlined color="primary" fontSize="small"></ComputerOutlined>
                <span className="text-[#666] text-[15px] w-max">Công nghệ thông tin</span>
            </Link>
            <Link className="flex justify-center items-center bg-white rounded-lg border hover:bg-slate-200 px-2 py-1">
                <Settings color="action" fontSize="small"></Settings>
                <span className="text-[#666] text-[15px] w-max">Kỹ thuật</span>
            </Link>
        </div>
    );
}

export default ItemHomeSearch;
