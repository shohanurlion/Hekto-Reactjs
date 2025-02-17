import { useContext } from "react";
import { ApiData } from "../../../ContextApi/ContextApi";
import HomeTitle from "../../../Components/HomeTitle/HomeTitle";
import TopCategoriesCart from "./TopCategoriesCart";


const TopCategories = () => {
    const trendproduct = useContext(ApiData);
  
    // Filter product data based on the category and select only the first 4 products
    const filterProducts = (category) => {
        return trendproduct
            .filter((product) => product.category === category)
            .slice(0, 4); // Select the first 4 products
    };
  return (
   <>
    <HomeTitle text="Top Categories"/>
    <TopCategoriesCart trendproduct={filterProducts('mobile-accessories')}></TopCategoriesCart>
   </>
  )
}

export default TopCategories