import {FULL_URL_PRODUCTS} from "./api-consts";
import {COUNT_ITEMS_ON_ONE_PAGE} from "./api-consts";

const getProducts = async (categoryFilter, currentPage= 1, limit= COUNT_ITEMS_ON_ONE_PAGE) => {
    const filterParameter = categoryFilter ? `?category=${categoryFilter}&` : '?'
    const products = await fetch(`${FULL_URL_PRODUCTS}${filterParameter}_page=${currentPage}&_limit=${limit}`)
    return await products.json()
}

const getOneProductById = async (idProduct) => {
    const response = await fetch(`${FULL_URL_PRODUCTS}${idProduct}`)
    return await response.json()
}

const getFilterProductsBySearch = async (searchStringValue) => {
    const response = await fetch(`${FULL_URL_PRODUCTS}?q=${searchStringValue}`)
    return await response.json()
}

export {getProducts, getOneProductById, getFilterProductsBySearch}