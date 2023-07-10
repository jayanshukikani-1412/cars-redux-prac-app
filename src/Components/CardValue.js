import React from "react";
import { useSelector } from "react-redux";

const CardValue = () => {
  const totalCost = useSelector(({ cars: { searchTerm, data } }) => {
    return data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0);
  });
  return <div className="car-value">Total Cost : ${totalCost}</div>;
};

export default CardValue;
