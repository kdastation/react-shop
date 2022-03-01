const setProducts = (products, totalCountProducts) => {
    return {
        type: 'SET_PRODUCTS',
        payload: {
            products,
            totalCountProducts
        }
    }
}

const setDefaultLoadingProducts = () => {
    return {
        type: 'SET_DEFAULT_LOADING_PRODUCTS',
    }
}

const changeNumberPage = (numberPage) => {
    return {
        type:"CHANGE_NUMBER_PAGE",
        payload: numberPage
    }
}

const  changeSelectedCategory = (newSelectedCategory) => {
    return {
        type: "CHANGE_SELECTED_CATEGORY",
        payload: newSelectedCategory
    }
}

export {setProducts,
    setDefaultLoadingProducts,
    changeNumberPage,
    changeSelectedCategory,
}