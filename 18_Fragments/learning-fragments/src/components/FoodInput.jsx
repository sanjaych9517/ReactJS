import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleonChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        className={styles.foodInput}
        placeholder="Enter Food Item here"
        onChange={handleonChange}
      />
    </>
  );
};

export default FoodInput;
