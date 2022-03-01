import {
    ALERT_THE_USER_THAT_THE_PRODUCT_HAS_BEEN_ADDED_TO_THE_CART,
    DELETE_ALERT_MESSAGE
} from "../../redusers/cart-reducer/alert-reducer/alert-reducer";

export const alertTheUserThatTheProductHasBeenAddedToTheCart = (message) => {
    return {
        type: ALERT_THE_USER_THAT_THE_PRODUCT_HAS_BEEN_ADDED_TO_THE_CART,
        payload: message
    }
}

export const deleteAlertMessage = () => {
    return {
        type: DELETE_ALERT_MESSAGE
    }
}
