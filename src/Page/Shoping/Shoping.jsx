import React, { useContext, useEffect, useState } from 'react';
import { ApiData } from '../../ContextApi/ContextApi';
import ShopingCart from './ShopingCart';
import Container from '../../Container/Container';
import Pagination from '../../Components/Pagination/Pagination';

const Shoping = () => {
  const productData = useContext(ApiData);
  const [categorys , setcategorys]=useState([]);
  const [cateFilter , setcateFilter]=useState([]);
  const [catebarnd ,setcatebarnd]=useState([]);
  const [brnadFilters , setbrnadFilters]=useState([]);
  const [currentpage, setcurrentpage]=useState(1);
  const [perpage ,setperpage]=useState(13);
  const lastpage = currentpage *perpage
  const firstpage = lastpage - perpage
  const allpage = productData.slice(firstpage , lastpage)
  const pageNumber = [];
  for(let i = 0; i < productData.length/perpage; i++){
     pageNumber.push(i)
  }
  const pagehandel =(pageNumber)=>{
    setcurrentpage(pageNumber + 1);
  }
  const next =()=>{
    if(currentpage < pageNumber.length){
      setcurrentpage((state)=> state + 1)
    }
  }  
  const prev =()=>{
    if(currentpage > 1){
      setcurrentpage((state)=> state - 1)
    }
  };
  useEffect(()=>{
    setcategorys([...new Set(productData.map((items)=> items.category))]);
    setcatebarnd([...new Set(productData.map((items)=> items.brand))])
  },[productData]);

  const handlecategory = (bitem) =>{
    const categoryFilte = productData.filter((itemss)=> itemss.category == bitem)
    setcateFilter(categoryFilte);
};
const handelbrand = (citem) =>{
  const brandeFilte = productData.filter((itemss)=> itemss.brand == citem)
  setbrnadFilters(brandeFilte);
}
const handleallproduct = () =>{
  setcateFilter("")
  setbrnadFilters("")
  
 }
  return (
    <Container>
      <div className="shopping-page mt-[100px]" style={{ display: 'flex', gap: '20px' }}>
      
      {/* ===== Left Sidebar - Filters ===== */}
      <div className="filters" style={{ width: '20%', background: '#f9f9f9', padding: '20px' }}>
        <h3 style={{ marginBottom: '10px' }}>Product Brand</h3>
        <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
        <li onClick={handleallproduct}><label><input type="checkbox" />All Prodact</label></li>
          {catebarnd.map((pitem)=>(
               <li onClick={()=>handelbrand(pitem)}><label><input type="checkbox" />{pitem}</label></li>
            ))}
        </ul>

        <h3 style={{ marginBottom: '10px' }}>Discount Offer</h3>
        <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
          <li><label><input type="checkbox" /> 20% Off</label></li>
          <li><label><input type="checkbox" /> 30% Off</label></li>
          <li><label><input type="checkbox" /> 40% Off</label></li>
          <li><label><input type="checkbox" /> 50% Off</label></li>
        </ul>

        <h3 style={{ marginBottom: '10px' }}>Rating Item</h3>
        <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
          <li><label><input type="checkbox" /> ⭐⭐⭐⭐⭐</label></li>
          <li><label><input type="checkbox" /> ⭐⭐⭐⭐</label></li>
          <li><label><input type="checkbox" /> ⭐⭐⭐</label></li>
        </ul>

        <h3 style={{ marginBottom: '10px' }}>Categories</h3>
        <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
        <li onClick={handleallproduct}><label><input type="checkbox" />All Prodact</label></li>
        {categorys.map((citem)=>(
                <li onClick={()=>handlecategory(citem)}><label><input type="checkbox" />{citem}</label></li>
            ))}
        </ul>

        <h3 style={{ marginBottom: '10px' }}>Price Filter</h3>
        <ul style={{ listStyle: 'none' }}>
          <li><label><input type="checkbox" /> $10 - $30</label></li>
          <li><label><input type="checkbox" /> $30 - $50</label></li>
          <li><label><input type="checkbox" /> $50 - $100</label></li>
          <li><label><input type="checkbox" /> $100 - $200</label></li>
          <li><label><input type="checkbox" /> $200 - $300</label></li>
        </ul>
      </div>
      
      {/* ===== Right Section - Product Listing ===== */}
      <div className="product-list" style={{ width: '80%' }}>
        {/* Map through the data from context */}
          <ShopingCart allpage={allpage} cateFilter={cateFilter} brnadFilters={brnadFilters}/>
      </div>
    </div>
    <div>
      <Pagination pageNumber={pageNumber} pagehandel={pagehandel} next={next} prev={prev}/>
    </div>
    </Container>
  );
};

export default Shoping;
