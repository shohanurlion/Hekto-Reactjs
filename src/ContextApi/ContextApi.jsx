import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
const ApiData = createContext()
const ContextApi = ({children}) => {
    const [info, setinfo]=useState([]);
    const getData =()=>{
        axios.get('https://dummyjson.com/products?limit=0&sortBy=title&skip=5').then((res)=>{
            setinfo(res.data.products);
        })
    }
    useEffect(()=>{                                                                                    
        getData()
    },[setinfo])
  return (
    <ApiData.Provider value={info}>
            {children}
    </ApiData.Provider>
  )
}

export {ContextApi,ApiData}