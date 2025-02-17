import Furniture from '../../../../public/Shopex-img/image 1161.png'
import Clock from '../../../../public/Shopex-img/image 1162.png'
import Chair from '../../../../public/Shopex-img/image 30.png'
import Container from '../../../Container/Container';
const ProductOfferSection = () => {
    return (
        <Container>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        {/* Offer Card 1 */}
        <div className="bg-pink-50 p-6 rounded-lg flex flex-col justify-between items-start space-y-4 shadow">
          <h3 className="text-xl font-bold text-blue-900">23% off in all products</h3>
          <button className="text-pink-500 font-medium">Shop Now</button>
          <img src={Clock} alt="Clock" className="" />
        </div>
  
        {/* Offer Card 2 */}
        <div className="bg-blue-50 p-6 rounded-lg flex flex-col justify-between items-start space-y-4 shadow">
          <h3 className="text-xl font-bold text-blue-900">23% off in all products</h3>
          <button className="text-pink-500 font-medium">View Collection</button>
          <img src={Furniture} alt="Furniture" className="" />
        </div>
  
        {/* Product List */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center space-x-4 bg-white p-2 rounded-lg shadow">
              <img src={Chair} alt="Chair" className="w-12 h-12 object-contain" />
              <div>
                <p className="text-blue-900 font-medium">Executive Seat chair</p>
                <p className="text-gray-600">$32.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

        </Container>
    
    );
  };
  
  export default ProductOfferSection;
  