import {SET_CATEGORIES, SET_LOADING_CATEGORIES} from "../../action-type-consts/consts-categories";

const initialState = {
    items: [],
    isLoading: true
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CATEGORIES:
            const receivedCategories = action.payload
            return {
                ...state,
                items: receivedCategories,
                isLoading: false
            }
        case SET_LOADING_CATEGORIES:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state
    }
}

export default categoriesReducer
