import {MAIN_URL_ADDRESS, URL_COUNT_PRODUCTS} from "./api-consts";

//TODO: убрать безобразие
export const getCountProductsConcreteCategory = async (categoryId) => {
    if (categoryId){
        const response = await fetch(`${MAIN_URL_ADDRESS}${URL_COUNT_PRODUCTS}?idCategory=${categoryId}`)
        const responseJson =  await response.json()
        return responseJson[0].countProductsCategory
    }else{
        const response = await fetch(`${MAIN_URL_ADDRESS}${URL_COUNT_PRODUCTS}`)
        const responseJson = await response.json()
        console.log(responseJson[3].totalCountProducts)
        return responseJson[3].totalCountProducts
    }

}