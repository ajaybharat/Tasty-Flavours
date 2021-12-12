import React, { useEffect, useState } from "react";
import classes from "./allmeals.module.css";
import Card from "../UI/Card";
import MealItem from "./Mealitems/mealitem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Biryani",
//     description: "Finest rice and veggies",
//     price: 227.99,
//   },
//   {
//     id: "m2",
//     name: "Dosas",
//     description: "A South Indian specialty!",
//     price: 267.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, potato",
//     price: 125.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 189.99,
//   },
// ];

const AllMeals = (props) => {
  const [DUMMY_MEALS, setDumyMeals] = useState([]);
  const [isLoading, setisloading] = useState(true);
  const [error, seterror] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://practice-6367c-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      // console.log(response);
      const responsejson = await response.json();
      // console.log(responsejson);
      const loadedData = [];
      for (var key in responsejson) {
        loadedData.push({
          id: key,
          name: responsejson[key].name,
          description: responsejson[key].description,
          price: responsejson[key].price,
        });
      }
      setDumyMeals(loadedData);
      setisloading(false);
    };
    fetchData().catch((error) => {
      console.log(error);
      setisloading(false);
      seterror(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>...Loading</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.mealsError}>
        <p>{error}</p>
      </section>
    );
  }
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
