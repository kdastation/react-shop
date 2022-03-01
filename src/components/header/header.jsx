import './header.css'

import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {CartSelector} from "../../selectors/cart-selector/cart-selector";
import {AlertSelector} from "../../selectors/cart-selector/alert-selector";
import Alert from "../alert/alert/alert";
import {deleteAlertMessage} from "../../redux/actions/cart-actions/alert-actions";
import React, {useCallback} from "react";
import SearchProducts from "../search-products/search-products";

const Header = () => {


    const dispatch = useDispatch()
    const totalPrice = useSelector(CartSelector.getTotalPrice)
    const countOfAddedGoods = useSelector(CartSelector.getCountOfAddedGoods)
    const alertMessage = useSelector(AlertSelector.getAlertMessage)

    const closeAlert = useCallback(() => {
        dispatch(deleteAlertMessage())
    },[])
    console.log("RERENDER HEADER")
    const alert = alertMessage.length ? <Alert alertMessage={alertMessage}  closeAlert={closeAlert} /> : null

    return (
        <div className="header-wrapper">
            <div className="header-block">
                <div className="header-logo">
                    <NavLink to="/"><img src="images/header-logo.jpg" alt=""/></NavLink>
                </div>
                <div className="header-search">
                    <SearchProducts />
                </div>
                <div className="number">
                    8 (812) 123-45-67
                </div>
                <div className="header-btn">
                    <button className="btn-send">Обратный звонок</button>
                </div>
                <div className="header-cart">
                    <div className="header-cart-total-price">
                        {totalPrice} ₽
                    </div>
                    <div className="header-cart-total-count">
                        <NavLink className="header-cart-link" to="/cart">
                            {countOfAddedGoods} шт.
                        </NavLink>
                    </div>
                </div>
                {alert}
            </div>
        </div>

    )
}




export default Header;


// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//                 aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         </button>
//         {alert}
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink to="/cart">Cart</NavLink>
//                 </li>
//             </ul>
//         </div>
//         <SearchProducts />
//         <div className="cart">
//             <p>Общая сумма заказа: {totalPrice}</p>
//             <p>Количество товаров в корзине : {countOfAddedGoods}</p>
//         </div>
//     </div>
// </nav>