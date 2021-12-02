import React, { useContext } from "react";
import classes from "./mealitem.module.css";
import MealItemForm from "./mealitemform";
import cartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartstore = useContext(cartContext);

  const price = `$${props.item.price.toFixed(2)}`;

  const mealItemSubmitHandler = (amount) => {
    var item = {
      ...props.item,
      amount: +amount,
    };
    cartstore.addCartItem(item);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.item.id} onsubmit={mealItemSubmitHandler} />
      </div>
    </li>
  );
};

export default MealItem;
