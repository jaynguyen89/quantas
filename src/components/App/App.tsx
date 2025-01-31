import React from 'react';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import HotelList from 'src/components/HotelList/HotelList';
import 'src/components/App/app.scss';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <HotelList />
            <Footer />
        </div>
    );
};

export default App;
