import { CiMail } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import Container from '../Container/Container';
import Addcart from '../Components/Addcart/Addcart';

const Topnavbar = () => {
  return (
    <>
    <div className="w-full md:h-[44px] bg-[#7E33E0] flex items-center">
      <Container>
      <div className="">
        <div className="md:flex items-center justify-between">
          {/* Left part */}
          <div className="w-[100%] md:w-[50%] flex items-center justify-center md:justify-normal gap-10">
            {/* Email (Hidden on small screens) */}
            <div className="flex items-center">
              <CiMail className="mr-[10px] text-white text-[20px] font-bold" />
              <span className="text-white font-bold text-sm">mhhasanul@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <FiPhoneCall className="mr-[10px] text-white text-[20px] font-bold" />
              <span className="text-white font-bold text-sm">(12345) 67890</span>
            </div>
          </div>

          {/* Right part */}
          <div className="py-2 md:py-0 flex justify-center w-[100%] md:w-[50%] md:flex items-center md:justify-end">
            <Addcart></Addcart>
          </div>
        </div>
      </div>

      </Container>
    </div>
  </>
  )
}

export default Topnavbar