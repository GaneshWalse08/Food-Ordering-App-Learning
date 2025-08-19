import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";













const App_layout = () => {
  return(
  <div>
  <Header />
  <Body />
  </div>
  )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App_layout />);