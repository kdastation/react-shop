import {getProducts, getOneProductById} from "../service/api-service/api-products";
import {setProducts, setDefaultLoadingProducts} from "../redux/actions/products-actions";
import {setProductInformation} from "../redux/actions/product-actions";
import {getCountProductsConcreteCategory} from "../service/api-service/api-count-products";
import {setLoadingProduct} from "../redux/actions/product-actions";
//TODO: переписать документацию
/**
 * Получение всех продуктов и добавление их в state
 * 1) Устанавливаем флаг загрузки в true
 * 2) Получаем все продукты
 * 3) Добавляем их в state
 * @param categoryFilter
 * @param currentPage
 * @param dispatch - dispatch, полученный из redux
 */
const fetchProducts = async (categoryFilter, currentPage ,dispatch) => {
    dispatch(setDefaultLoadingProducts())
    const products = await getProducts(categoryFilter, currentPage)
    const countProductsConcreteCategory = await getCountProductsConcreteCategory(categoryFilter)
    return dispatch(setProducts(products, countProductsConcreteCategory))
}
/**
 * Получение информации конкретного продукта и добавление информации в state
 * @param idProduct - id продукта, по которому нужно получить информацию
 * @param dispatch
 */
const fetchInformationProduct = (idProduct, dispatch) => {
    dispatch(setLoadingProduct())
    getOneProductById(idProduct).then(product => {
        dispatch(setProductInformation(product))
    })
}




export {fetchProducts, fetchInformationProduct}