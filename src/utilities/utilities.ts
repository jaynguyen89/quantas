import { IApiHotel, IHotel, IOffer } from 'src/commons/interfaces';
import rawHotelData from 'src/assets/data.json';
import { CancellationType, ImageType, PromotionType, RatingType } from 'src/commons/enums';
import configs from 'src/commons/configs';

export const getApiHotelData = async (): Promise<Array<IApiHotel>> => {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 2000));
    return rawHotelData.results as Array<IApiHotel>;
};

export const mapApiHotelDataToClientSchema = (data: Array<IApiHotel>): Array<IHotel> => {
    return data.map(item => ({
        id: item.id,
        name: item.property.title,
        address: item.property.address.join(', '),
        image: {
            url: item.property.previewImage.url,
            caption: item.property.previewImage.caption,
            type: item.property.previewImage.imageType as ImageType,
        },
        rating: {
            value: Math.round(item.property.rating.ratingValue * 100 / configs.maxRatingCap),
            type: item.property.rating.ratingType as RatingType,
        },
        pricing: {
            name: item.offer.name,
            price: {
                value: item.offer.displayPrice.amount,
                currency: item.offer.displayPrice.currency,
            },
            promotion: {
                title: item.offer.promotion.title,
                type: item.offer.promotion.type as PromotionType,
            },
            savings: item.offer.savings === null
                ? undefined
                : {
                    value: item.offer.savings.amount,
                    currency: item.offer.savings.currency,
                },
            cancellationType: item.offer.cancellationOption.cancellationType as CancellationType,
        } as IOffer,
    } as IHotel));
};