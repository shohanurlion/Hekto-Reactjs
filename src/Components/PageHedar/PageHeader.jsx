import React from 'react'
import Container from '../../Container/Container'

const PageHeader = ({HeaderText,PageName}) => {
  return (
<div className="bg-[#F6F5FF] py-16">
    <Container>
    <div className="">
      <h1 className="text-2xl font-bold text-gray-900">{HeaderText}</h1>
      <p className="text-gray-600 text-sm mt-2">
        Home <span className="text-gray-500">·</span> Pages <span className="text-gray-500">·</span> 
        <span className="text-pink-500 font-medium">{PageName}</span>
      </p>
    </div>
    </Container> 
  </div>
  
  )
}

export default PageHeader