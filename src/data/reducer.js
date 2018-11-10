import {TYPES} from "./action-types";

const initState = {
    news: [],
    categories: [],
    prices: [],
    graphData: [],
    graphDataIsLoading : true,
};

export const reducer =(prevState = initState, action) => {
    const newState = {...prevState};
    switch (action.type) {

        case TYPES.LOAD_NEWS:
            return {
                ...newState,
                news: action.data,
                newsIsLoading: false
            };

        case TYPES.LOAD_NEWS_STARTED:
            return {...newState,
                newsIsLoading: true,
                newsLoadFailed: false
            };

        case TYPES.LOAD_NEWS_FAILED:
            return {
                ...newState,
                newsLoadFailed: true,
                newsIsLoading: false
            };
        
        case TYPES.LOAD_CATEGORIES_STARTED:
            return {
                ...newState,
                categoriesIsLoading: true,
                categoriesLoadFailed: false
            }

        case TYPES.LOAD_CATEGORIES_FAILED:
            return {
                ...newState,
                categoriesIsLoading: false,
                categoriesLoadFailed: true
            }
        case TYPES.LOAD_CATEGORIES:
            return {
                ...newState,
                categories: action.data,
                categoriesIsLoading: false
            }

        case TYPES.LOAD_PRICES:
            return {
                ...newState,
                prices: action.data,
                priceIsLoading: false
            }
        case TYPES.LOAD_PRICES_STARTED:
            return {
                ...newState,
                priceIsLoading: true,
                priceLoadFailed: false
            }
        case TYPES.LOAD_PRICES_FAILED:
            return {
                ...newState,
                priceIsLoading: false,
                priceLoadFailed: true
            }

        case TYPES.LOAD_GRAPH_DATA:
            return {
                ...newState,
                graphData: action.data,
                graphDataIsLoading: false
            }
        case TYPES.LOAD_GRAPH_DATA_STARTED:
            return {
                ...newState,
                graphDataIsLoading: true,
                graphDataLoadFailed: false
            }
        case TYPES.LOAD_GRAPH_DATA_FAILED:
            return {
                ...newState,
                graphDataIsLoading: false,
                graphDataLoadFailed: true
            }
    }
    return newState
};