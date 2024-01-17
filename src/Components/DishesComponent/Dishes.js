import React from "react";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";
import dishesData from "../../data/dishesData";
import Dish from "./Dish";

const Dishes = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div>
      {dishesData
      .filter(dish => {
        if (selectedCategory === 'ALL') return true;
        return selectedCategory === dish.category;
      })
      .map((dish, id) => (
        <Dish key={id} dish={dish} />
      ))}
    </div>
  );
};

export default Dishes;
