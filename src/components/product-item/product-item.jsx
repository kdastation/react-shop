import './product-item.css'
import {addProductInCart} from "../../redux/actions/cart-actions/cart-actions";
import {alertTheUserThatTheProductHasBeenAddedToTheCart} from "../../redux/actions/cart-actions/alert-actions";
import {useDispatch} from "react-redux";


const ProductItem = (props) => {

    const {id, imageUrl, name, price, Component} = props
    const dispatch = useDispatch()

    const addItemToCartByClick = () => {
        dispatch(addProductInCart({
            name,
            price,
            imageUrl
        }))
        dispatch(alertTheUserThatTheProductHasBeenAddedToTheCart(`Товар ${name} был добавлен в корзину`))
    }
    //TODO: Переделать как - то(NavLink)
    return (

        <Component           id={id}
                             imageUrl={imageUrl}
                             name={name}
                             price={price}
                             addItemToCartByClick={addItemToCartByClick}
        />

    )
}

export default ProductItem;
