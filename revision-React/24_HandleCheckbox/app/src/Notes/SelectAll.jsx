import { useState } from "react";

function App() {
  const [isGroup, setIsGroup] = useState({
    html: false,
    css: false,
    js: false,
  });

  const handleChange = (e) => {
    const key = e.target.name;

    setIsGroup({
      ...isGroup,
      [key]: e.target.checked,
    });
  };

  const isAllChecked = Object.values(isGroup).every((item) => item === true);
  console.log(isAllChecked);

  return (
    <>
      {/* select all */}
      <label htmlFor="sa">
        <input
          type="checkbox"
          id="sa"
          name="html"
          checked={isAllChecked}
          onChange={(e) =>
            setIsGroup({
              html: e.target.checked,
              css: e.target.checked,
              js: e.target.checked,
            })
          }
        />
        Select All
      </label>
      <br />
      <br />
      {/* HTML */}

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
      {/* CSS */}
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
      {/* JS */}
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
