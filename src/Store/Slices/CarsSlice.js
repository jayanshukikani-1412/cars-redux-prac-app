import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state,action){
        // action.payload = { name:'', cost:1 },
        state.cars.push({
            id: nanoid,
            name:action.payload.name,
            cost:action.payload.cost
        })
    },
    removeCar(state,action){
        // action.payload = the id of the car we want to remove
        const updated = state.cars.filter((car)=>{
            return car.id !== action.payload
        })
        state.cars = updated;
    }
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const { carsReducer } = carsSlice.reducer;