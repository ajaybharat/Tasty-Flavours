import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Tasty Flavours</h1>
        <HeaderCartButton onClick={props.onClickCartButton} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of foods!" />
      </div>
    </React.Fragment>
  );
};

export default Layout;
