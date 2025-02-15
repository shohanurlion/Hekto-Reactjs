import Container from '../Container/Container'
import footerlogo from '../../public/Hekto.png'
import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram, CiTwitter  } from "react-icons/ci";
const Footer = () => {
  return (
    <>
    <div className='bg-[#EEEFFB] py-[30px] md:py-[40px] lg:py-[90px]'>
         <Container>
         <div className='md:flex md:justify-between'>
           {/* Footer Logo part */}
             <div className='w-[100%] md:w-[40%] pb-4 md:pb-0'>
               <div className=''>
                 <img src={footerlogo} alt='Footer_logo'/>
               </div>
               <div className='py-[20px]'>
                 <input type='text' placeholder='Enter Email Address' className='px-[30px] py-[10px] bg-[#FFFFFF] outline-none'/>
                 <button className='md:mt-[12px] lg:mt-0 px-[30px] py-[10px] bg-[#FB2E86] text-[16px] text-[white] font-bold'>Sign Up</button>
               </div>
               <div className=''>
                 <p className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] font-[400] pb-2'>Contact Info</p>
                 <p className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] font-[400]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
               </div>
             </div>
             {/* Catagories part */}
             <div className='w-[100%] md:w-[20%] pb-4 md:pb-0'>
               <h4 className='md:text-[17px] lg:text-[22px] text-[#000000] leading-[24px] pb-[30px]'>Catagories</h4>
               <ul>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Laptops & Computers</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Cameras & Photography</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Smart Phones & Tablets</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Video Games & Consoles</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9]  leading-[18px]'>Waterproof Headphones</li>
               </ul>
             </div>
             {/* Customer Care part */}
             <div className='w-[100%] md:w-[20%] pb-4 md:pb-0'>
             <h4 className='md:text-[17px] lg:text-[22px] text-[22px] text-[#000000] leading-[24px] pb-[30px]'>Customer Care</h4>
               <ul>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>My Account</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Discount</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Returns</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Orders History</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Order Tracking</li>
               </ul>
             </div>
             {/* Pages part */}
             <div className='w-[100%] md:w-[20%] pb-4 md:pb-0'>
             <h4 className='md:text-[17px] lg:text-[22px] text-[22px] text-[#000000] leading-[24px] pb-[30px]'>Pages</h4>
               <ul>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Blog</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Browse the Shop</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Category</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Pre-Built Pages</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>Visual Composer Elements</li>
                 <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9] mb-[21px] leading-[18px]'>WooCommerce Pages</li>
               </ul>
             </div>
         </div>
         </Container>
       
     </div>
    <div className='w-[100%] bg-[#E7E4F8] py-4'>
           <Container>
           <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3 md:gap-0">
  {/* Copyright Text */}
  <div className="w-full md:w-[50%] flex justify-center md:justify-start">
    <p className="text-[14px] text-[#9DA0AE] leading-[16px] font-[600]">
      ©Webecy - All Rights Reserved
    </p>
  </div>

  {/* Social Icons */}
  <div className="w-full md:w-[50%] flex justify-center md:justify-end">
    <ul className="flex items-center gap-x-3">
      <li className="w-[30px] h-[30px] rounded-full bg-[#151875] text-white flex items-center justify-center cursor-pointer">
        <TiSocialFacebook />
      </li>
      <li className="w-[30px] h-[30px] rounded-full bg-[#151875] text-white flex items-center justify-center cursor-pointer">
        <CiInstagram />
      </li>
      <li className="w-[30px] h-[30px] rounded-full bg-[#151875] text-white flex items-center justify-center cursor-pointer">
        <CiTwitter />
      </li>
    </ul>
  </div>
</div>

           </Container>
        
    </div>
    </>
  )
}

export default Footer