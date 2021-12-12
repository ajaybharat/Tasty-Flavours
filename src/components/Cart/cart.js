import React, { useContext, useState } from "react";
import classes from "./cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
import CartItem from "./cartItem";
import Checkout from "./checkout";

const Cart = (props) => {
  const [isCheckout, setischeckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartStore = useContext(cartContext);
  const cartItems = [...cartStore.items];
  const price = `$${cartStore.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartStore.removeCartItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartStore.addCartItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setischeckout(true);
  };

  const onSubmitHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://practice-6367c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          OrderedData: cartItems,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartStore.clearItems();
  };

  const ModalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      <button className={classes.button} onClick={orderHandler}>
        Order
      </button>
    </div>
  );

  const CartModalCntnt = (
    <React.Fragment>
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
      {isCheckout && (
        <Checkout onSubmit={onSubmitHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && ModalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && CartModalCntnt}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
