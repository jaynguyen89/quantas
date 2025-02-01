import { IApiHotel, IHotel } from 'src/commons/interfaces';
import { CancellationType, ImageType, PromotionType, RatingType } from 'src/commons/enums';

export const mockedApiHotelData: {
    results: Array<IApiHotel>,
} = {
    results: [
        {
            id: '123',
            property: {
                propertyId: '111',
                title: 'First Hotel',
                address: ['1 What Street', 'Where 3333'],
                previewImage: {
                    url: 'https://photo1.png',
                    caption: 'Photo1',
                    imageType: 'PRIMARY',
                },
                rating: {
                    ratingValue: 3,
                    ratingType: 'self',
                },
            },
            offer: {
                promotion: {
                    title: 'Promo1',
                    type: 'MEMBER',
                },
                name: 'Promo1',
                displayPrice: {
                    amount: 111,
                    currency: 'AU',
                },
                savings: {
                    amount: 11,
                    currency: 'AU',
                },
                cancellationOption: {
                    cancellationType: 'NOT_REFUNDABLE',
                },
            },
        },
        {
            id: '456',
            property: {
                propertyId: '222',
                title: 'Second Hotel',
                address: ['2 Which Way', 'Anywhere 2222'],
                previewImage: {
                    url: 'https://photo2.png',
                    caption: 'Photo2',
                    imageType: 'PRIMARY',
                },
                rating: {
                    ratingValue: 4,
                    ratingType: 'star',
                },
            },
            offer: {
                promotion: {
                    title: 'Promo2',
                    type: 'MEMBER',
                },
                name: 'Promo2',
                displayPrice: {
                    amount: 222,
                    currency: 'US',
                },
                savings: null,
                cancellationOption: {
                    cancellationType: 'FREE_CANCELLATION',
                },
            },
        },
        {
            id: '789',
            property: {
                propertyId: '333',
                title: 'Third Hotel',
                address: ['3 Where Road', 'Somewhere 1111', 'Australia'],
                previewImage: {
                    url: 'https://photo3.png',
                    caption: 'Photo3',
                    imageType: 'PRIMARY',
                },
                rating: {
                    ratingValue: 5,
                    ratingType: 'self',
                },
            },
            offer: {
                promotion: {
                    title: 'Promo3',
                    type: 'MEMBER',
                },
                name: 'Promo3',
                displayPrice: {
                    amount: 333,
                    currency: 'VND',
                },
                savings: {
                    amount: 33,
                    currency: 'VND',
                },
                cancellationOption: {
                    cancellationType: 'FREE_CANCELLATION',
                },
            },
        },
    ],
};

export const mockedHotelData: Array<IHotel> = [
    {
        id: '123',
        name: 'First Hotel',
        address: '1 What Street, Where 3333',
        image: {
            url: 'https://photo1.png',
            caption: 'Photo1',
            type: ImageType.PRIMARY,
        },
        rating: {
            value: 3,
            type: RatingType.SELF,
        },
        pricing: {
            name: 'Promo1',
            price: {
                value: 111,
                currency: 'AU',
            },
            promotion: {
                title: 'Promo1',
                type: PromotionType.MEMBER,
            },
            savings: {
                value: 11,
                currency: 'AU',
            },
            cancellationType: CancellationType.FREE_CANCELLATION,
        },
    },
    {
        id: '456',
        name: 'Second Hotel',
        address: '2 Which Way, Where 2222',
        image: {
            url: 'https://photo2.png',
            caption: 'Photo2',
            type: ImageType.PRIMARY,
        },
        rating: {
            value: 4,
            type: RatingType.STAR,
        },
        pricing: {
            name: 'Promo2',
            price: {
                value: 222,
                currency: 'US',
            },
            promotion: {
                title: 'Promo2',
                type: PromotionType.MEMBER,
            },
            cancellationType: CancellationType.FREE_CANCELLATION,
        },
    },
    {
        id: '789',
        name: 'Third Hotel',
        address: '3 Where Road, Somewhere 1111, Australia',
        image: {
            url: 'https://photo3.png',
            caption: 'Photo3',
            type: ImageType.PRIMARY,
        },
        rating: {
            value: 5,
            type: RatingType.SELF,
        },
        pricing: {
            name: 'Promo3',
            price: {
                value: 333,
                currency: 'US',
            },
            promotion: {
                title: 'Promo3',
                type: PromotionType.MEMBER,
            },
            savings: {
                value: 33,
                currency: 'US',
            },
            cancellationType: CancellationType.FREE_CANCELLATION,
        },
    },
];