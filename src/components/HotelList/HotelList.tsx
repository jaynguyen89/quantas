import React, { useEffect, useMemo, useState } from 'react';
import Container from 'src/components/Container/Container';
import Sorter from 'src/components/HotelList/Sorter/Sorter';
import HotelItem from 'src/components/HotelList/HotelItem/HotelItem';
import useHotelData from 'src/hooks/useHotelData';
import Loading from 'src/components/Loading/Loading';
import { IHotel } from 'src/commons/interfaces';
import { SortingOption } from 'src/commons/enums';
import configs from 'src/commons/configs';

import QuantasLogo from 'src/assets/qantas-logo.png';
import 'src/components/HotelList/hotelList.scss';

const HotelList = () => {
    const hotelData = useHotelData();

    const [sorter, setSorter] = useState<keyof typeof SortingOption>(configs.defaultSortOption);
    const [hotels, setHotels] = useState<Array<IHotel>>(hotelData);

    const { count, hotelText } = useMemo(() => {
        let count = 0;
        let hotelText = '';

        if (hotelData.length === 0) return { count, hotelText };

        count = hotelData.length;
        hotelText = count > 1 ? 'hotels' : 'hotel';

        return { count, hotelText };
    }, [hotelData]);



    useEffect(() => {
        if (hotelData.length === 0) return;

        const sortedData = hotelData.sort((former, latter) => {
            const comparison = former.pricing.price.value - latter.pricing.price.value;
            return SortingOption[sorter] === SortingOption.HIGH_LOW ? -1 * comparison : comparison;
        });

        setHotels([...sortedData]);
    }, [sorter, hotelData]);

    const handleChange = (option: string) =>
        setSorter(option as keyof typeof SortingOption);

    return (
        <Container>
            <div className='wrapper'>
                {(hotels.length === 0 && <Loading />) || (
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
                            {hotels.map(hotel => (
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