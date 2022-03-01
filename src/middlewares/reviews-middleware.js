import {
    addReviewProduct,
    setLoadingProductReviews,
    setProductReviews,
    setErrorProductReviews
} from "../redux/actions/reviews-product-actions";
import {createReviewProduct, getReviewsProductById} from "../service/api-service/api-reviews";

/**
 * Получение отзывов конкретного продукта и добавление их в state
 * @param idProduct - id продукта, для которого нужно получить отзывы
 * @param dispatch
 */
const fetchReviewsProduct = async (idProduct, dispatch) => {

    dispatch(setLoadingProductReviews())
    try {
        const productsReviews = await getReviewsProductById(idProduct)
        dispatch(setProductReviews(productsReviews))
    } catch (error) {
        dispatch(setErrorProductReviews(error.message))
    }
}


const addReview = async (reviewProductData, dispatch) => {
    const productId = reviewProductData.productId
    const newReview = await createReviewProduct(reviewProductData)
    const response = await fetchReviewsProduct(productId, dispatch)
    return "Отзыв успешно добавлен"
}


export {fetchReviewsProduct, addReview}