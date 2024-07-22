import React from 'react';
import Slider from "react-slick";

// Components
import DeliveryCatagory from './DeliveryCatagory';
import { NextArrow, PrevArrow } from '../CarousalArrow';

const DeliveryCarousal = () => {

    const categories = [
        {
            image:"https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "biryani"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
            title: "Paratha"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
            title: "Paneer"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/2/1be4127a9dfd23d89aec9ec57a8e71f7.png",
            title: "Fries"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/83befdecd77e57a8c53d22b67d0b866d1612437905.png",
            title: "Dosa"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
            title: "Burger"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/dfa447d5de421602c1af7d58349cae1f1612436391.png",
            title: "Thali"
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
            <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
                {categories.map((food) => (
                    <DeliveryCatagory {...food} />
                ))}
            </div>

            <div className="hidden lg:block">
                <Slider {...settings} >
                    {categories.map((food) => (
                        <DeliveryCatagory {...food} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default DeliveryCarousal;
