import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';
import { render } from '@testing-library/react';
import HotelItem from 'src/components/HotelList/HotelItem/HotelItem';
import { mockedHotelData } from 'src/assets/_mocks_';
import { getBy } from 'src/utilities/jest.utils';

configure({ adapter: new Adapter() });

describe('HotelItem.tsx', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<HotelItem hotel={mockedHotelData[0]} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains the necessary elements', () => {
        const data = mockedHotelData[0];
        const wrapper = render(<HotelItem hotel={data} />);

        const content = wrapper.container.getElementsByClassName('hotel-item');
        expect(content.length).toEqual(1);
        expect(content[0]).toBeDefined();

        const imgContainer = content[0].getElementsByClassName('hotel-img');
        expect(imgContainer.length).toEqual(1);
        expect(imgContainer[0]).toBeDefined();

        const imgEl = imgContainer[0].getElementsByTagName('img');
        expect(imgEl.length).toEqual(1);
        expect(imgEl[0]).toBeDefined();
        expect(imgEl[0].src).toContain(data.image.url);

        const promoEl = imgContainer[0].getElementsByTagName('p');
        expect(promoEl.length).toEqual(1);
        expect(promoEl[0]).toBeDefined();
        expect(promoEl[0].innerHTML).toEqual(data.pricing.promotion.title);

        const infoContainer = content[0].getElementsByClassName('hotel-info');
        expect(infoContainer.length).toEqual(1);
        expect(infoContainer[0]).toBeDefined();

        const generalInfoContainer = infoContainer[0].getElementsByClassName('general-info');
        expect(generalInfoContainer.length).toEqual(1);
        expect(generalInfoContainer[0]).toBeDefined();

        const h6El = generalInfoContainer[0].getElementsByTagName('h6');
        expect(h6El.length).toEqual(1);
        expect(h6El[0]).toBeDefined();

        const h6Title = getBy(wrapper.container, 'id', 'hotel-name');
        expect(h6Title).toBeDefined();
        expect(h6Title!.innerHTML).toEqual(data.name);

        const ratingContainer = generalInfoContainer[0].getElementsByClassName('rating');
        expect(ratingContainer.length).toEqual(1);
        expect(ratingContainer[0]).toBeDefined();

        generalInfoContainer[0]!.removeChild(h6El[0]);
        const addressEl = generalInfoContainer[0].getElementsByTagName('p');
        expect(addressEl.length).toEqual(1);
        expect(addressEl[0]).toBeDefined();
        expect(addressEl[0]!.innerHTML).toEqual(data.address);

        const linkEl = generalInfoContainer[0].getElementsByTagName('a');
        expect(linkEl.length).toEqual(1);
        expect(linkEl[0]).toBeDefined();
        expect(linkEl[0].innerHTML).toEqual(data.pricing.name);

        const cancellationEl = generalInfoContainer[0].getElementsByTagName('span');
        expect(cancellationEl.length).toEqual(1);
        expect(cancellationEl[0]).toBeDefined();
        expect(cancellationEl[0].innerHTML).toEqual('Free cancellation');

        const pricingInfoContainer = infoContainer[0].getElementsByClassName('price-info');
        expect(pricingInfoContainer.length).toEqual(1);
        expect(pricingInfoContainer[0]).toBeDefined();

        const pricingContainer = pricingInfoContainer[0].getElementsByClassName('pricing');
        expect(pricingContainer.length).toEqual(1);
        expect(pricingContainer[0]).toBeDefined();
    });
});