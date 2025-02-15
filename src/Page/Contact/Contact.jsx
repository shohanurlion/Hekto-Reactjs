import victor from '../../../public/Group 94.png'
import lipel from '../../../public/Ellipse 44.png'
import imagep from '../../../public/Group 124.png'
import Container from '../../Container/Container'
import PageHeader from '../../Components/PageHedar/PageHeader'

const Contact = () => {
  return (
    <>
        <section className='mt-[80px]'>
        <PageHeader HeaderText="Contact Us" PageName="Contact us"/>
        <Container>
           
                <div className="md:flex justify-between py-[100px]">
                    <div className='px-2 md:w-[50%]'>
                        <h3 className='text-[35px] text-[#151875] font-bold pb-3'>Information About us</h3>
                        <p className='text-[#8A8FB9] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <div className='py-6'>
                            <img src={victor} alt='victor' />
                        </div>
                    </div>
                    <div className='px-2 py-6 md:py-0 md:w-[50%] md:flex justify-end'>
                        <div className=''>
                            <h3 className='text-[35px] text-[#151875] font-bold pb-3'>Contact Way</h3>
                            <div className='flex items-center gap-8 pb-3'>
                                <div className='flex items-center gap-2'>
                                    <img src={lipel} alt='lipel' className='w-[30px] h-[30px]' />
                                    <div>
                                        <p className='text-[12px]'>Tel: 877-67-88-99</p>
                                        <p className='text-[12px]'>E-Mail: shop@store.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={lipel} alt='lipel' className='w-[30px] h-[30px]' />
                                    <div>
                                        <p className='text-[12px]'>Support Forum</p>
                                        <p className='text-[12px]'>For over 24hr</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-8'>
                                <div className='flex items-center gap-2'>
                                    <img src={lipel} alt='lipel' className='w-[30px] h-[30px]' />
                                    <div>
                                        <p className='text-[12px]'>20 Margaret st, London</p>
                                        <p className='text-[12px]'>Great britain, 3NM98-LK</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={lipel} alt='lipel' className='w-[30px] h-[30px]' />
                                    <div>
                                        <p className='text-[12px]'>Free standard shipping</p>
                                        <p className='text-[12px]'>on all orders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* Contact From */}
                <div className='lg:flex'>
                {/* Search part */}
                <div className='px-2 lg:w-[50%]'>
                    <h3 className='text-[35px] text-[#151875] font-bold'>Get In Touch</h3>
                    <p className='py-4 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                <form action="">
                    <div className=' space-y-4 sm:space-y-0 sm:flex gap-x-4'>
                    <input type="text" placeholder='Your Name*' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'/>
                    <input type="text" placeholder='Your E-mail' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'/>
                    </div>
                    <input type="text" placeholder='Subject*' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] my-[35px] outline-none' />
                    <textarea name="Massage" id=""  placeholder='Type Your Messege*' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'></textarea>
                    <input type="submit" value="Send Mail" className='px-[40px] py-[9px] bg-[#FB2E86] text-[#FFFFFF] mt-[10px]'></input>
                </form>
                </div>
                {/* Image part */}
                <div className='px-2 py-6 lg:w-[50%]'>
                    <img src={imagep} alt='image'/>
                </div>
                </div>
            </Container>
        </section>
            
        </>
  )
}

export default Contact