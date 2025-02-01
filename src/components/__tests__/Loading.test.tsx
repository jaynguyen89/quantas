import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';
import Loading from 'src/components/Loading/Loading';

configure({ adapter: new Adapter() });

describe('Loading.tsx', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Loading />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});