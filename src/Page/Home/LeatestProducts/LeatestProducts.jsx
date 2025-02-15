import React, { useContext } from 'react'
import HomeTitle from '../../../Components/HomeTitle/HomeTitle'
import LeatestProductMenu from './LeatestProductMenu'
import { ApiData } from '../../../ContextApi/ContextApi'

const LeatestProducts = () => {
    const productdata = useContext(ApiData);
  return (
    <section>
        <HomeTitle text="Leatest Products"/>
        <LeatestProductMenu productdata={productdata}></LeatestProductMenu>
    </section>
  )
}

export default LeatestProducts