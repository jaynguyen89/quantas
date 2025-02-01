import React from 'react';
import 'src/components/HotelList/HotelItem/hotelItem.scss';
import Rating from 'src/components/HotelList/Rating/Rating';
import Pricing from 'src/components/HotelList/HotelItem/Pricing';
import { IHotel } from 'src/commons/interfaces';
import { CancellationType } from 'src/commons/enums';

type THotelItemProps = {
    hotel: IHotel,
};

const HotelItem = ({
    hotel,
}: THotelItemProps) => {
    const cancellationText =
        hotel.pricing.cancellationType === CancellationType.FREE_CANCELLATION
            ? 'Free cancellation'
            : null;

    return (
        <div className='hotel-item'>
            <div className='hotel-img'>
                <img src={hotel.image.url} alt={hotel.image.caption} />
                <p>{hotel.pricing.promotion.title}</p>
            </div>

            <div className='hotel-info'>
                <div className='general-info'>
                    <h6>
                        <span id='hotel-name'>{hotel.name}</span>
                        <Rating {...hotel.rating} />
                    </h6>
                    <p>{hotel.address}</p>
                    <a href='/'>{hotel.pricing.name}</a>
                    <br />
                    {cancellationText && (
                        <span>{cancellationText}</span>
                    )}
                </div>

                <div className='price-info'>
                    <Pricing pricing={hotel.pricing} />
                </div>
            </div>
        </div>
    );
};

export default HotelItem;