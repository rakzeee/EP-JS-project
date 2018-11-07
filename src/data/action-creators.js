import {TYPES} from "./action-types";
import axios from "axios";

export const selectArticle = (article) => {
    return {
        type: TYPES.SELECT_ARTICLE,
        article
    }
};

export const loadNews = (dispatch) => {
    dispatch({
        type: TYPES.LOAD_NEWS_STARTED
    });
    axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
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