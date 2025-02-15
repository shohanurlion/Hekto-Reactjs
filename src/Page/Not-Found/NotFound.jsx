import { Link } from 'react-router-dom'
import Container from '../../Container/Container'
import pageimg from '../../../public/Group 123.png'
import addimg from '../../../public/image 1174.png'
import PageHeader from '../../Components/PageHedar/PageHeader'
const NotFound = () => {
  return (
    <>
    <div className='mt-[100px]'>
    <PageHeader HeaderText="404 Not Found" PageName="404 Not Found"/>
    </div>
    <Container>
    <div className='w-[100%]'>
        <div className=''>
            <img src={pageimg} alt='404pageimg' className='w-[50%] mx-auto'/>
        </div>
        <div className=' flex items-center justify-center pb-10'>
         <Link to="/">
         <button className='py-[9px] px-[30px] bg-[#FB2E86] text-[16px] text-[white] cursor-pointer'>Back To Home</button>
         </Link>
        </div>
        <div className='flex items-center justify-center py-6'>
          <img src={addimg} alt='addimg' className='w-[60%]'/>
        </div>
    </div>

</Container>
    </>
    
  )
}

export default NotFound