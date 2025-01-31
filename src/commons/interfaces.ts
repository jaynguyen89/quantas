import { CancellationType, ImageType, PromotionType, RatingType } from 'src/commons/enums';

export interface IApiHotel {
    id: string,
    property: {
        propertyId: string,
        title: string,
        address: Array<string>,
        previewImage: {
            url: string,
            caption: string,
            imageType: string,
        },
        rating: {
            ratingValue: number,
            ratingType: string,
        },
    },
    offer: {
        promotion: {
            title: string,
            type: string,
        },
        name: string,
        displayPrice: {
            amount: number,
            currency: string,
        },
        savings: {
            amount: number,
            currency: string,
        },
        cancellationOption: {
            cancellationType: string,
        },
    },
}

export interface IHotel {
    id: string,
    name: string,
    address: string,
    image: {
        url: string,
        caption: string,
        type: ImageType,
    },
    rating: {
        value: number,
        type: RatingType,
    },
    pricing: IOffer,
}

export interface IOffer {
    name: string,
    price: {
        value: number,
        currency: string,
    },
    promotion: {
        title: string,
        type: PromotionType,
    },
    savings?: {
        value: number,
        currency: string,
    },
    cancellationType: CancellationType,
}