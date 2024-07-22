import React from 'react';
import Slider from "react-slick";
import NutritionCarousalCard from './NutritionCarousalCard';
import { NextArrow, PrevArrow } from '../CarousalArrow';

const NutritionCarousal = () => {
    const categories = [
        {
            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            title: "Proteins & Fitness"
        },
        {
            image: "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webphttps://b.zmtcdhttps://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webpn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
            title: "Sleep & Stress"
        },
        {
            image: "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
            title: "Digestion & Weight Loss"
        },
        {
            image: "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
            title: "Omegas & CoQ10"
        },
        {
            image: "https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webphttps://b.zmtcdn.com/data/dish_images/83befdecd77e57a8c53d22b67d0b866d1612437905.png",
            title: "Beauty & Skin Care"
        },
        {
            image: "https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webphttps://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
            title: "Immunity & Bones"
        },
    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
                {categories.map((food) => (
                    <NutritionCarousalCard {...food} />
                ))}
            </div>

            <div className="hidden lg:block">
                <Slider {...settings} >
                    {categories.map((food) => (
                        <NutritionCarousalCard {...food} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default NutritionCarousal;
