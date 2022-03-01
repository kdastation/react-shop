import './home-page.css'
//------------components---------------\\
import SearchProducts from "../../components/search-products/search-products";
import Catalog from "../../components/catalog/catalog";
//end---------components-------------end\\
import React from "react";
import {useDispatch} from "react-redux";
import Categories from "../../components/categories/categories";



const HomePage = () => {


    return (
        <div>
            <Categories  />
            <Catalog  />
        </div>
    )
}

export default HomePage;