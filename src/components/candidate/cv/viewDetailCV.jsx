import { Slider } from '@mui/material';
import MenuCV from './menuCV';

function ViewDetailCV() {
    const value = 70;
    return (
        <div className="mt-[100px]">
            <div className="container mx-auto">
                <MenuCV tab={'viewDetailCV'} />
            </div>
            <div className="text-lg mt-8">
                <div className="w-[80%] mx-auto shadow-ssm max-w-[1200px] min-w-[900px]">
                    <div
                        className="bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("https://jobsgo.vn/cv_template/theme_19/images/header.png")' }}
                    >
                        <div className="flex justify-start items-center">
                            <div className="p-16">
                                <div className="border-4 border-[#000] overflow-hidden rounded-lg w-[200px] h-[200px]">
                                    <img src="https://employer.jobsgo.vn/media/img/male.jpg" alt="avatar" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-5xl mb-2">Dương Đình Thanh</h2>
                                <h2 className="text-3xl">Frontend ReactJS</h2>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-10 gap-12 mt-8">
                        <div className="col-span-4 flex justify-end">
                            <div>
                                <div className="mb-12">
                                    <h2 className="text-3xl uppercase font-bold mb-4">Thông tin liên hệ</h2>
                                    <div className="mb-4">
                                        <p className="font-semibold mb-2 text-xl">Số điện thoại</p>
                                        <p>0385078386</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="font-semibold mb-2 text-xl">Email</p>
                                        <p>thanh@gmail.com</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="font-semibold mb-2 text-xl">Ngày sinh</p>
                                        <p>29/03/2001</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="font-semibold mb-2 text-xl">Địa chỉ</p>
                                        <p>Huế</p>
                                    </div>
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-3xl uppercase font-bold mb-2">Kỹ năng</h2>
                                    <ul className="ml-4 mb-4">
                                        <li className="text-lg font-bold list-disc">Java</li>
                                        <li className="text-lg font-bold list-disc">ReactJS</li>
                                    </ul>
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-3xl uppercase font-bold mb-4">Sở thích</h2>
                                    <ul className="ml-4 mb-8">
                                        <li className="text-lg font-bold list-disc">Chơi game</li>
                                        <li className="text-lg font-bold list-disc">Nghe nhạc</li>
                                    </ul>
                                </div>
                                <div className="mb-12">
                                    <h2 className="text-3xl uppercase font-bold mb-4">Kỹ năng mềm</h2>
                                    <div>
                                        <p className="text-lg font-bold">Làm việc nhóm</p>
                                        <div className="flex justify-center items-center">
                                            <Slider
                                                size="medium"
                                                disabled
                                                defaultValue={value}
                                                aria-label="Disabled slider"
                                            />
                                            <span className="ml-2">({value}%)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6 pr-8">
                            <div className="mb-12">
                                <h2 className="text-3xl uppercase font-bold mb-4">Mục tiêu nghề nghiệp</h2>
                                <div className="mb-4">
                                    <p className="text-justify">
                                        Mục tiêu nghề nghiệp IT của tôi là trở thành một chuyên gia công nghệ thông tin
                                        có sự hiểu biết sâu rộng về các công nghệ mới nhất. Tôi muốn áp dụng kiến thức
                                        và kỹ năng của mình để thúc đẩy sự phát triển công nghệ và đóng góp vào việc xây
                                        dựng các giải pháp thông tin sáng tạo và tiên tiến. Tôi mong muốn làm việc trong
                                        một môi trường động lực và có cơ hội học hỏi liên tục để nâng cao trình độ
                                        chuyên môn của mình. Qua sự đóng góp của tôi, tôi hy vọng có thể thúc đẩy sự
                                        phát triển kỹ thuật và tạo ra những giải pháp công nghệ tiên tiến và hiệu quả
                                        cho doanh nghiệp.
                                    </p>
                                </div>
                            </div>
                            <div className="mb-12">
                                <h2 className="text-3xl uppercase font-bold mb-4">Học vấn</h2>
                                <div className="mb-4">
                                    <p className="font-bold">2019-2023</p>
                                    <p>Đại học bách khoa Đà Nẵng</p>
                                    <p>Công nghệ thông tin</p>
                                    <p>Điểm trung bình: 3.11</p>
                                </div>
                            </div>
                            <div className="mb-12">
                                <h2 className="text-3xl uppercase font-bold mb-4">Kinh nghiệm làm việc</h2>
                                <div className="mb-4">
                                    <p className="font-bold">FPT từ 2/2023 đến 4/2023</p>
                                    <p>Vị trí: Thực tập sinh</p>
                                    <p>Thực tập sinh tại FPT về Java Web</p>
                                </div>
                            </div>
                            <div className="mb-12">
                                <h2 className="text-3xl uppercase font-bold mb-4">Hoạt động</h2>
                                <div className="mb-4">
                                    <p className="font-bold">Ngày hội tuyển dụng IT (9/4/2023 - 9/4/2023)</p>
                                    <p>Diễn giả/ cố vấn kĩ thuật</p>
                                    <p>Trả lời câu hỏi về vị trí cũng như tổ chức người tham dự quan tâm</p>
                                </div>
                            </div>
                            <div className="mb-12">
                                <h2 className="text-3xl uppercase font-bold mb-4">Giải thưởng</h2>
                                <div className="mb-4">
                                    <p className="font-bold">Nhân viên xuất sắc FPT năm 2023</p>
                                </div>
                            </div>
                            <div className="mb-12">
                                <h2 className="text-3xl uppercase font-bold mb-4">Chứng chỉ</h2>
                                <div className="mb-4">
                                    <p className="font-bold">Chứng chỉ IELTS 7.0 (2023)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewDetailCV;
