import './product-item-product-page.css'

const ProductItemProductPage = (props) => {

    const {id, name, price, addItemToCartByClick, imageUrl} = props

    return (
        <div className="product-page-wrapper">
            <div className="product-page-block">
                <div className="product-page-img">
                    <img
                        src={imageUrl}
                        alt=""/>
                </div>
                <div className="product-page-description">
                    <div className="product-page-name">
                        {name}
                    </div>
                    <div className="product-page-code">
                        Код товара: {id}
                    </div>
                    <div className="product-page-characteristic">
                        <div className="name-characteristic">
                            Характеристика
                        </div>
                        <div className="product-page-characteristic-content">
                            <div className="product-page-characteristic-content-item">
                                <div className="product-page-characteristic-content-item-name">
                                    Цена
                                </div>
                                <div className="product-page-characteristic-content-item-text">
                                    {price}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-page-btn">
                        <button onClick={addItemToCartByClick} className="order-btn">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemProductPage