import React from 'react';
import 'src/components/HotelList/HotelItem/hotelItem.scss';
import Rating from 'src/components/HotelList/Rating/Rating';
import Pricing from 'src/components/HotelList/HotelItem/Pricing';

const HotelItem = () => {
    return (
        <div className='hotel-item'>
            <div className='hotel-img'>
                <img src='https://i.pointhacks.com/2022/02/04115238/holiday-1600.jpg' alt='quantas-hotel' />
                <p>Exclusive Deal</p>
            </div>

            <div className='hotel-info'>
                <div className='general-info'>
                    <h6>
                        <span>Metro Hotel Marlow Sydney Central</span>
                        <Rating />
                    </h6>
                    <p>431 - 439 Pitt Street, Sydney 3000</p>
                    <a href='/'>Deluxe King Room</a>
                    <br />
                    <span>Free cancellation</span>
                </div>

                <div className='price-info'>
                    <Pricing />
                </div>
            </div>


        </div>
    );
};

export default HotelItem;