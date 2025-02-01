import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';
import { render } from '@testing-library/react';
import { mockedHotelData } from 'src/assets/_mocks_';
import configs from 'src/commons/configs';
import Rating from 'src/components/HotelList/Rating/Rating';
import { RatingType } from 'src/commons/enums';

configure({ adapter: new Adapter() });

describe('Rating.tsx', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Rating {...mockedHotelData[0].rating} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders ratings with circles', () => {
        const wrapper = render(<Rating {...mockedHotelData[0].rating} />);

        const frontEl = wrapper.container.getElementsByClassName('front');
        expect(frontEl.length).toBe(1);
        expect(frontEl[0]).toBeDefined();

        const circleFrontEl = frontEl[0].getElementsByTagName('div');
        expect(circleFrontEl.length).toBe(configs.maxRatingCap * 2);

        [...Array(configs.maxRatingCap)].forEach((_, i) => {
            if (circleFrontEl[i].hasAttribute('id'))
                expect(circleFrontEl[i].innerHTML).toEqual('<div class=\"circle\"></div>');
        });

        const behindEl = wrapper.container.getElementsByClassName('behind');
        expect(behindEl.length).toBe(1);
        expect(behindEl[0]).toBeDefined();

        const circleBehindEl = behindEl[0].getElementsByTagName('div');
        expect(circleBehindEl.length).toBe(configs.maxRatingCap * 2);

        [...Array(configs.maxRatingCap)].forEach((_, i) => {
            if (circleBehindEl[i].hasAttribute('id'))
                expect(circleBehindEl[i].innerHTML).toEqual('<div class=\"circle\"></div>');
        });
    });

    it('renders ratings with stars', () => {
        const data = mockedHotelData[0].rating;
        data.type = RatingType.STAR;
        const wrapper = render(<Rating {...data} />);

        const frontEl = wrapper.container.getElementsByClassName('front');
        expect(frontEl.length).toBe(1);
        expect(frontEl[0]).toBeDefined();

        const circleFrontEl = frontEl[0].getElementsByTagName('div');
        expect(circleFrontEl.length).toBe(configs.maxRatingCap);

        [...Array(configs.maxRatingCap)].forEach((_, i) => {
            if (circleFrontEl[i].hasAttribute('id'))
                expect(circleFrontEl[i].innerHTML).toEqual('<span>★</span>');
        });

        const behindEl = wrapper.container.getElementsByClassName('behind');
        expect(behindEl.length).toBe(1);
        expect(behindEl[0]).toBeDefined();

        const circleBehindEl = behindEl[0].getElementsByTagName('div');
        expect(circleBehindEl.length).toBe(configs.maxRatingCap);

        [...Array(configs.maxRatingCap)].forEach((_, i) => {
            if (circleBehindEl[i].hasAttribute('id'))
                expect(circleBehindEl[i].innerHTML).toEqual('<span>★</span>');
        });
    });
});