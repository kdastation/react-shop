import './catalog.css'
import {useDispatch, useSelector} from "react-redux";
import {ProductsSelector} from "../../selectors/products-selector";
import {useEffect, useRef} from "react";
import {fetchProducts} from "../../middlewares/products-middleware";
import Loading from "../loading/loading";
import {renderProductsItem} from "./service-catalog/service-home-page";
import Pagination from "../pagination/pagination";
import ProductItemHomePage from "../product-item/layout-product-item/product-item-home-page/product-item-home-page";

const Catalog = () => {

    const dispatch = useDispatch()
    const products = useSelector(ProductsSelector.getProducts)
    const isLoading = useSelector(ProductsSelector.getLoadingStatusProducts)
    const selectedCategory = useSelector(ProductsSelector.getSelectedCategory)
    const totalCountsProducts =  useSelector(ProductsSelector.getTotalCountProducts)
    const currentPage = useSelector(ProductsSelector.getCurrentPage)
    const hasData = useRef(false) //TODO: ПЕРЕИМЕНОВАТЬ

    useEffect(() => {
        if (products.length){
            hasData.current = true
        }
    },[])
    //TODO: переделать
    useEffect(() => {
        if (!hasData.current){
            fetchProducts(selectedCategory, currentPage, dispatch)
            console.log("DATA RECEVIED")
        }
        hasData.current = false
    },[selectedCategory, currentPage])


    const loading = isLoading ? <Loading/> : null
    const renderedProducts = !isLoading ? renderProductsItem(products, ProductItemHomePage) : null
    const pagination = !isLoading && <Pagination
                    totalCountItems={totalCountsProducts}
                    currentPage={currentPage}
                    />

    return (
        <div>
            <div className="products-block">
                {renderedProducts}
                {loading}
            </div>
            {pagination}
        </div>
    )
}

export default Catalog

