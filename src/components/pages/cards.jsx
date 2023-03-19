import React from "react";

const Cards = ({ data }) => {
  return (
    <div className=" mx-5 shadow p-3 mb-5 bg-white rounded ">
      <div className="d-flex flex-column justify-content-center">
        <h1>{data}</h1>
      </div>
    </div>
  );
};

export default Cards;
