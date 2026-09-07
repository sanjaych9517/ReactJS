import { useRef } from "react";

const Basic = () => {
  const inputRef = useRef(null);

  function submit() {
    console.log(inputRef.current.value);
    console.log("kaam kare ga");
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter your name" /> <br />
      <br />
      <button onClick={submit}>Submit</button> <br />
      <br />
    </div>
  );
};

export default Basic;
