
const initialStateProduct = {
    productInformation: {},
    isLoading: true
}

const productReducer = (state=initialStateProduct, action) => {
    switch (action.type){
        case "SET_PRODUCT_INFORMATION":
            return {
                ...state,
                productInformation: action.payload,
                isLoading: false,
            }
        case "SET_LOADING_PRODUCT":
            return {
                ...state,
                productInformation: {},
                isLoading: true
            }
        default:
            return state
    }
}

export default productReducer;