import CustomSlider from '~/components/candidate/slider';
import Search from '~/components/candidate/search';
import { Button } from '@mui/material';
import ItemHomeSearch from '~/components/candidate/search/itemHomeSearch';
import { FileUploadOutlined, Add } from '@mui/icons-material';
import CandidateLayout from '~/layout/candidateLayout';
function Home() {
    return (
        <CandidateLayout>
            <div className="bg-[#f6fafb] h-[210px] relative mb-8">
                <Search className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] w-[60%]"></Search>
                <h1 className="font-bold text-4xl text-center block absolute top-[50%] left-[50%] translate-x-[-50%] w-max">
                    JobsGO- Tìm việc làm mơ ước
                </h1>
            </div>
            <ItemHomeSearch></ItemHomeSearch>

            {/* Upload & Create CV */}
            <div className="flex justify-center">
                <div className="flex justify-center items-center gap-4 p-4 w-[60%]">
                    <div className="flex justify-center items-center gap-2 p-4 border border-[blue] w-[50%] rounded-lg">
                        <div>
                            <strong>Tải lên CV</strong>
                            <p className="text-xs text-[#666] py-3">
                                Bạn đã có sẵn CV chưa, Tải CV lên để ứng tuyển với hàng ngàn công việc hot
                            </p>
                            <Button variant="contained" startIcon={<FileUploadOutlined />}>
                                Tải lên CV
                            </Button>
                        </div>
                        <div className="w-[50%]">
                            <img src="https://jobsgo.vn/teks/img/jobsgo-ai-robot.svg?v=1.2" alt="Tai len CV" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 p-4 border border-[blue] w-[50%] rounded-lg">
                        <div>
                            <strong>Tạo CV ấn tượng</strong>
                            <p className="text-xs text-[#666] py-3">
                                Tạo CV xin việc Online chuẩn, đẹp miễn phí với JobsGO
                            </p>
                            <Button variant="contained" startIcon={<Add />}>
                                Tạo CV ngay
                            </Button>
                        </div>
                        <div className="w-[50%]">
                            <img src="https://jobsgo.vn/teks/img/jobsgo-cv.svg?v=1.2" alt="Tao CV" />
                        </div>
                    </div>
                </div>
            </div>
            <CustomSlider type={'two-row'} title={'Việc tuyển gấp'}></CustomSlider>
            <CustomSlider type={'recruiter'} title={'Công ty nổi bật'}></CustomSlider>
            <CustomSlider type={'two-row'} title={'Việc mới nhất'}></CustomSlider>
            <CustomSlider type={'two-row'} title={'Việc dành cho bạn'}></CustomSlider>
        </CandidateLayout>
    );
}

export default Home;
