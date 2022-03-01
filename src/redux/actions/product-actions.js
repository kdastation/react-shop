
export const setProductInformation = (informationProduct) => {
    return {
        type: 'SET_PRODUCT_INFORMATION',
        payload: informationProduct
    }
}

export const setLoadingProduct = () => {
    return {
        type: "SET_LOADING_PRODUCT",
    }
}

