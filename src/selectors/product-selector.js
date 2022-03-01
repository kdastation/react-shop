class ProductSelector{

    static getInformationOneProduct({product}){
        return product.productInformation
    }

    static getLoadingStatus({product}){
        return product.isLoading
    }
}

export {ProductSelector}