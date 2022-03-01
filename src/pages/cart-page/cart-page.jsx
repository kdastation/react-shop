import './cart-page.css'
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../../components/cart-item/cart-item";
import {CartSelector} from "../../selectors/cart-selector/cart-selector";


const CartPage = () => {

    const addedGoods = useSelector(CartSelector.getAllAddedGoods)
    const totalPrice = useSelector(CartSelector.getTotalPrice)
    const countOfAddedGoods = useSelector(CartSelector.getCountOfAddedGoods)
    const dispatch = useDispatch()

    const renderCartItem = _renderCartItem(addedGoods, dispatch)

    return (
        <div>
            <h2>Корзина</h2>
            <div className="cart-block">
                {renderCartItem}
                <div className="information-order-block">
                    <div className="total-price">
                       Общая сумма заказа: {totalPrice}
                    </div>
                    <div className="total-count">
                      Количество товаров: {countOfAddedGoods}
                    </div>
                    <div className="pay-for-the-order">
                        <button className="pay-btn">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _renderCartItem = (addedGoods, dispatch) => {
    return Object.keys(addedGoods).map(productName => {
        return <CartItem
            key={addedGoods[productName].name}
            dispatch={dispatch}
            {...addedGoods[productName]} />
    })
}


export default CartPage;