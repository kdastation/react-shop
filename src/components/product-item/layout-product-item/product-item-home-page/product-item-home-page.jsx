import {NavLink} from "react-router-dom";

const ProductItemHomePage = (props) => {
    const {id, name, price, addItemToCartByClick, imageUrl} = props

    return (
        <div className="product-item">
            <div className="product-item-img">
                <NavLink to={`/product/${id}`}><img src={imageUrl} alt=""/></NavLink>
            </div>
            <h3 className="product-item-name">
                {name}
            </h3>
            <div className="product-item-text">
                Салями, картофель и морковь, огурцы
                маринованные, моцарелла, цыпленок,
                ветчина и французский соус
            </div>
            <div className="product-item-footer">
                <div className="product-item-footer-price">
                    {price}Rub.
                </div>
                <div className="product-item-footer-btn">
                    <button onClick={addItemToCartByClick} className="product-btn">Добавить в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItemHomePage