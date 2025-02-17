import { Link } from "react-router-dom";

const TopCategoriesCart = ({ trendproduct }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {trendproduct.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-xs mx-auto"
          >
            {/* Chair Image */}
            <div className="relative w-48 h-48 flex justify-center items-center rounded-full bg-white shadow-lg border-4 border-purple-300 group">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="object-contain w-32 h-32"
              />
              {/* Hover Button */}
              <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to={`/productsdetails/${item.id}`}>
                <button className="bg-green-500 text-white py-1 px-4 rounded-full text-sm">
                  View Shop
                </button>
                </Link>
              </div>
            </div>
  
            {/* Product Name */}
            <Link to={`/productsdetails/${item.id}`}>
            <h3 className="mt-6 text-lg font-semibold text-purple-800">{item.title}</h3>
            </Link>
            {/* Product Price */}
            <p className="mt-2 text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TopCategoriesCart;
  