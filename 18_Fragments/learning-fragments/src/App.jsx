import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let EmptyMessage =
  //   foodItems.length === 0 ? <h1>I am Still hungry.</h1> : null;
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
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
