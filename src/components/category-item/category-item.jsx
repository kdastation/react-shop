import  './category-item.css'

const CategoryItem = (props) => {

    const {id, name, callbackChangeSelectedCategoryOnClick, selectedCategory } = props

    const changeSelectedCategoryOnClick = () => {
        callbackChangeSelectedCategoryOnClick(id)
    }

    return (
        <div>
            <button onClick={changeSelectedCategoryOnClick}
                    className={selectedCategory===id ? "selected-category" : "category-btn"}>
                {name}
            </button>
        </div>
    )

}

export default CategoryItem