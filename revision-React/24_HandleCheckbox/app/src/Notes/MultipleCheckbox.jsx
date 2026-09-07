import { useState } from "react";

function App() {
  const [isHtml, setIsHtml] = useState(false);
const [isCss, setIsCss] = useState(false);
const [isJS, setIsJS] = useState(false);

  
  return (
    <>
      <label htmlFor="html">
        <input
          type="checkbox"
          id="html"
          checked={isHtml}
          onChange={(e) => setIsHtml(e.target.checked)}
        />
        Html
      </label>

      <br />
      <br />

      <label htmlFor="css">
        <input
          type="checkbox"
          id="css"
          checked={isCss}
          onChange={(e) => setIsCss(e.target.checked)}
        />
        CSS
      </label>

      <br />
      <br />

      <label htmlFor="cb">
        <input type="checkbox" 
        id="cb"
        checked={isJS} 
         onChange={(e) => setIsJS(e.target.checked)} />
        Java Script
      </label>
    </>
  );
}

export default App;
