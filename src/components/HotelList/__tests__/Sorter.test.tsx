import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';
import { fireEvent, render } from '@testing-library/react';
import Sorter from 'src/components/HotelList/Sorter/Sorter';
import { SortingOption } from 'src/commons/enums';

configure({ adapter: new Adapter() });

describe('Sorter.tsx', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Sorter name='sorter' value='LOW_HIGH' handleChange={(val) => console.log(val)} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains necessary elements', () => {
        const wrapper = render(
            <Sorter name='sorter' value='LOW_HIGH' handleChange={(val) => console.log(val)} />
        );

        const sorterContainer = wrapper.container.getElementsByClassName('sorter');
        expect(sorterContainer.length).toBe(1);
        expect(sorterContainer[0]).toBeDefined();

        const labelEl = sorterContainer[0].getElementsByTagName('span');
        expect(labelEl.length).toBe(1);
        expect(labelEl[0]).toBeDefined();

        const selectEl = sorterContainer[0].getElementsByTagName('select');
        expect(selectEl.length).toBe(1);
        expect(selectEl[0]).toBeDefined();
        expect(selectEl[0].value).toEqual('LOW_HIGH');

        const optionEl = selectEl[0].getElementsByTagName('option');
        expect(optionEl.length).toBe(Object.keys(SortingOption).length);

        [...Array(Object.keys(SortingOption).length)].forEach((_, i) => {
            expect(optionEl[i].getAttribute('value')).toEqual(Object.keys(SortingOption)[i]);
            expect(optionEl[i].innerHTML).toEqual(Object.values(SortingOption)[i]);
        });
    });

    it('should handle selection', () => {
        const mockHandler = jest.fn().mockImplementation((val: string) => console.log(val));
        const consoleSpy = jest.spyOn(console, 'log');

        const wrapper = render(<Sorter name='sorter' value='LOW_HIGH' handleChange={mockHandler} />);
        const selectEl = wrapper.container.getElementsByTagName('select')[0];

        fireEvent.change(selectEl, {target: { value: 'HIGH_LOW' }});
        expect(mockHandler).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith('HIGH_LOW');
    });
});