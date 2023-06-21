import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JobItem from './jobItem';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CompanyItem from './companyItem';
import { useEffect, useState } from 'react';
import * as jobService from '~/service/jobService';
import * as userService from '~/service/userService';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="cursor-pointer absolute top-[50%] right-0 z-10 translate-y-[-50%] translate-x-[50%] w-[50px] h-[50px] rounded-full shadow-ssm flex justify-center items-center"
            onClick={onClick}
        >
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="cursor-pointer absolute top-[50%] left-0 z-10 translate-y-[-50%] translate-x-[-50%] w-[50px] h-[50px] rounded-full shadow-ssm flex justify-center items-center"
            onClick={onClick}
        >
            <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
        </div>
    );
}
function CustomSlider({ type, title }) {
    const [data, setData] = useState([]);
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    if (type === 'job') {
        settings = {
            infinite: false,
            centerPadding: '60px',
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            dots: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
    }

    useEffect(() => {
        const getData = async () => {
            if (type === 'job') {
                const res = await jobService.viewJobOpen();
                if (res?.success) {
                    setData(res.data);
                }
            } else {
                const res = await userService.getAllRecruiter();
                if (res?.success) {
                    setData(res.data);
                }
            }
        };
        getData();
    }, [type]);
    return (
        <div className={`${type === 'company' ? 'bg-white' : ' bg-slate-100'} mt-16 pb-8`}>
            <div className="container m-auto ">
                <h2 className="text-xl font-bold py-3">{title}</h2>
                <div>
                    {type === 'job' ? (
                        <Slider {...settings}>
                            {data?.map((job) => (
                                <div key={job?.id}>
                                    <JobItem job={job}></JobItem>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <Slider {...settings}>
                            {data?.map((company) => (
                                <div key={company?.id} className="hover:scale-110">
                                    <CompanyItem company={company}></CompanyItem>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CustomSlider;
