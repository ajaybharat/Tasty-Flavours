import React, { useContext } from "react";
import classes from "./cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
import CartItem from "./cartItem";

const Cart = (props) => {
  const cartStore = useContext(cartContext);
  const cartItems = [...cartStore.items];
  const price = `$${cartStore.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartStore.removeCartItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartStore.addCartItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((each) => (
          <CartItem
            key={each.id}
            amount={each.amount}
            price={each.price}
            name={each.name}
            onRemove={() => cartItemRemoveHandler(each.id)}
            onAdd={() => cartItemAddHandler(each)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{price}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
