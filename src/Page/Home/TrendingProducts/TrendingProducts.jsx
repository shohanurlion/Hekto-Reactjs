import React, { useContext } from 'react'
import TrendingProCart from './TrendingProCart'
import { ApiData } from '../../../ContextApi/ContextApi'
import HomeTitle from '../../../Components/HomeTitle/HomeTitle';

const TrendingProducts = () => {
    const trendproduct = useContext(ApiData);
  
    // Filter product data based on the category and select only the first 4 products
    const filterProducts = (category) => {
        return trendproduct
            .filter((product) => product.category === category)
            .slice(0, 4); // Select the first 4 products
    };
  
    return (
        <>
            <HomeTitle text="Trending Products"/>
            <TrendingProCart trendproduct={filterProducts('womens-shoes')}></TrendingProCart>
        </>
    )
}

export default TrendingProducts;
