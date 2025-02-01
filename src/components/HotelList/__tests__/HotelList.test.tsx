import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import HotelList from 'src/components/HotelList/HotelList';
import toJson from 'enzyme-to-json';
import { render } from '@testing-library/react';
import useHotelData from 'src/hooks/useHotelData';
import { mockedHotelData } from 'src/assets/_mocks_';

configure({ adapter: new Adapter() });

jest.mock('src/hooks/useHotelData');
const mockUseHotelData = jest.mocked(useHotelData);

describe('HotelList.tsx', () => {
    it('renders correctly', () => {
        mockUseHotelData.mockReturnValue(mockedHotelData);
        const wrapper = shallow(<HotelList />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains the necessary elements', () => {
        mockUseHotelData.mockReturnValue(mockedHotelData);
        const wrapper = render(<HotelList />);

        // Todo: finish the test
    });
});