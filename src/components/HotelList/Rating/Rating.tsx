import React, { JSX, useMemo } from 'react';
import 'src/components/HotelList/Rating/rating.scss';
import { RatingType } from 'src/commons/enums';
import configs from 'src/commons/configs';

type TRatingProps = {
    value: number,
    type: RatingType,
};

const Rating = ({
    value,
    type,
}: TRatingProps) => {
    const ratingIcon: JSX.Element = useMemo(
        () => type === RatingType.SELF
            ? <div className='circle' />
            : <span>★</span>,
        [type],
    );

    return (
        <div className='rating'>
            <div className='front' style={{ width: `${value}%` }}>
                {[...Array(configs.maxRatingCap)].map((_, i) => (
                    <div id='icon-front' key={i}>{ratingIcon}</div>
                ))}
            </div>
            <div className='behind'>
                {[...Array(configs.maxRatingCap)].map((_, i) => (
                    <div id='icon-behind' key={i}>{ratingIcon}</div>
                ))}
            </div>
        </div>
    );
};

export default Rating;