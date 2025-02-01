import useHotelData from 'src/hooks/useHotelData';
import { act, renderHook } from '@testing-library/react-hooks';
import { getApiHotelData } from 'src/utilities/utilities';
import { mapApiHotelDataToClientSchema } from 'src/utilities/utilities';
import { mockedApiHotelData, mockedHotelData } from 'src/assets/_mocks_';

jest.mock('src/utilities/utilities');
const mockGetApiHotelData = jest.mocked(getApiHotelData);

jest.mock('src/utilities/utilities');
const mockMapApiHotelDataToClientSchema = jest.mocked(mapApiHotelDataToClientSchema);

describe('useHotelData.ts', () => {
    it('should get hotel data', async () => {
        mockGetApiHotelData.mockResolvedValue(new Promise(resolve => resolve(mockedApiHotelData.results)));
        mockMapApiHotelDataToClientSchema.mockReturnValue(mockedHotelData);

        const { result, waitForNextUpdate } = renderHook(() => useHotelData());
        await act(async () => await waitForNextUpdate());

        expect(result.current).toEqual(mockedHotelData);
    });
});