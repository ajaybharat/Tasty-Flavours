import React from "react";
import MealDescription from "./mealdescription";
import AllMeals from "./allmeals";

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealDescription />
      <AllMeals />
    </React.Fragment>
  );
};

export default Meals;
