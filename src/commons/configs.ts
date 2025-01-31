import * as process from 'process';
import { SortingOption } from 'src/commons/enums';

const configs = {
    maxRatingCap: process.env.REACT_APP_MAX_RATING_CAP === undefined
        ? 5
        : +process.env.REACT_APP_MAX_RATING_CAP,
    defaultSortOption: (process.env.REACT_APP_DEFAULT_SORTING ?? 'HIGH_LOW') as keyof typeof SortingOption,
};

export default configs;