const addProductInCart = (objectProduct) => {
    return {
        type: "ADD_ITEM_TO_CART",
        payload: objectProduct
    }
}

const removeOnePieceProduct = (nameProduct) => {
    return {
        type: "REMOVE_ONE_PIECE_PRODUCT",
        payload: nameProduct
    }
}

const addOnePieceProduct = (nameProduct) => {
    return {
        type: "ADD_ONE_PIECE_PRODUCT",
        payload: nameProduct
    }
}

export {addProductInCart, removeOnePieceProduct, addOnePieceProduct}