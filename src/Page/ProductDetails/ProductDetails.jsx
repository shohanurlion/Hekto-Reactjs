import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import productimg2 from '../../../public/Rectangle 134.png'
import productimg3 from '../../../public/Rectangle 136.png'
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import Description from './Description';
import Relatedcard from './Relatedcard';
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Features/Product/ProductSlice';
import Swal from 'sweetalert2';
const ProductDetails = () => {
    const dispatch = useDispatch();
    const productId = useParams();
    const [singelProduct, setsingelproduct] = useState({});
    const getId = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
          setsingelproduct(response.data);
        });
      };
      useEffect(() => {
        getId();
      }, []);
      const bilingcarthandel = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }));
           Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
      };
  return (
    <>
    <section className='mt-[80px]'>
    <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row p-0 space-y-4 md:space-y-0 md:space-x-8">
          
          {/* Left Image Section */}
          <div className="flex-shrink-0 md:w-1/3 w-full">
            <div className="grid grid-cols-3 gap-2">
              <img className="w-full h-[100px] md:h-[150px] row-span-1 object-cover rounded" src={productimg2} alt="Image 1" />
              <img className="w-full col-span-2 row-span-10 object-cover rounded" src={singelProduct.thumbnail} alt="Image 2" width={100} height={100}/>
              <img className="w-full h-[100px] md:h-[150px] object-cover rounded" src={productimg3} alt="Image 3" />
            </div>
          </div>

          {/* Right Details Section */}
          <div className="flex-1">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">{singelProduct.title}</h1>

            {/* Rating and Reviews */}
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-sm text-gray-600">(22)</span>
            </div>

            {/* Price Section */}
            <div className="mt-4">
              <span className="text-xl font-bold text-gray-900">${singelProduct.price}</span>
              <span className="ml-2 text-lg line-through text-red-500">$39.00</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-500">
              {singelProduct.description}
            </p>

            {/* Add To Cart Button */}
            <div className="mt-6">
            <button onClick={() => bilingcarthandel(singelProduct)} className="flex items-center gap-x-4 mt-6 px-6 py-2 text-[black] border-2 border-[black] rounded hover:bg-[black] hover:text-[white] hover:border-none">
                Add To Cart
                <FaRegHeart />
            </button> 
            </div>

            {/* Categories and Tags */}
            <div className="mt-6">
              <div className="text-gray-600">Categories:</div>
              <div className="text-gray-900 font-medium">{singelProduct.category}</div>
            </div>

            <div className="mt-2">
              <div className="text-gray-600">Tags:</div>
              <div className="text-gray-900 font-medium">{singelProduct.tags}</div>
            </div>

            {/* Social Sharing */}
            <div className="mt-6 flex items-center space-x-4">
              <h4 className="text-[16px] leading-[29px] text-[#151875] font-bold">Share</h4>
              <ul className="flex items-center gap-x-4">
                <li className="w-[25px] h-[25px] rounded-full bg-[black] text-[white] flex items-center justify-center duration-700 ease-in-out hover:bg-[#FB2E86] hover:text-[white] cursor-pointer">
                  <TiSocialFacebook />
                </li>
                <li className="w-[25px] h-[25px] rounded-full bg-[black] text-[white] flex items-center justify-center duration-700 ease-in-out hover:bg-[#FB2E86] hover:text-[white] cursor-pointer">
                  <FaInstagram />
                </li>
                <li className="w-[25px] h-[25px] rounded-full bg-[black] text-[white] flex items-center justify-center duration-700 ease-in-out hover:bg-[#FB2E86] hover:text-[white] cursor-pointer">
                  <TiSocialTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=' py-[100px] bg-[#F9F8FE]'>
        <Description singelProduct={singelProduct}/>
      </div>
      <div className='py-[90px]'>
        <Relatedcard/>
      </div>
    </section>
   
    </>
  )
}

export default ProductDetails