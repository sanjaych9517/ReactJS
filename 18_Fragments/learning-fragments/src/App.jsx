import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  let [textToShow, setTextState] = useState();
  

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list healthy food that are good for your health and well
          beinf
        </p>
      </Container> */}
    </>
  );
}
export default App;
