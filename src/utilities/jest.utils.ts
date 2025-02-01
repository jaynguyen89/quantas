import { queryByAttribute } from '@testing-library/react';

export const getBy = (el: HTMLElement, attr: string, attrVal: string) => queryByAttribute.bind(null, attr)(el, attrVal);
