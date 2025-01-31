import React from 'react';
import 'src/components/HotelList/hotelList.scss';
import Container from 'src/components/Container/Container';
import Sorter from 'src/components/HotelList/Sorter/Sorter';
import HotelItem from 'src/components/HotelList/HotelItem/HotelItem';
import QuantasLogo from 'src/assets/qantas-logo.png';

const HotelList = () => {
    return (
        <Container>
            <div className='wrapper'>
                <img className='logo' src={QuantasLogo} alt='Quantas' />

                <div className='list-top'>
                    <div className='counter'>
                        <span className='count'>5</span>
                        <span>&nbsp;hotels in&nbsp;</span>
                        <span className='location'>Sydney.</span>
                    </div>

                    <Sorter name='sorter' />
                </div>

                <div className='list-body'>
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                </div>
            </div>
        </Container>
    );
};

export default HotelList;