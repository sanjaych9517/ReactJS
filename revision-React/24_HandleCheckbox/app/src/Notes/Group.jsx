import { useState } from "react";

function App() {
  const [isGroup, setIsGroup] = useState({
    html: false,
    css: false,
    js: false,
  });

  const handleChange = (e) =>{
const key = (e.target.name)

 setIsGroup({
...isGroup, [key] : e.target.checked
})
};

  return (
    <>
      <label htmlFor="html">
        <input
          type="checkbox"
          id="html"
          name="html"
          checked={isGroup.html}
          onChange={handleChange}
        />
        Html
      </label>

      <br />
      <br />

      <label htmlFor="css">
        <input
          type="checkbox"
          id="css"
          name="css"
          checked={isGroup.css}
          onChange={handleChange}
        />
        CSS
      </label>

      <br />
      <br />

      <label htmlFor="cb">
        <input
          type="checkbox"
          id="cb"
          name="js"
          checked={isGroup.js}
          onChange={handleChange}
        />
        Java Script
      </label>
    </>
  );
}

export default App;
