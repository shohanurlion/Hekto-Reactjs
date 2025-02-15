import Container from "../../Container/Container"
import { useContext } from "react"
import { ApiData } from "../../ContextApi/ContextApi"
import HomeTitle from "../../Components/HomeTitle/HomeTitle"

const Relatedcard = () => {
  const relatedproduct = useContext(ApiData)
  return (
    <>
    <Container>
    <div>
        <HomeTitle text="Related Products"/>
    </div>
    <div className='container flex justify-between flex-w'>
    {relatedproduct.slice(0, 4).map((item)=>(
  <div key={item.id} className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
   {/* Product Image */}
   <img
     src={item.thumbnail}
     alt="Mens Fashion Wear"
     width={270}
     height={340}
   />

   {/* Product Details */}
   <div className="p-4">
     <div className='flex items-center justify-between'>
     <h3 className="text-lg font-semibold text-blue-900">Mens Fashion Wear</h3>
     <div className="flex items-center mt-2">
       {/* Star Ratings */}
       <span className="text-yellow-400">★ ★ ★ ★</span>
       <span className="text-gray-300">★</span> {/* Inactive star */}
     </div>
     </div>
   
     <p className="text-gray-500 mt-2">$43.00</p>
   </div>
 </div>
    ))}
    </div>
    </Container>
    </>
  )
}

export default Relatedcard