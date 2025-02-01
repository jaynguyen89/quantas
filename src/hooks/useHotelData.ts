import { IHotel } from 'src/commons/interfaces';
import { useEffect, useState } from 'react';
import { getApiHotelData, mapApiHotelDataToClientSchema } from 'src/utilities/utilities';

// There are alternative ways to get data from API, this way is simple for this app
// Ex. [1] if using Redux, we can store hotel data in Redux store, then map it to the component
// [2] otherwise, fetch data directly inside the component useEffect(() => {}, []);
// however, [2] is a bad practice, [1] is better but too much boilerplate.
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

