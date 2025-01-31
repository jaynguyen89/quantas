import React from 'react';
import 'src/components/HotelList/HotelItem/hotelItem.scss';
import { IOffer } from 'src/commons/interfaces';

type TPricingProps = {
    pricing: IOffer,
};

const Pricing = ({
    pricing,
}: TPricingProps) => {
    return (
        <div className='pricing'>
            <p>1 night total ({pricing.price.currency})</p>
            <h5><span>$</span>{pricing.price.value}</h5>

            {pricing.savings && (
                <b>Save ${pricing.savings.value}<span>~</span></b>
            )}
        </div>
    );
};

export default Pricing;