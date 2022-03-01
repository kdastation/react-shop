import './search-products.css'
import {memo, useCallback, useEffect, useState} from "react";
import {getFilterProductsBySearch} from "../../service/api-service/api-products";
import {Link} from "react-router-dom";
import {useDebounce} from "../../hooks/useDebounce";

//TODO: Доделать
const SearchProducts = () => {
    const [searchLine, setSearchLine] = useState('')
    const [foundProducts, setFoundProducts] = useState([])
    const hasProduct = foundProducts.length > 0

    const findProductsAndSaveThem = useDebounce((value) => {
        getFilterProductsBySearch(value)
        .then(products => setFoundProducts(products))
    }, 400)

    const handleSearchLine = useCallback ((event) => {
        const value = event.target.value
        setSearchLine(value)
    },[])

    console.log("RENDER SEARCH PRODUCTS")

    useEffect(() => {
        const isSearchLineValue = searchLine.length > 0
        if (!isSearchLineValue){
            setFoundProducts([])
        } else{
            findProductsAndSaveThem(searchLine)
        }
    },[searchLine])

    const renderFoundProducts = hasProduct ? _renderFoundProducts(foundProducts) : null

    return (
        <div className="search-products">
            <form className="search-form">
                <input
                    placeholder="search"
                    className="search-input"
                    value={searchLine}
                    onChange={handleSearchLine}
                    type="text"/>
                {hasProduct && <ul className="autocomplete">
                    {renderFoundProducts}
                </ul>}
            </form>
        </div>
    )
}


/**
 *
 * @param foundProducts{Array}
 * @private
 */
const _renderFoundProducts = (foundProducts) => {
    return foundProducts.map(product => {
        const {name, id, imageUrl, price} = product
        return (
            <li className="search-item" key={`${name}_${id}`}>
                <img className="search-img" src={imageUrl} alt=""/>
                <Link className="search-item-link" to={`/product/${id}`}>{name}</Link>
                <div className="search-item-price">{price} ₽</div>
            </li>
        )
    })
}

export default  memo(SearchProducts)