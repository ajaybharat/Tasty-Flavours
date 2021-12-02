import React from "react";
import classes from "./allmeals.module.css";
import Card from "../UI/Card";
import MealItem from "./Mealitems/mealitem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Finest rice and veggies",
    price: 227.99,
  },
  {
    id: "m2",
    name: "Dosas",
    description: "A South Indian specialty!",
    price: 267.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, potato",
    price: 125.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 189.99,
  },
];

const AllMeals = (props) => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((each) => (
          <MealItem key={each.id} item={each} />
        ))}
      </ul>
    </Card>
  );
};

export default AllMeals;
