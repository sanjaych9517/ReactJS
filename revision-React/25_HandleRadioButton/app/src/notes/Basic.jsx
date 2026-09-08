import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  console.log(gender);
  return (
    <>
      {/* MALE */}
      <label htmlFor="male">
        <input
          type="radio"
          id="male"
          name="gender"
          value={"male"}
          checked={gender === "male"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Male
      </label>
      <br />
      <br />
      {/* FEMALE */}

      <label htmlFor="female">
        <input
          type="radio"
          id="female"
          name="gender"
          value={"female"}
          checked={gender === "female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Female
      </label>

      {/* other */}
      <br />
      <br />
      <label htmlFor="other">
        <input
          type="radio"
          id="other"
          name="gender"
          value={"other"}
          checked={gender === "other"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Other
      </label>
    </>
  );
}

export default App;
