import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {

let [activeItem, setActiveItems] = useState([]);
let onBuyButton = (item, event) =>{

}

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItem.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}

        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
