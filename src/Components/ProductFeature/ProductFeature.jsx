import shofaimg from "../../../public/Shopex-img/Group 153.png"
import Container from "../../Container/Container";

const ProductFeature = () => {
    return (
    
    <section className="bg-[#f7f6fc] py-6 px-4 md:px-8">
       <Container>
       <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <img
              src={shofaimg}
              alt="Sofa"
              className="relative z-10 w-full md:w-80 h-auto"
            />
          </div>
  
          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Unique Features Of Latest & Trending Products
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-600 flex items-start">
                <span className="w-3 h-3 bg-purple-600 rounded-full mr-2 mt-1"></span>
                All frames constructed with hardwood solids and laminates
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="w-3 h-3 bg-red-600 rounded-full mr-2 mt-1"></span>
                Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="w-3 h-3 bg-green-600 rounded-full mr-2 mt-1"></span>
                Arms, backs and seats are structurally reinforced
              </li>
            </ul>
  
            <div className="flex items-center gap-4">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-600 transition">
                Add To Cart
              </button>
              <div>
                <p className="font-semibold text-gray-800">B&B Italian Sofa</p>
                <p className="text-gray-600">$32.00</p>
              </div>
            </div>
          </div>
        </div>
       </Container>
    </section>
 
      
    );
  };
  
  export default ProductFeature;
  