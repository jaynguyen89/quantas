import React from 'react';
import 'src/components/HotelList/Sorter/sorter.scss';

type TSorterProps = {
    name: string,
};

const Sorter = ({
    name,
}: TSorterProps) => {
    return (
        <div className='sorter'>
            <span>Sort by</span>
            <select name={name}>
                <option value='1'>Price high-low</option>
                <option value='1'>Price low-high</option>
            </select>
        </div>
    );
};

export default Sorter;