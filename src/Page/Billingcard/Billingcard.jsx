import { FiMinus, FiPlus } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { productdecrement, productIncrement, productremove, clearCart } from "../../Features/Product/ProductSlice";
import PageHeader from "../../Components/PageHedar/PageHeader";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


const Billingcard = () => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.product.cartitem);

  const { totalPrice, totalQuntity } = cartInfo.reduce(
    (acc, item) => {
      acc.totalPrice += Math.ceil(item.price * item.qun);
      acc.totalQuntity += item.qun;
      return acc;
    },
    { totalPrice: 0, totalQuntity: 0 }
  );

  // Remove Single Item
  const handleRemoveItem = (i) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to remove this item from the cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(productremove(i));
        Swal.fire('Deleted!', 'The item has been removed from your cart.', 'success');
      }
    });
  };

  // Clear Cart
  const handleClearCart = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to clear the entire cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire('Cleared!', 'All items have been removed from your cart.', 'success');
      }
    });
  };

  return (
    <>
      <div className="mt-[100px]">
        <PageHeader HeaderText="Shopping Curt" PageName="Shopping Curt" />
      </div>
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-4">Product</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Quantity</th>
                  <th className="pb-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartInfo.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-4 flex items-center">
                      <div className="relative">
                        <div className="bg-black text-white text-1xl rounded-full left-[54px] top-[-5px] absolute w-[20px] h-[20px] flex justify-center items-center cursor-pointer">
                          <button onClick={() => handleRemoveItem(i)}>
                            <RxCrossCircled />
                          </button>
                        </div>
                        <img src={item.thumbnail} alt="Product" className="w-16 h-16 rounded mr-4" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">Color: Brown, Size: XL</p>
                      </div>
                    </td>
                    <td className="py-4">${item.price}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button onClick={() => dispatch(productdecrement(i))}>
                          <FiMinus />
                        </button>
                        <p className="mx-3">{item.qun}</p>
                        <button onClick={() => dispatch(productIncrement(i))}>
                          <FiPlus />
                        </button>
                      </div>
                    </td>
                    <td className="py-4">${Math.ceil(item.price * item.qun)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
                <Link to="/">
                <button className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer">Update Cart</button>
                </Link>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Totals & Shipping */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
              <div className="flex justify-between mb-2">
                <span>Total Quantity:</span>
                <span>{totalQuntity}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Subtotals:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Totals:</span>
                <span>${totalPrice}</span>
              </div>
              <p className="text-xs text-green-500 mb-4">Shipping & Taxes calculated at checkout</p>
              <button className="bg-green-500 text-white w-full py-2 rounded">Proceed To Checkout</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Calculate Shipping</h3>
              <input type="text" placeholder="Bangladesh" className="w-full mb-2 border rounded p-2" />
              <input type="text" placeholder="Mirpur Dhaka - 1200" className="w-full mb-2 border rounded p-2" />
              <input type="text" placeholder="Postal Code" className="w-full mb-4 border rounded p-2" />
              <button className="bg-pink-500 text-white w-full py-2 rounded">Calculate Shipping</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billingcard;
