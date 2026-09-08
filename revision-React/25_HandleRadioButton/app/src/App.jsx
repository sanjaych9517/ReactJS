import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  const genders = ["male", "female", "other"];
  console.log(gender);

  return (
    <>
      {genders.map((item) => {
        return (
          <label key={item} htmlFor={item}>
            <input
              type="radio"
              id={item}
              name="gender"
              value={item}
              checked={gender === item}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            {item}
          </label>
        );
      })}
    </>
  );
}
export default App;
