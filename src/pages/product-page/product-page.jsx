import './product-page.css'
import CardProduct from "../../components/card-product/card-product";
import ReviewsList from "../../components/reviews-list/reviews-list";
import FormCreateReview from "../../components/form-create-review/form-create-review";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";



/**
 * Страница конкретного продукта
 * @returns {JSX.Element}
 * @constructor
 */
const ProductPage = () => {
    const [isShowReviewsProduct, setIsShowReviewsProduct] = useState(false)
    const {idProduct} = useParams()
    const dispatch = useDispatch()

    const toggleIsShowReviewsProduct = () => {
        setIsShowReviewsProduct(!isShowReviewsProduct)
    }

    console.log("RENDERD PRODUCT,")
    const reviewsList = isShowReviewsProduct ? <ReviewsList idProduct={idProduct} /> : null

    return (
        <div>
            <h2>Page Product</h2>
            <CardProduct idProduct={idProduct} dispatch={dispatch}/>
            <FormCreateReview idProduct={idProduct}
                              dispatch={dispatch}/>
            <div className="reviews">
                <button onClick={toggleIsShowReviewsProduct}>
                    Показать отзывы
                </button>
                {reviewsList}
            </div>
        </div>
    )
}

export default ProductPage;


