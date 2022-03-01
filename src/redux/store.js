import {createStore, combineReducers} from "redux";
import productsReducer from "./redusers/products-reduser";
import cartReducer from "./redusers/cart-reducer/cart-reduser";
import productReducer from "./redusers/product-reducer/product-reducer";
import reviewsProductReducer from "./redusers/reviews-product-reducer/reviews-product-reducer";
import categoriesReducer from "./redusers/categories-reducer/categories-reducer";
import alertReducer from "./redusers/cart-reducer/alert-reducer/alert-reducer";


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    product: productReducer,
    reviewsProduct: reviewsProductReducer,
    categories: categoriesReducer,
    alert: alertReducer,
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export {store}