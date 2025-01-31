import React, { ChangeEvent } from 'react';
import 'src/components/HotelList/Sorter/sorter.scss';
import { SortingOption } from 'src/commons/enums';

type TSorterProps = {
    name: string,
    value: keyof typeof SortingOption,
    handleChange: (value: string) => void,
};

const Sorter = ({
    name,
    value,
    handleChange,
}: TSorterProps) => {
    return (
        <div className='sorter'>
            <span>Sort by</span>
            <select
                name={name}
                value={value}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value)}
            >
                {Object.keys(SortingOption).map((key, i) => (
                    <option key={key} value={key}>
                        {Object.values(SortingOption)[i]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Sorter;