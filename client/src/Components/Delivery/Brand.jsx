import React from 'react';
import Slider from "react-slick";

// Components
import { NextArrow, PrevArrow } from '../CarousalArrow';

const Brand = (props) => {
    const logos =[
        "https://b.zmtcdn.com/data/brand_creatives/logos/03599494c6aa23782f85b9dc127548d8_1605092896.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187636.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/601f1135641a0a579d585ce86bcd0f01_1506081422.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7840ff3e8a153e27656df7ebf5fe3753_1502441600.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/f2f3b599320c733a708bf53d3e18bcfa_1594361587.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/dbc9de9740e82d635cab037f3a774de7_1617948108.png?output-format=webp"
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="my-5 mb-32">
            <Slider {...settings}>
                {logos.map((logo) => (
                    <div className="w-24 h-24 mx-3 bg-white shadow">
                       <img src={logo} alt="brand" className="w-full h-full object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Brand;
