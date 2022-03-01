import ReviewItem from "../review-item/review-item";
import {useEffect} from "react";
import {fetchReviewsProduct} from "../../middlewares/reviews-middleware";
import {useDispatch, useSelector} from "react-redux";
import {ReviewsProductSelector} from "../../selectors/reviews-product-selector";

const ReviewsList = (props) => {

    const {idProduct} = props
    const dispatch = useDispatch()

    const productReviews = useSelector(ReviewsProductSelector.getReviewsProduct)
    const errorMessage = useSelector(ReviewsProductSelector.getErrorMessage)
    const isLoading = useSelector(ReviewsProductSelector.getLoadingStatus)

    useEffect(() => {

        fetchReviewsProduct(idProduct, dispatch)

    },[idProduct])

    const success = !(errorMessage || isLoading)
    const error = errorMessage ? <h2>{errorMessage}</h2> : null
    const loading = isLoading ? <h2>Loading...</h2> : null
    const renderReviewsProduct = success ? _renderReviewItem(productReviews) : null

    return (
        <div>
            {error}
            {loading}
            {renderReviewsProduct}
        </div>
    )
}

const _renderReviewItem = (reviewsProduct) => {
    return reviewsProduct.map((review,index) => {
        return <ReviewItem  key={`${review.author}_${index}`}
                            {...review} />
    })
}

export default ReviewsList;