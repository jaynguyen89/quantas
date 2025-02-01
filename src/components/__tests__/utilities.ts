import { mapApiHotelDataToClientSchema } from 'src/utilities/utilities';
import { mockedApiHotelData } from 'src/assets/_mocks_';
import { IHotel } from 'src/commons/interfaces';
import { CancellationType, ImageType, PromotionType, RatingType } from 'src/commons/enums';

describe('utilities.ts', () => {
    it('mapApiHotelDataToClientSchema', () => {
        const result = mapApiHotelDataToClientSchema(mockedApiHotelData.results);
        const expectation: Array<IHotel> = [
            {
                address: '1 What Street, Where 3333',
                id: '123',
                image: {
                    caption: 'Photo1',
                    type: ImageType.PRIMARY,
                    url: 'https://photo1.png',
                },
                name: 'First Hotel',
                pricing: {
                    cancellationType: CancellationType.NOT_REFUNDABLE,
                    name: 'Promo1',
                    price: {
                        currency: 'AU',
                        value: 111,
                    },
                    promotion: {
                        title: 'Promo1',
                        type: PromotionType.MEMBER,
                    },
                    savings: {
                        currency: 'AU',
                        value: 11,
                    },
                },
                rating: {
                    type: RatingType.SELF,
                    value: 60,
                },
            },
            {
                address: '2 Which Way, Anywhere 2222',
                id: '456',
                image: {
                    caption: 'Photo2',
                    type: ImageType.PRIMARY,
                    url: 'https://photo2.png',
                },
                name: 'Second Hotel',
                pricing: {
                    cancellationType: CancellationType.FREE_CANCELLATION,
                    name: 'Promo2',
                    price: {
                        currency: 'US',
                        value: 222,
                    },
                    promotion: {
                        title: 'Promo2',
                        type: PromotionType.MEMBER,
                    },
                    savings: undefined,
                },
                rating: {
                    type: RatingType.STAR,
                    value: 80,
                },
            },
            {
                address: '3 Where Road, Somewhere 1111, Australia',
                id: '789',
                image: {
                    caption: 'Photo3',
                    type: ImageType.PRIMARY,
                    url: 'https://photo3.png',
                },
                name: 'Third Hotel',
                pricing: {
                    cancellationType: CancellationType.FREE_CANCELLATION,
                    name: 'Promo3',
                    price: {
                        currency: 'VND',
                        value: 333,
                    },
                    promotion: {
                        title: 'Promo3',
                        type: PromotionType.MEMBER,
                    },
                    savings: {
                        currency: 'VND',
                        value: 33,
                    },
                },
                rating: {
                    type: RatingType.SELF,
                    value: 100,
                },
            },
        ];

        expect(result).toEqual(expectation);
    });
});