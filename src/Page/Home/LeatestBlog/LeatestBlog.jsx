import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from '../../../Container/Container';
import LeatestCart from './LeatestCart';
import HomeTitle from '../../../Components/HomeTitle/HomeTitle';

const LeatestBlog = () => {
  const [allproduct, setAllProduct] = useState([]);
      // Fetch data from API
  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then((res) => {
        setAllProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(allproduct);
  
  return (
    <>
    <Container>
    <HomeTitle text="Leatest Blog"></HomeTitle>
    <LeatestCart allproduct={allproduct}></LeatestCart>
    </Container>
    </>
    
  )
}

export default LeatestBlog