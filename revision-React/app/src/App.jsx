import React from "react";


function Component2() {
  return(
    <>
    <img src="https://i.mdel.net/i/db/thumbs/otm/400x/2026/08/mathilde.jpg" alt="" />
    </>
  )
}
function Component() {
  return (
    <div>
      <Component2 />
      <h1>Sanjay kapoor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
        perspiciatis molestiae ratione, reiciendis aperiam ullam dignissimos
        cupiditate recusandae, ex odio corporis. Praesentium magnam nostrum
        placeat vero ea nemo maxime natus.
      </p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Component />
      <Component />
    </div>
  );
};

export default App;
