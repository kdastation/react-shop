const ReviewItem = (props) => {

    const {author, review } = props

    return (
        <div className="review-item">
            <p>{author}</p>
            <p>{review}</p>
        </div>
    )
}

export default ReviewItem;