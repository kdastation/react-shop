import {createCloneObject} from "../../../utils/utils";

const takeTheNecessaryActionAndReturnUpdateState = (oldAddedGoods, productInformation, action) => {
    const manager = new CartManager(oldAddedGoods, productInformation)
    let newAddedGoods;
    switch (action){
        case "ADD_ITEM_TO_CART":{
            newAddedGoods = manager.addProductInCart()
            break
        }
        case "REMOVE_ONE_PIECE_PRODUCT":{
            newAddedGoods = manager.removeOnePieceProductInCart()
            break
        }
        case "ADD_ONE_PIECE_PRODUCT":{
            newAddedGoods = manager.addOnePieceProductInCart()
        }
        default:
            break
    }
    const {
        totalSum: updateTotalPrice,
        totalCount: updateTotalCount
    } =  calculateTotalSumAllProductsAndTotalCount(newAddedGoods)
    return {
        addedGoods: newAddedGoods,
        totalPrice: updateTotalPrice,
        countOfAddedGoods: updateTotalCount
    }
}


const calculateTotalSumAllProductsAndTotalCount = (addedGoods) => {
    let totalSum = 0
    let totalCount = 0
    Object.keys(addedGoods).forEach(productName => {
        const product = addedGoods[productName]
        const quantityOfOneProduct = product.quantity
        totalSum += product.price * quantityOfOneProduct
        totalCount += quantityOfOneProduct
    })
    return {totalCount, totalSum}
}

class CartManager{

    _ONE_PIECE_PRODUCT = 1 // Значение, на которое нужно увеличивать/уменьшать количество товара
    _VALUE_AT_WHICH_TO_DELETE = 1 // Значение, при котором нужно удалять товар


    /**
     *
     * @param addedGoods - Все добавленные товары
     * @param productData - Данные товара, которые нужно обработать.
     */
    constructor(addedGoods, productData) {
        this.productData = productData
        this.productName = this.productData.name
        this.addedGoods = addedGoods
        this.product = this.addedGoods[this.productName] //TODO: Передалать
    }

    /**
     * Добавление товара в коризнину
     * 1) Проверяем есть ли товар в корзине
     * 2) Если товар есть, то увеличиваем его количество и возвращаем обновленные товары
     * 3) В обратном же случае создаем новую запись продукта и возвращаем обновленные товары
     * @returns {Object}
     */
    addProductInCart = () => {
        const isThereAnItemInTheCart = this.product !== undefined

        if (isThereAnItemInTheCart){
           return this.addOnePieceProductInCart()
        }else {
            const newProduct = this._createNewProduct()
            return this._updateAddedGoods(newProduct)
        }
    }

    /**
     * Удаление одной единицы товара из корзины
     * 1) обновляем количество
     * 2.1) Если обновленное количество меньше критического значения, то удаляем товар из корзины и возвращаем
     * обновленную корзину
     * 2.2) В обратном же случае обновляем необходимые данные и возвращаем обновленную корзину
     * @returns {any}
     */
    removeOnePieceProductInCart = () => {
        const updateQuantityProduct = this._decrementTheAmountOfProduct()
        if (updateQuantityProduct < this._VALUE_AT_WHICH_TO_DELETE ) {
            return this.deleteProductInCart()
        }
        const updateTotalPrice = this._calculateTotalPriceProduct(this.product.price, updateQuantityProduct)
        const updateProduct = this._updateProductData(updateTotalPrice, updateQuantityProduct)
        return this._updateAddedGoods(updateProduct)
    }

    addOnePieceProductInCart = () => {
        const updateQuantityProduct = this._increaseTheAmountOfProduct()
        const updateTotalPrice = this._calculateTotalPriceProduct(this.product.price, updateQuantityProduct)
        const updateProduct = this._updateProductData(updateTotalPrice, updateQuantityProduct)
        return this._updateAddedGoods(updateProduct)
    }

    deleteProductInCart = () => {
        const newAddedGoods = createCloneObject(this.addedGoods)
        delete newAddedGoods[this.productName]
        return newAddedGoods
    }

    _createNewProduct = () => {
        return {
            ...this.productData,
            quantity: 1,
            totalPriceProduct: this.productData.price
        }
    }

    _updateProductData = (newTotalPriceProduct, newQuantityProduct) => {
        const newProduct = createCloneObject(this.productData)
        newProduct.totalPriceProduct = newTotalPriceProduct
        newProduct.quantity = newQuantityProduct
        return newProduct
    }

    _calculateTotalPriceProduct = (productPrice, quantityProduct) => {
        return productPrice * quantityProduct
    }

    _decrementTheAmountOfProduct = () => {
        return this.product.quantity - this._ONE_PIECE_PRODUCT
    }

    _increaseTheAmountOfProduct = () => {
        return this.product.quantity + this._ONE_PIECE_PRODUCT
    }

    _updateAddedGoods = (productData) => {
        const newAddedGoods = createCloneObject(this.addedGoods)
        newAddedGoods[this.productName] = {
            ...this.product,
            ...productData
        }
        return newAddedGoods
    }
}

export {takeTheNecessaryActionAndReturnUpdateState}