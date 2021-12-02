import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartStore = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      let updatedtotalamount =
        state.totalAmount + action.payload.price * action.payload.amount;
      let cartIndex = state.items.findIndex((each) => {
        return action.payload.id === each.id;
      });
      let updateditems = [...state.items];
      if (cartIndex >= 0) {
        const updatedItem = updateditems[cartIndex];
        updatedItem.amount += action.payload.amount;
        updateditems[cartIndex] = updatedItem;
      } else {
        updateditems.push(action.payload);
      }
      return { items: updateditems, totalAmount: updatedtotalamount };
    }
    case "REMOVE": {
      let cartIndex = state.items.findIndex((each) => {
        return action.payload === each.id;
      });
      let updatedtotalamount = state.totalAmount - state.items[cartIndex].price;
      let updateditems = [...state.items];
      if (updateditems[cartIndex].amount === 1) {
        updateditems.splice(cartIndex, 1);
      } else {
        updateditems[cartIndex].amount--;
      }
      return {
        items: updateditems,
        totalAmount: +updatedtotalamount,
      };
    }
    default:
      return defaultCartStore;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartaction] = useReducer(
    cartReducer,
    defaultCartStore
  );

  const addCartItemHandler = (item) => {
    dispatchCartaction({ type: "ADD", payload: item });
  };

  const removeCartItemHandler = (id) => {
    dispatchCartaction({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
