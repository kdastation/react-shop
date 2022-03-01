import './categories.css'
import CategoryItem from "../category-item/category-item";
import {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeSelectedCategory} from "../../redux/actions/products-actions";
import {ProductsSelector} from "../../selectors/products-selector";
import {CategoriesSelector} from "../../selectors/categories-selector";
import {fetchCategories} from "../../middlewares/categories-middleware";



const Categories = () => {

    const dispatch = useDispatch()
    const selectedCategory = useSelector(ProductsSelector.getSelectedCategory)
    const categoriesList = useSelector(CategoriesSelector.getCategories)

    const changeSelectedCategoryOnClick = (args) => {
        dispatch(changeSelectedCategory(args))
    }
    //TODO: ПЕРЕДАЛАТЬ
    useEffect(() => {
        if (!categoriesList.length){
            fetchCategories(dispatch)
        }
    },[])

    const renderCategoryList = categoriesList.length ? _renderCategoryList
                                                        (categoriesList,
                                                         selectedCategory,
                                                         changeSelectedCategoryOnClick) : <div>Loading..</div>

    return (
        <div className="categories-block">
            <CategoryItem selectedCategory={selectedCategory}
                          name={"Все"}
                          id={null}
                          callbackChangeSelectedCategoryOnClick={()=>changeSelectedCategoryOnClick(null)}
                          key="main-category"/>
            {renderCategoryList}
        </div>
    )


}

const _renderCategoryList = (categoryList, selectedCategory ,callback) => {
    return categoryList.map(category => {
        return <CategoryItem
                        selectedCategory={selectedCategory}
                        callbackChangeSelectedCategoryOnClick={callback}
                        key={`${category.id}_${category.name}`}
                        {...category}
                        />
    })
}

export default memo(Categories)