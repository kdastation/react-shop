const initialState = {
    productReviews: [],
    isLoading: true,
    error: null
}

const reviewProductReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_PRODUCT_REVIEWS":
            return{
                ...state,
                productReviews: action.payload,
                isLoading: false
            }
        case "SET_LOADING_PRODUCT_REVIEWS":
            return {
                ...state,
                productReviews: [],
                isLoading: true,
                error: null
            }
        case "ADD_REVIEW_PRODUCT":{
            const newReview = action.payload
            return {
                ...state,
                productReviews: [...state.productReviews, newReview]
            }
        }

        case "SET_ERROR_PRODUCT_REVIEWS":
            const errorMessage = action.payload
            return {
                ...state,
                isLoading: false,
                error: errorMessage
            }

        default:
            return state
    }
}

export default reviewProductReducer;