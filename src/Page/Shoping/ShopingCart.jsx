import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { ImZoomIn } from "react-icons/im";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/Product/ProductSlice";
import Swal from "sweetalert2";

const ShopingCart = ({ allpage, cateFilter, brnadFilters }) => {
  const dispatch = useDispatch();
  let displayData = [];

  if (cateFilter.length > 0) {
    displayData = cateFilter;
  } else if (brnadFilters.length > 0) {
    displayData = brnadFilters;
  } else {
    displayData = allpage;
  }
  const homecarthandel = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <div>
      {displayData.map((item) => (
        <div
          key={item.id} // assuming each item has a unique id
          className="single-product"
          style={{
            display: 'flex',
            border: '1px solid #ddd',
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          {/* Product Image */}
          <div style={{ width: '120px', marginRight: '20px' }}>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: '100%', objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>

          {/* Product Details */}
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 8px 0' }} className='text-[18px] text-[#111C85] font-bold'>{item.title}</h3>
            <p style={{ margin: '0 0 8px 0', color: '#666' }}>{item.description}</p>

            {/* Price & Discount */}
            <div style={{ marginBottom: '8px' }}>
              <span>${item.price}</span>
              <span className='line-through text-red-600 pl-3'>$453</span>
            </div>
            <div className="flex gap-8 py-4">
            <button onClick={() => homecarthandel(item)} className="text-2xl cursor-pointer"><FiShoppingCart /></button>
            <button className="text-2xl cursor-pointer"><FaRegHeart /></button>
            <button className="text-2xl cursor-pointer"><ImZoomIn /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopingCart;
