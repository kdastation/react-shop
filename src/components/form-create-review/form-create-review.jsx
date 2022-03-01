import {useCallback, useState} from "react";
import {addReview} from "../../middlewares/reviews-middleware";
import {memo} from "react";
import Alert from "../alert/alert/alert";


//TODO: все переделать
const FormCreateReview = (props) => {

    const {idProduct, dispatch} = props
    const [author, setAuthor] = useState('')
    const [reviewContent, setReviewContent] = useState('')
    const [feedbackErrorOrSuccessMessages, setFeedbackErrorOrSuccessMessages] = useState('')

    const isValidFormCreateReview =  () => {
        if (author.length < 5){
            setFeedbackErrorOrSuccessMessages('Укажите корректное имя')
            return false
        }
        if (reviewContent.length < 10){
            setFeedbackErrorOrSuccessMessages('Ваш отзыв слишком короткий')
            return false
        }

        return true
    }

    const closeAlert = () => {
        setFeedbackErrorOrSuccessMessages('')
    }

    const handleChangeReviewContent = (event) => {
       setReviewContent(event.target.value)
    }

    const handleChangeReviewAuthor = (event) => {
       setAuthor(event.target.value)
    }

    const addReviewOnClick = (event) => {
        if (isValidFormCreateReview()){
            addReview({
                review: reviewContent,
                productId: idProduct,
                author,
            }, dispatch)
            .then(message => setFeedbackErrorOrSuccessMessages(message))
        }

    }

    const alertUser = feedbackErrorOrSuccessMessages.length ? <Alert
                                                                closeAlert={closeAlert}
                                                                alertMessage={feedbackErrorOrSuccessMessages} /> : null

    return  (

        <div className="form-reviews">
            <h4>Form Create Review...</h4>
            {alertUser}
            <input
                value={author}
                onChange={handleChangeReviewAuthor}
                type="text"/>
            <textarea
                value={reviewContent}
                onChange={handleChangeReviewContent}
                name=""
                id=""
                cols="30"
                rows="10">фывфывфвф</textarea>
            <button onClick={addReviewOnClick} >Добавить отзыв</button>
        </div>
    )

}

export default memo(FormCreateReview)










