import React from "react";
import Cards from "./cards";
import Homepage from "./homepage";
import NavBar from "./navbar";

function Landing() {
  let card_data = ["1", "2", "3", "4", "5"];
  return (
    <>
      <NavBar />
      <Homepage />
      {card_data.map((data) => (
        <Cards data={data} />
      ))}
    </>
  );
}

export default Landing;
