import {MAIN_URL_ADDRESS, URL_CATEGORIES} from "./api-consts";

export const getCategories = async () => {
    const response = await fetch(`${MAIN_URL_ADDRESS}${URL_CATEGORIES}`)
    return await response.json()
}

