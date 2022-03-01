class ProductsSelector{
    static getProducts({products}){
        return products.items
    }

   static getLoadingStatusProducts({products}){
       return products.isLoading
    }

    static getTotalCountProducts({products}){
        return products.totalCountProducts
    }

    static getCurrentPage({products}){
        return products.currentPage
    }

    static getSelectedCategory({products}){
        return products.selectedCategory
    }

    static getNumberOfProductsPerPage({products}){
        return products.numberOfProductsPerPage
    }
}

export {ProductsSelector}