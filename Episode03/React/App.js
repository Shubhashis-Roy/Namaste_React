import React from "react";
import ReactDOM from "react-dom/client";

const jsx = <h1>React Element</h1>;

const Title = () => (
  <>
    <h1>Title</h1>
  </>
);

const HeadingComponant = () => (
  <div>
    <Title />
    {Title()}
    <Title></Title>
    <h1>Hello from FunctionalComponant</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponant />);
