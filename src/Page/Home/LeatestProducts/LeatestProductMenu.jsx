import { useState } from 'react';
import Container from '../../../Container/Container';
import LeatestProductCart from './LeatestProductCart';

const LeatestProductMenu = ({ productdata }) => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle navigation click
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  // Filter product data based on the category
  const filterProducts = (category) => {
    return productdata.filter((product) => product.category === category);
  };

  return (
    <>
      <Container>
        <div className='px-4 md:px-0'>
          {/* Navbar */}
          <nav className='nav flex item justify-center'>
            <button
              onClick={() => handleNavClick('home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              New Arrival
            </button>
            <button
              onClick={() => handleNavClick('service')}
              className={`nav-link ${activeSection === 'service' ? 'active' : ''}`}
            >
              Best Seller
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
            >
              Featured
            </button>
            <button
              onClick={() => handleNavClick('special')}
              className={`nav-link ${activeSection === 'special' ? 'active' : ''}`}
            >
              Special Offer
            </button>
          </nav>

          {/* Section Content */}
          <div className='content'>
            {activeSection === 'home' && (
              <div>
                <LeatestProductCart productdata={filterProducts('womens-shoes')} />
              </div>
            )}
            {activeSection === 'service' && (
              <div>
                <LeatestProductCart productdata={filterProducts('groceries')} />
              </div>
            )}
            {activeSection === 'products' && (
              <div>
                <LeatestProductCart productdata={filterProducts('mobile-accessories')} />
              </div>
            )}
            {activeSection === 'special' && (
              <div>
                <LeatestProductCart productdata={filterProducts('skin-care')} />
              </div>
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
              border-bottom: 1px solid #fb2e86;
              color: #fb2e86;
            }
          `}</style>
        </div>
      </Container>
    </>
  );
};

export default LeatestProductMenu;
