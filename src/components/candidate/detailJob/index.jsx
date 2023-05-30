import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SendIcon from '@mui/icons-material/Send';
import { LocationOnOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import JobItem from '../slider/jobItem';
import Search from '../search';
function DetailJob() {
    return (
        <div className="grid grid-cols-3 mt-[90px] container mx-auto">
            <div className="col-span-2 border p-2">
                <Search className="container mx-auto border-sky-700 rounded-full border-2"></Search>
                <h1 className="text-2xl font-bold mt-4">
                    [HCM] Nhân Viên Tư Vấn - CSKH (Data Có Sẵn, Thu Nhập 15 - 25 Triệu)
                </h1>
                <div className="flex justify-start items-center gap-4 py-4">
                    <div className="flex items-center">
                        <AccessTimeIcon fontSize="small" />
                        <span className="text-sm pl-1">
                            Hết hạn sau <strong className="text-orange-600">28</strong> ngày
                        </span>
                    </div>
                    <div className="flex items-center">
                        <AttachMoneyIcon fontSize="small" />
                        <span className="text-sm pl-1">
                            Mức lương <strong className="text-green-600">6 triệu</strong>
                        </span>
                    </div>
                </div>
                <Button size="small" startIcon={<SendIcon />} variant="contained">
                    Ứng tuyển ngay
                </Button>

                <div className="grid grid-cols-3 my-2">
                    <div>
                        <h2 className="font-bold underline">Tính chất công việc</h2>
                        <p className="text-sm">Part-time</p>
                    </div>
                    <div>
                        <h2 className="font-bold underline">Vị trí/chức vụ</h2>
                        <p className="text-sm">Nhân viên/Chuyên viên</p>
                    </div>
                    <div>
                        <h2 className="font-bold underline">Ngày đăng tuyển</h2>
                        <p className="text-sm">19/05/2023</p>
                    </div>
                    <div>
                        <h2 className="font-bold underline">Yêu cầu về bằng cấp</h2>
                        <p className="text-sm">Đại học</p>
                    </div>
                    <div>
                        <h2 className="font-bold underline">Yêu cầu kinh nghiệm</h2>
                        <p className="text-sm">1 năm kinh nghiệm</p>
                    </div>
                    <div>
                        <h2 className="font-bold underline">Yêu cầu ngôn ngữ</h2>
                        <p className="text-sm">Tiếng Anh, Tiếng Nhật</p>
                    </div>
                </div>
                <div className="mb-3">
                    <h2 className="font-bold underline">Địa điểm làm việc</h2>
                    <div className="flex">
                        <LocationOnOutlined fontSize="small"></LocationOnOutlined>
                        <p className="text-sm">
                            Hồ Chí Minh: 17-19 Tôn Thất Tùng, Phường Phạm Ngũ Lão, Quận 1, Tp. HCM
                        </p>
                    </div>
                </div>
                <div className="mb-3">
                    <h2 className="font-bold underline">Mô tả công việc</h2>
                    <p className="text-sm">Có sẵn sẵn database nóng, làm việc tại văn phòng, không cần đi thị trường</p>
                    <p className="text-sm">
                        Tiếp nhận database tư vấn và thuyết phục khách hàng sử dụng các sản phẩm chăm sóc sức khỏe, mỹ
                        phẩm, các chương trình ưu đãi trong năm.
                    </p>
                    <p className="text-sm">
                        Tiếp nhận database tư vấn và thuyết phục khách hàng sử dụng các sản phẩm chăm sóc sức khỏe, mỹ
                        phẩm, các chương trình ưu đãi trong năm.
                    </p>
                    <p className="text-sm">
                        Tiếp nhận database tư vấn và thuyết phục khách hàng sử dụng các sản phẩm chăm sóc sức khỏe, mỹ
                        phẩm, các chương trình ưu đãi trong năm.
                    </p>
                </div>
                <div className="mb-3">
                    <h2 className="font-bold underline">Yêu cầu công việc</h2>
                    <p className="text-sm">
                        - Có kinh nghiệm tối thiểu 06 tháng tại vị trí telesales, tư vấn viên tổng đài...
                    </p>
                    <p className="text-sm">
                        - Có kinh nghiệm tối thiểu 06 tháng tại vị trí telesales, tư vấn viên tổng đài...
                    </p>
                    <p className="text-sm">
                        - Có kinh nghiệm tối thiểu 06 tháng tại vị trí telesales, tư vấn viên tổng đài...
                    </p>
                </div>
                <div className="mb-3">
                    <h2 className="font-bold underline">Quyền lợi được hưởng</h2>

                    <p className="text-sm">
                        - Lương cứng: 6.400.000 – 7.400.000 đồng/tháng (Gồm lương cơ bản + thưởng chuyên cần)
                    </p>
                    <p className="text-sm">
                        - Thu nhập: 15.000.000 – 25.000.000 đồng/tháng (Lương cơ bản + Thưởng Chuyên cần + Thưởng KPI).
                        Thu nhập không giới hạn với các ứng viên có năng lực tốt
                    </p>

                    <p className="text-red-600 font-bold my-4">
                        Chú ý: Nếu bạn thấy rằng tin tuyển dụng này không đúng hoặc có dấu hiệu lừa đảo, hãy gửi phản
                        ánh đến chúng tôi
                    </p>
                </div>
            </div>

            <div className="flex flex-col border p-2">
                <div className="w-full flex justify-center items-center">
                    <img src="https://jobsgo.vn/media/img/employer/109600-200x200.jpg?v=1682044515" alt="cong ty" />
                </div>

                <h2 className="font-bold">
                    Chào mừng đến với: <span>Công ty TNHH HEALTHPOST</span>
                </h2>
                <h2 className="font-bold underline">Địa chỉ: </h2>
                <p className="text-sm">
                    P901, tầng 9, Tòa nhà Sky City Tower A, số 88 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà
                    Nội, Việt Nam
                </p>

                <h2 className="font-bold underline">Mô tả</h2>
                <p className="text-sm">
                    CÔNG TY TNHH MTL HEALTHPOST là một công ty hoạt động trong lĩnh vực Call Center - Trung tâm Tổng
                    đài, chú trọng nhiều về Telesales. Với sứ mệnh đem đến những dòng sản phẩm có nguồn...
                </p>

                <h3 className="font-bold uppercase bg-slate-200 py-2 pl-2 my-2">Việc làm khác của công ty:</h3>

                <div>
                    <JobItem></JobItem>
                    <JobItem></JobItem>
                    <JobItem></JobItem>
                    <JobItem></JobItem>
                </div>
            </div>
        </div>
    );
}

export default DetailJob;
