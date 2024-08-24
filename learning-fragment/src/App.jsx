import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItem from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container.jsx";
import FoodInput from "./components/FoodInput.jsx";

function App() {

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
      if (event.key === 'Enter') {
          let newFoodItem = event.target.value;
          event.target.value = "";
          let newItems = [...foodItems, newFoodItem];
          setFoodItems(newItems);
      }
  }
  return (
    <Container>
      <h1 className={"food-heading"}>Healthy Food</h1>
      <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItem items={foodItems}></FoodItem>
    </Container>
  );
}

export default App;
