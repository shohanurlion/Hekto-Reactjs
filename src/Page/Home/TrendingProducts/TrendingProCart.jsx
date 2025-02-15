import React from 'react'
import { Link } from 'react-router-dom';

const TrendingProCart = ({ trendproduct = [] }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendproduct.map((item, id) => (
          <div key={id} className="bg-gray-50 p-4 rounded-lg shadow-md w-[270px]">
            <div className="bg-white p-4 rounded-lg flex justify-center items-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-40 h-auto object-contain"
              />
            </div>
            <div className="text-center mt-4">
            <Link to={`/productsdetails/${item.id}`}>
            <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
            </Link>
              <div className="flex justify-center items-center gap-2 mt-1">
                <span className="text-lg font-bold text-gray-800">${item.price}</span>
                <span className="text-gray-400 line-through">$254</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingProCart;
