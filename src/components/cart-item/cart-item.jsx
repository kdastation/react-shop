import './cart-item.css'
import {removeOnePieceProduct, addOnePieceProduct} from "../../redux/actions/cart-actions/cart-actions";
import CircleWithAPlus from "../circle-with-a-plus/circle-with-a-plus";
import CircleWithAMinus from "../circle-with-a-minus/circle-with-a-minus";

const CartItem = (props) => {

    const {
        imageUrl,
        name,
        price,
        quantity,
        totalPriceProduct,
        dispatch} = props

    const removeOnePieceOfProductOnClick = () => {
        dispatch(removeOnePieceProduct({name}))
    }

    const addOnePieceProductOnClick = () => {
        dispatch(addOnePieceProduct({name}))
    }

    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img className=""
                     src={imageUrl}
                     alt={name}/>
            </div>
            <div className="cart-item-title">
                {name}
            </div>
            <div className="cart-item-count">
                <CircleWithAMinus removeOnePieceOfProductOnClick={removeOnePieceOfProductOnClick} />
                <div className="cart-item-count-value">{quantity}</div>
                <CircleWithAPlus addOnePieceProductOnClick={addOnePieceProductOnClick} />
            </div>
            <div className="cart-item-price">
                {totalPriceProduct} ₽
            </div>
        </div>
    )
}

export default CartItem;

