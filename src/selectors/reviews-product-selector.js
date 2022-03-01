class ReviewsProductSelector {
    static getReviewsProduct({reviewsProduct}){
        return reviewsProduct.productReviews
    }

    static getErrorMessage({reviewsProduct}){
        return reviewsProduct.error
    }

    static getLoadingStatus({reviewsProduct}){
        return reviewsProduct.isLoading
    }
}

export {ReviewsProductSelector}