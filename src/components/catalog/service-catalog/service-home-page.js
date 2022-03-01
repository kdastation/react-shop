import ProductItem from "../../product-item/product-item";
import React from "react";


/**
 * Отрендерить продукты
 * @param productsData - Данные продуктов
 * @param dispatch
 * @returns {Array} - Отрендеренный список продуктов
 * @private
 **/
const renderProductsItem = (productsData, Component) => {

    const listProductsItem = productsData.map(product => {
        return <ProductItem key={product.id}
                            {...product}
                            Component={Component}
                            />
    })
    return listProductsItem
}

export {renderProductsItem}