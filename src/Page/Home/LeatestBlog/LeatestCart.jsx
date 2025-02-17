import { Link } from 'react-router-dom';
import Blogimg from '../../../../public/Shopex-img/Frame 3.png';
import pen from '../../../../public/Shopex-img/Vector.png';
import clender from '../../../../public/Shopex-img/uil_calendar-alt.png';

const LeatestCart = ({ allproduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {allproduct.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img src={Blogimg} alt="blogcard" className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="flex items-center mr-4">
                <img src={pen} alt="pen" className="w-4 h-4 mr-1" />
                SaberAli
              </span>
              <span className="flex items-center">
                <img src={clender} alt="calendar" className="w-4 h-4 mr-1" />
                21 August, 2020
              </span>
            </div>
            <Link to={`/Singleblog/${item.id}`}>
            <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">
              {item.title}
            </h3>
            </Link>
            <p className="text-gray-500 mb-4 text-sm md:text-base">
              More off this less hello samlande lied much over tightly circa horse
              taped mightly
            </p>
            <Link to={`/Singleblog/${item.id}`} className="text-blue-500 font-semibold underline text-sm md:text-base">
            Read More
            </Link>
             
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeatestCart;
