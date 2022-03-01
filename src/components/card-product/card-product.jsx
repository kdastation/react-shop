import ProductItem from "../product-item/product-item";
import {memo, useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchInformationProduct} from "../../middlewares/products-middleware";
import {ProductSelector} from "../../selectors/product-selector";
import ProductItemProductPage
    from "../product-item/layout-product-item/product-item-product-page/product-item-product-page";

const CardProduct = (props) => {
    const {idProduct, dispatch} = props
    const productInformation = useSelector(ProductSelector.getInformationOneProduct)
    const isLoading = useSelector(ProductSelector.getLoadingStatus)

    useEffect(() => {
        fetchInformationProduct(idProduct, dispatch)
    },[])

    const product = !isLoading ? <ProductItem {...productInformation}
                                                  Component={ProductItemProductPage}
    /> : <h4>Loading...</h4>
    return (
        <div>
            <h2>Карточка товара!</h2>
            {product}
        </div>
    )

}

export default memo(CardProduct)