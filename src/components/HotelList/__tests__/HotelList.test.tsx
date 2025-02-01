import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';
import { render } from '@testing-library/react';
import useHotelData from 'src/hooks/useHotelData';
import HotelList from 'src/components/HotelList/HotelList';
import { mockedHotelData } from 'src/assets/_mocks_';
import { getBy } from 'src/utilities/jest.utils';

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

        const content = wrapper.container.getElementsByClassName('wrapper')[0];
        expect(content).toBeDefined();

        const quantasLogo = content.getElementsByTagName('img')[0];
        expect(quantasLogo).toBeDefined();
        expect(quantasLogo.src).toContain('test-file-stub');

        const listTop = content.getElementsByClassName('list-top');
        expect(listTop.length).toBe(1);
        expect(listTop[0]).toBeDefined();

        const listCount = listTop[0].getElementsByClassName('counter');
        expect(listCount.length).toBe(1);
        expect(listCount[0]).toBeDefined();

        const sorter = getBy(wrapper.container, 'name', 'price-sorter');
        expect(sorter).toBeDefined();

        const listBody = content.getElementsByClassName('list-body');
        expect(listBody.length).toBe(1);
        expect(listBody[0]).toBeDefined();

        const listItems = listBody[0].getElementsByClassName('hotel-item');
        expect(listItems.length).toBe(mockedHotelData.length);
    });
});