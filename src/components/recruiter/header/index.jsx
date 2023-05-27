import {
    Phone,
    MailOutline,
    ShoppingCartOutlined,
    AssignmentIndOutlined,
    KeyOutlined,
    LogoutOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

function Header() {
    const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: '#fff',
                color: '#333',
                fontSize: 14,
                border: '1px solid #dadde9',
                maxWidth: '70vw',
                padding: 0,
                margin: 0,
            },
        }),
    );
    return (
        <div className="bg-sky-600">
            <div className="container m-auto flex justify-between items-center min-h-[50px] text-white text-sm">
                <div className="flex items-center">
                    <Link to={'/recruiter/managerJobs/open'} className="max-w-[120px]">
                        <img src="https://jobsgo.vn/img/logo-2019.png" alt="logo" />
                    </Link>

                    <div className="flex items-center ml-4 text-sm">
                        <span>
                            CSKH: <strong>Ngô Thị Thu Giang</strong>
                        </span>
                        <div className="flex items-center mx-4">
                            <Phone className="mr-1"></Phone> 0387878747
                        </div>
                        <div className="flex items-center">
                            <MailOutline className="mr-1"></MailOutline> giang@gmail.com
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link className="flex items-center">
                        <ShoppingCartOutlined />
                        Mua dịch vụ
                    </Link>
                    <CustomTooltip
                        title={
                            <div className="flex flex-col w-full h-full">
                                <Link
                                    to={'/recruiter/info'}
                                    className="hover:bg-black/10 flex items-center p-2 border-b"
                                >
                                    <AssignmentIndOutlined className="mr-2"></AssignmentIndOutlined>Thông tin công ty
                                </Link>
                                <Link
                                    to={'/recruiter/changePassword'}
                                    className="hover:bg-black/10 flex items-center p-2 border-b"
                                >
                                    <KeyOutlined className="mr-2" />
                                    Đổi mật khẩu
                                </Link>
                                <Link to={'/recruiter'} className="hover:bg-black/10 flex items-center p-2">
                                    <LogoutOutlined className="mr-2" />
                                    Đăng xuất
                                </Link>
                            </div>
                        }
                    >
                        <div className="flex items-center ml-6 cursor-pointer">
                            <div className="w-[35px] h-[35px] mr-2 rounded-full border-2 border-white overflow-hidden">
                                <img src="https://employer.jobsgo.vn/bolt/assets/images/image.png" alt="avatar" />
                            </div>
                            <p>thanh@gmail.com</p>
                        </div>
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
}

export default Header;
