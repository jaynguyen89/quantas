import React, { useMemo, useState } from 'react';
import Container from 'src/components/Container/Container';
import Sorter from 'src/components/HotelList/Sorter/Sorter';
import HotelItem from 'src/components/HotelList/HotelItem/HotelItem';
import useHotelData from 'src/hooks/useHotelData';
import Loading from 'src/components/Loading/Loading';
import { SortingOption } from 'src/commons/enums';
import configs from 'src/commons/configs';

import QuantasLogo from 'src/assets/qantas-logo.png';
import 'src/components/HotelList/hotelList.scss';

const HotelList = () => {
    const hotelData = useHotelData();

    const [sorter, setSorter] = useState<keyof typeof SortingOption>(configs.defaultSortOption);

    const { count, hotelText } = useMemo(() => {
        let count = 0;
        let hotelText = '';

        if (hotelData.length === 0) return { count, hotelText };

        count = hotelData.length;
        hotelText = count > 1 ? 'hotels' : 'hotel';

        return { count, hotelText };
    }, [hotelData]);

    const handleChange = (option: string) =>
        setSorter(option as keyof typeof SortingOption);

    return (
        <Container>
            <div className='wrapper'>
                {(hotelData.length === 0 && <Loading />) || (
                    <>
                        <img className='logo' src={QuantasLogo} alt='Quantas' />

                        <div className='list-top'>
                            <div className='counter'>
                                <span className='count'>{count}</span>
                                <span>&nbsp;{hotelText} in&nbsp;</span>
                                <span className='location'>Sydney.</span>
                            </div>

                            <Sorter
                                name='price-sorter'
                                value={sorter}
                                handleChange={handleChange}
                            />
                        </div>

                        <div className='list-body'>
                            {hotelData.map(hotel => (
                                <HotelItem key={hotel.id} hotel={hotel} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Container>
    );
};

export default HotelList;