import {getCategories} from "../service/api-service/api-categories";
import {setCategories, setLoadingCategories} from "../redux/actions/categories-actions";


export const fetchCategories = (dispatch) => {
    dispatch(setLoadingCategories())
    getCategories()
    .then(categories => {
        dispatch(setCategories(categories))
    })
}

