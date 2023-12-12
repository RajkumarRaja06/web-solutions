import {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import cartReducer from '../utils/reducer/cartReducer';

const CartContext = createContext();
const initialState = {
  cartItems: [],
  subTotal: 0,
};

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState();
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD-TO-CART', item: item });
  };

  const removeToCart = (item) => {
    dispatch({ type: 'REMOVE-TO-CART', item: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE-ITEM', payload: { id: id } });
    toast.success('Successfully Item Removed');
  };

  const checkOut = () => {
    dispatch({ type: 'CHECKOUT' });
    toast.success('Your Order Is Placed');
  };

  useEffect(() => {
    dispatch({ type: 'UPDATE_PRICE' });
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        cartData,
        addToCart,
        removeToCart,
        checkOut,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const CartConsumer = () => {
  return useContext(CartContext);
};

export { CartConsumer, CartProvider, CartContext };
