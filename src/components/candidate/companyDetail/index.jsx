import { LocationOnOutlined, PublicOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import JobItem from '../slider/jobItem';

function CompanyDetail() {
    const [tab, setTab] = useState(1);

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center mb-4">
                <div className="w-[100px] h-[100px]">
                    <img src="https://jobsgo.vn/media/img/employer/32894-200x200.jpg?v=1612163479" alt="cty" />
                </div>

                <div className="flex flex-col p-4">
                    <h1 className="text-2xl font-bold">Ngân hàng Thương mại Cổ phần Đông Nam Á</h1>
                    <p className="text-xl">SEABANK</p>
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

                        <p>
                            Ngân hàng TMCP Đông Nam Á (SeABank) có trụ sở chính tại 25 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội,
                            SeABank được biết đến là một trong nhóm dẫn đầu các ngân hàng thương mại cổ phần lớn nhất
                            Việt Nam về qui mô vốn điều lệ, mạng lưới hoạt động, mức độ nhận biết thương hiệu và tốc độ
                            tăng trưởng ổn định. Thành lập từ năm 1994, SeABank trải qua chặng đường 25 năm phát triển
                            để đạt được thành tựu hôm nay với vốn điều lệ 7.688 tỷ đồng, tổng tài sản đạt 150 nghìn tỷ
                            đồng và một mạng lưới hoạt động trên khắp 3 miền đất nước với 165 chi nhánh và điểm giao
                            dịch. Sứ mệnh Phục vụ với sự tận tâm, nhiệt huyết để mang đến cuộc sống hạnh phúc hơn và một
                            tương lai thịnh vượng cho cộng đồng. Tầm nhìn Trở thành ngân hàng được yêu thích nhất tại
                            Việt Nam, cung cấp đầy đủ, đa dạng các sản phẩm và dịch vụ tài chính với trải nghiệm tốt
                            nhất cho mọi đối tượng khách hàng. SeABank cam kết minh bạch thông tin và mang tới dịch vụ
                            hoàn hảo cùng lợi ích cao nhất cho khách hàng, nhà đầu tư, đảm bảo sự phát triển bền vững
                            của Ngân hàng. Chiến lược phát triển Xây dựng và phát triển SeABank được yêu thích nhất là
                            chiến lược phát triển cốt lõi của SeABank thời gian tới. Trong chiến lược phát triển ngân
                            hàng bán lẻ, SeABank sẽ tập trung đặc biệt vào khách hàng cá nhân và đồng thời phát triển
                            mảng khách hàng doanh nghiệp vừa và nhỏ cũng như doanh nghiệp lớn. Các sản phẩm dịch vụ của
                            SeABank được thiết kế đa dạng phù hợp với nhu cầu và năng lực tài chính của từng đối tượng
                            và phân khúc khách hàng. Phương châm hoạt động Phát triển toàn diện, an toàn, hiệu quả và
                            bền vững đóng góp vào sự phồn thịnh của nền kinh tế và xã hội đất nước.
                        </p>
                    </div>

                    <div className="rounded-lg p-4 shadow-ssm h-max my-4">
                        <h2 className="text-xl font-bold">Thông tin</h2>
                        <div>
                            <div className="flex items-center gap py-4 text-[#666]">
                                <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full text-sky-600 bg-sky-100 mr-2">
                                    <LocationOnOutlined fontSize="small" />
                                </div>
                                <span className="">25 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội</span>
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
