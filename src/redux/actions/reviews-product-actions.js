export const setProductReviews = (reviewsProduct) => {
    return {
        type: "SET_PRODUCT_REVIEWS",
        payload: reviewsProduct
    }
}

export const setLoadingProductReviews = () => {
    return {
        type: "SET_LOADING_PRODUCT_REVIEWS"
    }
}

export const addReviewProduct = (newReview) => {
    return {
        type: "ADD_REVIEW_PRODUCT",
        payload: newReview
    }
}

export const setErrorProductReviews = (messageError) => {
    return {
        type: "SET_ERROR_PRODUCT_REVIEWS",
        payload: messageError
    }
}
