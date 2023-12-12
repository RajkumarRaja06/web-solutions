import '../styles/cart.css';
import { DataConsumer } from '../context/dataContext';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { IoMdCloseCircle } from 'react-icons/io';
import { CartConsumer } from '../context/cartContext';
import empty from '../images/Empty.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { apiTwoData } = DataConsumer();
  const { cartItems, addToCart, removeToCart, subTotal, checkOut, removeItem } =
    CartConsumer();
  const navigate = useNavigate();

  const checkOutBtn = () => {
    toast('🦄 Your order is placed successfully!!!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    checkOut();
    navigate('/');
  };

  return (
    <div className='cart'>
      {cartItems && cartItems.length !== 0 ? (
        <div>
          <div className='cart-header'>
            <p>s.no</p>
            <p>Image</p>
            <p>product name</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <div className='cart-data-list'>
            {cartItems &&
              cartItems.map((item, index) => {
                const { idCategory, quantity, strCategory, strCategoryThumb } =
                  item;
                return (
                  <div className='cart-data' key={index}>
                    <div>{index + 1}</div>
                    <div className='cart-data-img'>
                      <img src={strCategoryThumb} alt={strCategory} />
                    </div>
                    <div className='cart-data-name'>{strCategory}</div>
                    <div>${idCategory}</div>
                    <div className='cart-data-quantity'>
                      <p>
                        <FaCircleMinus onClick={() => removeToCart(item)} />
                      </p>
                      <h6>{quantity}</h6>
                      <p onClick={() => addToCart(item)}>
                        <FaCirclePlus />
                      </p>
                    </div>
                    <div>${quantity * idCategory}</div>
                    <div className='cart-data-close'>
                      <p onClick={() => removeItem(idCategory)}>
                        <IoMdCloseCircle />
                      </p>
                    </div>
                  </div>
                );
              })}
            <div className='cartTotal'>
              <h2>Cart Totals :</h2>
              <div>
                <p>Cart Subtotal</p>
                <p>${subTotal}</p>
              </div>
              <div>
                <p>Delivery charge</p>
                <p>${35}</p>
              </div>
              <div className='total'>
                <p>Order Total</p>
                <p>${35 + subTotal}</p>
              </div>
              <button onClick={checkOutBtn}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='emptyCart'>
          <img src={empty} alt='Empty' />
          <h2>Add some items to your cart</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
