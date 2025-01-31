import React from 'react';
import 'src/components/HotelList/Rating/rating.scss';

const Rating = () => {
    return (
        <div className='rating'>
            <div className='front' style={{ width: '85%' }}>
                <span><div className='circle' /></span>
                <span><div className='circle' /></span>
                <span><div className='circle' /></span>
                <span><div className='circle' /></span>
                <span><div className='circle' /></span>
            </div>
            <div className='behind'>
                <span><div className='circle' /></span>
                <span><div className='circle' /></span>
                <span><div className='circle' /></span>
                <span><div className='circle' /></span>
                <span><div className='circle' /></span>
            </div>
        </div>
    );
};

export default Rating;

// <span>★</span>