import Item from "./Item";
import {useState} from "react";

const FoodItem = ({ items }) => {

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  }

  return (
    <ul className="list-group">
        {items.map((item) => (
        <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)} handleBuyFoodItem={() => onBuyButton(item, event)}></Item>
      ))}
    </ul>
  );
};

export default FoodItem;
