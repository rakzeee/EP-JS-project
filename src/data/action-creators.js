import {TYPES} from "./action-types";
import axios from "axios";
import moment from 'moment';

export const loadNews = (categories) => (dispatch, getState) => {
    dispatch({
        type: TYPES.LOAD_NEWS_STARTED
    });
    let selectedLang = 'EN'
    print(categories)
    let newsLink = 'https://min-api.cryptocompare.com/data/v2/news/'
    if (getState().form.lang.values != null && getState().form.lang.values.lang != null){
        selectedLang = getState().form.lang.values.lang;
        newsLink = newsLink.concat(`?lang=${selectedLang}`)
    }else{
        newsLink = newsLink.concat('?lang=EN')
    }
    if (categories != null && categories.length > 0){
        newsLink = newsLink.concat('&categories=')
        categories.forEach(element => {
            newsLink = newsLink.concat(`${element.value},`)
        });
    }
    console.log(categories)
    console.log(selectedLang)
    axios.get(newsLink)
        .then((response) => {
            dispatch({
                type: TYPES.LOAD_NEWS,
                data: Object.values(response.data.Data)
            })
        })
        .catch((e) => {
            console.log(e)
            dispatch({
                type: TYPES.LOAD_NEWS_FAILED
            });
        });
};

export const loadCategories = () => (dispatch) => {
    dispatch({
        type: TYPES.LOAD_CATEGORIES_STARTED
    });
    axios.get(`https://min-api.cryptocompare.com/data/news/categories`)
        .then((response) => {
            dispatch({
                type: TYPES.LOAD_CATEGORIES,
                data: Object.values(response.data)
            })
        })
        .catch((e) => {
            console.log(e)
            dispatch({
                type: TYPES.LOAD_CATEGORIES_FAILED
            });
        });
};

export const loadPrices = () => (dispatch) => {
    dispatch({
        type: TYPES.LOAD_CATEGORIES_STARTED
    });
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BCH,LTC,DOGE,&tsyms=USD,EUR,RUB')
        .then((response) => {
            dispatch({
                type: TYPES.LOAD_PRICES,
                data: response.data
            });
        })
        .catch((e) => {
            console.log(e)
            dispatch({
                type: TYPES.LOAD_PRICES_FAILED
            });
        });
};

export const loadGraphData = () => (dispatch) => {
    dispatch({
        type: TYPES.LOAD_GRAPH_DATA_STARTED
    });

    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
        .then((response) => {
            console.log(response);
            const sortedData = [];
            let count = 0;
            for (let date in response.data.bpi){
                sortedData.push({
                    d: moment(date).format('MMM DD'),
                    p: response.data.bpi[date].toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
                    x: count, //previous days
                    y: response.data.bpi[date] // numerical price
                  });
                  count++;
            }
            dispatch({
                type: TYPES.LOAD_GRAPH_DATA,
                data: sortedData
            });
        })
        .catch((e) => {
            console.log(e)
            dispatch({
                type: TYPES.LOAD_GRAPH_DATA_FAILED
            });
        });
}