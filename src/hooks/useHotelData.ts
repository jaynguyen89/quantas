import { IHotel } from 'src/commons/interfaces';
import { useEffect, useState } from 'react';
import { getApiHotelData, mapApiHotelDataToClientSchema } from 'src/utilities/utilities';

const useHotelData = () => {
    const [hotelData, setHotelData] = useState<Array<IHotel>>([]);

    useEffect(() => {
        getApiHotelData().then(data => {
            const hotelData = mapApiHotelDataToClientSchema(data);
            setHotelData(hotelData);
        });
    }, []);

    return hotelData;
};

export default useHotelData;

