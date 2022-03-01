import {
    takeTheNecessaryActionAndReturnUpdateState,
} from "./service-cart-reducer";

const INITIAL_PRICE_VALUE = 0
const INITIAL_COUNT_OF_ADDED_GOODS = 0

const initialState = {
    addedGoods: {},
    totalPrice: INITIAL_PRICE_VALUE,
    countOfAddedGoods: INITIAL_COUNT_OF_ADDED_GOODS,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_ITEM_TO_CART":{
            const productData = action.payload
            const updateState = takeTheNecessaryActionAndReturnUpdateState(state.addedGoods,
                                                                            productData,
                                                                        "ADD_ITEM_TO_CART")
            return {
                ...state,
                ...updateState,
            }
        }
        case "REMOVE_ONE_PIECE_PRODUCT": {
            const productData = action.payload
            const updateState = takeTheNecessaryActionAndReturnUpdateState(state.addedGoods,
                                                                            productData,
                                                                    "REMOVE_ONE_PIECE_PRODUCT")
            return {
                ...state,
                ...updateState,
            }
        }
        case "ADD_ONE_PIECE_PRODUCT":{
            const productData = action.payload
            const updateState = takeTheNecessaryActionAndReturnUpdateState(state.addedGoods,
                                                                            productData,
                                                                    "ADD_ONE_PIECE_PRODUCT")
            return {
                ...state,
                ...updateState,
            }
        }
        default:
            return state
    }
}

export default cartReducer;