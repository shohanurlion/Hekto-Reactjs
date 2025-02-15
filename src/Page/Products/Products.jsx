import React, { useContext } from 'react'
import { ApiData } from '../../ContextApi/ContextApi'
import FeatureCart from '../Home/Featuredproduct/FeatureCart';
const Products = () => {
  const alldata = useContext(ApiData);
  console.log(alldata);
  
  return (
    <>
    {
      alldata.map((item, i)=>(
        <div>
         <FeatureCart/>
        </div>
      ))
    }
    </>
  )
}

export default Products