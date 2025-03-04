import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";

// components
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import Mapview from '../../Components/restaurant/Mapview';

import { getImage } from "../../Redux/Reducer/Image/Image.action";
import { getReviews } from '../../Redux/Reducer/Reviews/review.action';

const Overview = () => {
    const [menuImage, setMenuImages] = useState({ images: [] });
    const [Reviews, setReviews] = useState([]);
    const { id } = useParams();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
    };

    const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);

    const dispatch = useDispatch();
    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => images.push(location));
                setMenuImages(images);
            });
            dispatch(getReviews(reduxState?._id)).then((data) => setReviews(data.payload.reviews));
        }
    }, []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
    };
    console.log(
        reduxState?.mapLocation?.split(",").map((item) => parseFloat(item))
    );

    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">About this place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                           <span className="flex items-center gap-1 text-zomato-400">See all menu <IoMdArrowDropright /></span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection 
                            menuTitle="Menu" 
                            pages="3"
                            image={menuImage}
                        />
                    </div>
                    <h4 className="text-lg font-medium my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        {reduxState?.cuisine.map((data) => (
                            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">{data}</span>
                        ))}
                    </div>
                    <h4 className="text-lg font-medium mt-8 mb-2">Popular Dishes</h4>
                    <p>Mc Veggie, Maharaja Mac, Mocha Frappe, Peri Peri Fries, Burgers, Hot Chocolate</p>
                    <h4 className="text-lg font-medium mt-8 mb-2">People Say This Place Is Known For</h4>
                    <p>Elegantly Decorated, Good Crowd, Low Price, Polite Staff, Worth the Money, Hygiene</p>
                    <div className="my-4">
                       <h4 className="text-lg font-medium">Average Cost</h4>
                       <h6>₹{reduxState?.averageCost} for two people (approx.)</h6>
                       <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
                    <div className="my-4">
                       <h4 className="text-lg font-medium">Similar Restaurants</h4>
                       <Slider {...settings}>
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                       </Slider>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Rate your delivery experience</h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        {Reviews.map((reviewData) => (
                            <ReviewCard {...reviewData} />
                        ))}
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                       <Mapview 
                            title={reduxState?.name} 
                            phno={`+91${reduxState?.contactNumber}`} 
                            mapLocation={getLatLong(reduxState?.mapLocation)}  
                            address={reduxState?.address}
                        />
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside style={{ height: "fit-content" }} className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4">
                        <Mapview 
                            title={reduxState?.name} 
                            phno={`+91${reduxState?.contactNumber}`} 
                            mapLocation={getLatLong(reduxState?.mapLocation)}  
                            address={reduxState?.address}
                        />
                </aside>
            </div>
        </>
    );
};

export default Overview;
