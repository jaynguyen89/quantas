import React from 'react';
import 'src/components/HotelList/HotelItem/hotelItem.scss';

const Pricing = () => {
    return (
        <div className='pricing'>
            <p>1 night total (AUD)</p>
            <h5><span>$</span>277</h5>
            <b>Save $30<span>~</span></b>
        </div>
    );
};

export default Pricing;