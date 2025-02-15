import Container from '../Container/Container'
import logo from '../../public/Hekto.png';
import React, { useEffect, useState } from 'react'
import Menu from '../Components/Menu/Menu';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar/SearchBar';
function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
    <div className={isSticky ? 'navbar sticky' : 'navbar'}>
    <Container>
    <div className='h-20'>
        {/* Mobile Navbar */}
        <div className='h-full flex items-center justify-between lg:hidden'>
          <img src={logo} alt='Logo' width={100} height={40} />
          <Menu></Menu>
        </div>

        {/* Larger Screen Navbar */}
        <div className='hidden lg:flex items-center justify-between gap-8 h-full'>
          <div className='flex items-center justify-between w-full lg:w-[50%] gap-6'>
            <img src={logo} alt='Logo' width={100} height={40} />
            <div className='hidden lg:flex gap-6'>
              <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
              <Link to="/" className="hover:text-blue-500 transition-colors">Pages</Link>
              <Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link>
              <Link to="/blogpage" className="hover:text-blue-500 transition-colors">Blog </Link>
              <Link to="/shoping" className="hover:text-blue-500 transition-colors">Shop</Link>
              <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-[50%] justify-end'>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </Container>
    
    </div>
  </>
  )
}

export default Navbar