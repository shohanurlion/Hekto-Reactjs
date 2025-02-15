import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser,FaRegHeart  } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { productremove } from "../../Features/Product/ProductSlice";

const Addcart = (item) => {
    const cartinfo = useSelector((state) => state.product.cartitem);
    const [cart, setcart] = useState(false);
    const cartbox = useRef();
    const carstikiref = useRef();
    const dispatch = useDispatch()
    useEffect(() => {
        window.addEventListener("click", (e) => {
          if (cartbox.current.contains(e.target) == true) {
            setcart(!cart)
          } else {
            setcart(false)
          }
          if (carstikiref.current.contains(e.target)) {
            setcart(true)
          }
        });
    
    
      }, [cart]);
      const { totalPrice } = cartinfo.reduce((acc, item) => {
        acc.totalPrice += Math.ceil(item.price * item.qun)
        return acc
      }, { totalPrice: 0 });
  return (
    <>
    <div className='flex items-center relative'>
        <div className='flex items-center md:gap-2'>
            <span className='text-[12px] md:text-[16px] text-[white] font-bold'>English</span>
            <IoIosArrowDown className='mr-[10px] text-[white] text-[20px] font-bold'/>
        </div>
        <div className='flex items-center md:gap-2'>
            <span className='text-[12px] md:text-[16px] text-[white] font-bold'>USD</span>
            <IoIosArrowDown className='mr-[10px] text-[white] text-[20px] font-bold'/>
        </div>
        <div className='flex md:gap-2'>
            <span className='text-[12px] md:text-[16px] text-[white] font-bold'>Login</span>
            <FaRegUser className='mr-[10px] text-[white] text-[20px] font-bold'/>
        </div>
        <div className='flex items-center md:gap-2'>
            <span className='text-[12px] md:text-[16px] text-[white] font-bold'>Wishlist</span>
            <FaRegHeart className='mr-[10px] text-[white] text-[20px] font-bold'/>
        </div>
        <div className='flex items-center relative cursor-pointer' ref={cartbox}>
            {cartinfo.length > 0 ? <div className=' flex items-center justify-center absolute left-[10px] top-[-4px] h-[20px] w-[20px] bg-[#dcc0c0] rounded-full text-[black]'>
                  {cartinfo.length}
            </div> : ""}
            <BsCart2 className='ml-[0px] md:ml-[20px] text-[white] text-[25px] font-bold'/>
        </div>
        <div className='' ref={carstikiref}>
                {cart && 
                <div className='w-[360px] border-2 border-[#F0F0F0] absolute top-[36px] left-[-315px] lg:left-[85px] z-50'>
                {cartinfo.map((item) => (
                  <>
                    <div className=' flex justify-between items-center bg-[#F5F5F3] py-5 px-5'>
                      <div>
                        <img className='w-[80px] h-[80px]' src={item.thumbnail} alt='cartimg' />
                      </div>
                      <div>
                        <h4>{item.title}</h4>
                        <h4>${item.price}</h4>
                      </div>
                      <div onClick={() => dispatch(productremove(item))} className="cursor-pointer">
                        <ImCross />
                      </div>
                    </div>
                  </>

                ))}

                <div className='py-5 px-5 bg-[#dad1d1]'>
                  <p className='text-[#141313] pb-4'>Subtotal: <span>${totalPrice}</span></p>
                  <div className=' flex justify-between'>
                    <Link to={'/billing'}>
                      <button className='py-[5px] px-[40px] border-2 border-[#2B2B2B] hover:bg-[#262626] hover:text-white duration-700 ease-in-out'>View Cart</button>
                    </Link>
                    <Link to={'/'}>
                      <button className='py-[5px] px-[40px] border-2 border-[#2B2B2B] hover:bg-[#262626] hover:text-white duration-700 ease-in-out'>Checkout</button>
                    </Link>

                  </div>
                </div>
              </div>
                }
              </div>
    </div>
    </>
  )
}

export default Addcart