const cartReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PRICE':
      const updatePrice = state.cartItems.reduce((pre, curr) => {
        const amount = curr.quantity * curr.idCategory;
        return pre + amount;
      }, 0);
      return { ...state, subTotal: updatePrice };
    case 'CHECKOUT':
      return { ...state, cartItems: [] };
    case 'ADD-TO-CART':
      const existedItem = state.cartItems.find(
        (cartItem) => cartItem.idCategory === action.item.idCategory
      );
      if (existedItem) {
        const updateCart = state.cartItems.map((cartItem) => {
          return cartItem.idCategory === existedItem.idCategory
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        });
        return { ...state, cartItems: updateCart };
      } else {
        const updateCart = [
          ...state.cartItems,
          { ...action.item, quantity: 1 },
        ];
        return { ...state, cartItems: updateCart };
      }

    case 'REMOVE-TO-CART':
      const updateCart = state.cartItems
        .map((cartItem) =>
          cartItem.idCategory === action.item.idCategory
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
      return { ...state, cartItems: updateCart };
    default:
      break;
  }
};

export default cartReducer;
