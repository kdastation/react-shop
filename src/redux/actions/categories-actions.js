import {SET_CATEGORIES, SET_LOADING_CATEGORIES} from "../action-type-consts/consts-categories";

export const setCategories = (categoriesList) => {
    return {
        type: SET_CATEGORIES,
        payload: categoriesList
    }
}

export const setLoadingCategories = () => {
    return {
        type: SET_LOADING_CATEGORIES
    }
}