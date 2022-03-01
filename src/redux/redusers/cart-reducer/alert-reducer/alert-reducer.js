const initialState = {
    message: '',
}
//TODO: вынести в отдельный файл
export const ALERT_THE_USER_THAT_THE_PRODUCT_HAS_BEEN_ADDED_TO_THE_CART = "ALERT_THE_USER_THAT_THE_PRODUCT_HAS_BEEN_ADDED_TO_THE_CART"
export const DELETE_ALERT_MESSAGE = "DELETE_ALERT_MESSAGE"


const alertReducer = (state = initialState, action) => {
    switch (action.type){
        case ALERT_THE_USER_THAT_THE_PRODUCT_HAS_BEEN_ADDED_TO_THE_CART:
            const newMessage = action.payload
            return {
                ...state,
                message: newMessage
            }
        case DELETE_ALERT_MESSAGE:
            return {
                ...state,
                message: ''
            }
        default:
            return state
    }
}

export default alertReducer