import fullstar from '../../../public/download.png'
import hafstar from '../../../public/faka.png'
import { useState } from "react";
import Container from '../../Container/Container';
const Description = ({singelProduct}) => {
      // State to track which section is currently active
   const [activeSection, setActiveSection] = useState("home");

   // Function to handle navigation click
   const handleNavClick = (section) => {
     setActiveSection(section);
   };
  return (
   <>
   <Container>
   <div className='container'>
      {/* Navbar */}
      <nav className="nav flex item">
        <button onClick={() => handleNavClick("home")} className={`nav-link ${activeSection === "home" ? "active" : ""}`}>
        Description
        </button>
        <button onClick={() => handleNavClick("service")} className={`nav-link ${activeSection === "service" ? "active" : ""}`}>
        Additional Info
        </button>
        <button onClick={() => handleNavClick("products")} className={`nav-link ${activeSection === "products" ? "active" : ""}`}>
        Reviews
        </button>
        <button onClick={() => handleNavClick("special")} className={`nav-link ${activeSection === "special" ? "active" : ""}`}>
        Video
        </button>
      </nav>

      {/* Section Content */}
      <div className="content">
        {activeSection === "home" && (
         <div className="bg-[#F9F8FE] p-8">
         {/* Section 1 */}
         <div className="mb-8">
           <h2 className="text-2xl font-bold text-blue-900">Varius tempor.</h2>
           <p className="text-gray-500 mt-4 leading-relaxed">{singelProduct.description}</p>
         </div>
   
         {/* Section 2 */}
         <div>
           <h3 className="text-xl font-semibold text-blue-900 mb-4">More details</h3>
           <ul className="space-y-4">
             <li className="flex items-center">
               <span className="mr-2 text-xl">➔</span>
               <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
             </li>
             <li className="flex items-center">
               <span className="mr-2 text-xl text-blue-600">➔</span>
               <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
             </li>
             <li className="flex items-center">
               <span className="mr-2 text-xl">➔</span>
               <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
             </li>
             <li className="flex items-center">
               <span className="mr-2 text-xl">➔</span>
               <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
             </li>
           </ul>
         </div>
       </div>
        )}
        {activeSection === "service" && (
          <div className="bg-purple-50 p-8">
          {/* Section 1 Additional Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Additional Info :</h2>
           <div>
            <p>WarrantyInformation: {singelProduct.warrantyInformation}</p>
            <p>ShippingInformation: {singelProduct.shippingInformation}</p>
            <p>AvailabilityStatus: {singelProduct.availabilityStatus}</p>
            <p>ReturnPolicy: {singelProduct.returnPolicy}</p>
           </div>
          </div>
        </div>
        )}
        {activeSection === "products" && (
          <div className="bg-purple-50 p-8">
          {/* Section 2 Reviwe */}
          <div className='px-4 lg:px-0'>
    <div className="flex items-center gap-x-[62px]">
        <div>
          <h4 className='font-dm-sans font-normal text-xl text-[#767676] leading-[29px]'>Description</h4>
        </div>
        <div>
          <h4 className='font-dm-sans font-bold text-xl text-[#262626] leading-[26px]'>Reviews ({singelProduct.reviews?.length || 0})</h4>
        </div>
      </div>
      <div className="border-b-[1px] border-[#F0F0F0] pb-[16px]">
        <p className='font-dm-sans font-normal text-sm text-[#767676] leading-[30px]'> {singelProduct.reviews?.length || 0} review for Product</p>
      </div>
      {singelProduct.reviews?.map((item, i) => (
        <div key={i} className="border-b-[1px] border-[#F0F0F0] mb-[53px] mt-[42px]">
          <div className="justify-between pt-[23px] pb-[14px] flex items-center">
            <div className="flex items-center gap-x-[37px]">
              <div>
                <h4 className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>{item.reviewerName}</h4>
              </div>
              <div className="flex items-center text-[gold]">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < item.rating ? (
                      <img className='w-[20px]' src={fullstar} alt="Full star" />
                    ) : (
                      <img className='w-[20px]' src={hafstar} alt="Empty star" />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="font-dm-sans font-normal text-base text-[#767676] leading-[30px]">
              <h4>{item.date}</h4>
            </div>
          </div>
          <div className="font-dm-sans font-normal text-base text-[#767676] leading-[30px]">
            <h4>Email : {item.reviewerEmail}</h4>
          </div>
          <div className="pb-[15px]">
            <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>{item.comment}</p>
          </div>
        </div>

      ))}
      <div className="lg:w-[780px]">
        <div className="pb-[48px]">
          <h3 className='font-dm-sans font-bold text-[20px] text-[#262626] leading-[26.04px]'>Add a Review</h3>
        </div>
        <form action="">
          <div className="border-b-[1px] border-[#F0F0F0] ">
            <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px]'>Name</h3>
            <input className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' type="text" placeholder='Your name here' required />
          </div>
          <div className="border-b-[1px] border-[#F0F0F0] ">
            <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Email</h3>
            <input className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' type="email" placeholder='Your email here' required />
          </div>
          <div className="border-b-[1px] border-[#F0F0F0] ">
            <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Review</h3>
            <textarea className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' placeholder='Your review here' required></textarea>
          </div>
          <div className="mt-[29px]">
            <button type='submit' className='py-[16px] px-[85px] bg-black text-white font-dm-sans font-bold text-sm leading-[18px]'>Post</button>
          </div>
        </form>
      </div>
    </div>
        </div>
        )}
         {activeSection === "special" && (
                <h2>Ther is no video!!!</h2>
        )}
      </div>

      <style jsx>{`
        .nav {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .nav-link {
          border: none;
          cursor: pointer;
        }
        .nav-link.active {
          border-bottom: 1px solid #FB2E86;
          color: #FB2E86;
        }
      `}</style>
    </div>
   </Container>
   
   </>
  )
}

export default Description