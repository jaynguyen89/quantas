import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';
import { render } from '@testing-library/react';
import { mockedHotelData } from 'src/assets/_mocks_';
import Pricing from 'src/components/HotelList/HotelItem/Pricing';

configure({ adapter: new Adapter() });

describe('Pricing.tsx', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Pricing pricing={mockedHotelData[0].pricing} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains necessary elements', () => {
        const data = mockedHotelData[0].pricing;
        const wrapper = render(<Pricing pricing={data} />);

        const pricingContainer = wrapper.container.getElementsByClassName('pricing');
        expect(pricingContainer.length).toEqual(1);
        expect(pricingContainer[0]).toBeDefined();

        const pEl = pricingContainer[0].getElementsByTagName('p');
        expect(pEl.length).toEqual(1);
        expect(pEl[0]).toBeDefined();
        expect(pEl[0].innerHTML).toEqual(`1 night total (${data.price.currency})`);

        const h5El = pricingContainer[0].getElementsByTagName('h5');
        expect(h5El.length).toEqual(1);
        expect(h5El[0]).toBeDefined();
        expect(h5El[0].innerHTML).toContain(`<span>$</span>${data.price.value}`);

        const savingEl = pricingContainer[0].getElementsByTagName('b');
        expect(savingEl.length).toEqual(1);
        expect(savingEl[0]).toBeDefined();
        expect(savingEl[0].innerHTML).toContain(`Save $${data.savings!.value}<span>~</span>`);
    });

    it('does not contain the saving element', () => {
        const data = mockedHotelData[0].pricing;
        data.savings = undefined;
        const wrapper = render(<Pricing pricing={data} />);

        const pricingContainer = wrapper.container.getElementsByClassName('pricing');
        const savingEl = pricingContainer[0].getElementsByTagName('b');
        expect(savingEl.length).toEqual(0);
    });
});