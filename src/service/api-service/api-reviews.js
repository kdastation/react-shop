import axios from "axios";
import {MAIN_URL_ADDRESS, URL_REVIEWS, FILTER_PARAMETER, LIST_WHEN_REVIEWS_ARE_NOT_FOUND} from "./api-consts";



const api = axios.create({
    baseURL: MAIN_URL_ADDRESS
})



//TODO: Обработать ошибки
const getReviewsProductById = async (idProduct) => {
    const response = await fetch(`${MAIN_URL_ADDRESS}${URL_REVIEWS}?${FILTER_PARAMETER}${idProduct}`)
    const reviews =  await response.json()
    if (!reviews.length){
        throw Error("REVIEWS_NOT_FOUND")
    }
    return reviews

}


const createReviewProduct = async (reviewData) => {
    const request = reviewData
    const response = await api.post('/reviews', request)
    return  await response.data
}


export {getReviewsProductById, createReviewProduct}
