class CartSelector{

    static getTotalPrice({cart}){
        return cart.totalPrice
    }

    static getCountOfAddedGoods({cart}){
        return cart.countOfAddedGoods
    }

    static getAllAddedGoods({cart}){
        return cart.addedGoods
    }
}

export {CartSelector}