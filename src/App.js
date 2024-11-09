import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name ? props.name : "No Name"),
    React.createElement(
      "p",
      {},
      props.description ? props.description : "No Description",
    ),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza 1",
      description: "Some pizza 0",
    }),

    React.createElement(Pizza, {
      name: "Pepperoni Pizza 2",
      description: "Some pizza 1",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza 3",
      description: "Some pizza 2",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza 4",
      description: "Some pizza 3",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza 5",
      description: "Some pizza 4",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza 6",
      description: "Some pizza 5",
    }),
    // React.createElement(Pizza),
  ]);
};

const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
const root = createRoot(container);
root.render(React.createElement(App));
