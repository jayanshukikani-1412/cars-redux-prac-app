import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../Store/Slices/CarsSlice";

const CardList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { searchTerm, data } }) => {
    return data.filter((car) => {
      return(
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    });
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => {
            handleCarDelete(car);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{renderedCars}</div>;
};

export default CardList;
