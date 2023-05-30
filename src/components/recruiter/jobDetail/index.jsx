import { useState } from 'react';
import ListCandidate from '../listCandidate';
import BtnCreateJob from '../btnCreateJob';

function JobDetail({ className }) {
    const [tab, setTab] = useState(1);
    const classActive = 'border-b border-red-700 text-[#000]';
    return (
        <div className={className}>
            <BtnCreateJob />

            <div className="border-y">
                <button
                    className={`p-2 text-gray-500 font-semibold hover:text-black ${tab === 1 ? classActive : ''}`}
                    onClick={() => setTab(1)}
                >
                    Tổng quan
                </button>
                <button
                    className={`p-2 text-gray-500 font-semibold hover:text-black ${tab === 2 ? classActive : ''}`}
                    onClick={() => setTab(2)}
                >
                    Hồ sơ đã nộp đơn <span className="text-red-500">(1)</span>
                </button>
            </div>

            {tab === 1 ? (
                <div className="grid grid-cols-11 gap-8 p-4">
                    <div className="col-span-8">
                        <div className="grid grid-cols-2">
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">Tiêu đề việc làm</h2>
                                <p>Tuyển fresher</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">Địa điểm việc làm</h2>
                                <p>250 Nguyễn Sinh Sắc, Phường 2, Sa Đéc, Đồng Tháp - Đồng Tháp</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">Mô tả công việc</h2>
                                <p>- Làm fulltime từ t2 đến t6</p>
                                <p>- Làm việc chuyên cần</p>
                                <p>- Tính cách hòa đồng</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">
                                    Ngành nghề chuyên môn
                                </h2>
                                <p>- HTML</p>
                                <p>- CSS</p>
                                <p>- JavaScript</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">Yêu cầu công việc</h2>
                                <p>- Chủ động trong công việc</p>
                                <p>- Tích cực, có trách nhiệm</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">
                                    Yêu cầu bằng cấp(tối thiểu)
                                </h2>
                                <p>- Đại học</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">
                                    Quyền lợi được hưởng
                                </h2>
                                <p>- Bảo hiểm xã hội đầy đủ</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">
                                    Tính chất công việc
                                </h2>
                                <p>- Full-time</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">
                                    Yêu cầu kinh nghiệm
                                </h2>
                                <p>- Không yêu cầu</p>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold uppercase underline my-2">Lương</h2>
                                <p>- 6 triệu</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="border p-4 shadow-ssm mb-4">
                            <h2 className="text-base uppercase font-semibold mb-2 rounded-lg">Lịch sử thao tác</h2>
                            <p className="text-gray-600">Công việc Tuyển Fresher đã được tạo thành công</p>
                            <p className="text-gray-400">22:06 - 24/05/2023</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="p-2">
                    <ListCandidate type={'detailJob'} />
                </div>
            )}
        </div>
    );
}

export default JobDetail;
