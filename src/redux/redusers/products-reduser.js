/**
 * items - список продуктов
 * isLoading - флаг загрузки
 * @type {{isLoading: boolean, items: *[]}}
 */
const initialState = {
    items: [],
    isLoading: true,
    selectedCategory: null,
    totalCountProducts: null,
    currentPage: 1,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_DEFAULT_LOADING_PRODUCTS":
            return {
                ...state,
                // items: [],
                isLoading: true,
            }
        case "SET_PRODUCTS":
            const receivedProducts = action.payload.products
            const totalCountProducts = action.payload.totalCountProducts
            return {
                ...state,
                items: receivedProducts,
                totalCountProducts: totalCountProducts,
                isLoading: false
            }
        case "CHANGE_NUMBER_PAGE":
            return {
                ...state,
                currentPage: action.payload
            }
        case "CHANGE_SELECTED_CATEGORY":
            const newSelectedCategory = action.payload
            return {
                ...state,
                selectedCategory: newSelectedCategory,
                currentPage: 1
            }
        default:
            return state
    }
}

export default productsReducer;