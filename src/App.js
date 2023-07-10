import React from "react";
import CardForm from "./Components/CardForm";
import CardSearch from "./Components/CardSearch";
import CardList from "./Components/CardList";
import CardValue from "./Components/CardValue";

const App = () => {
  return (
    <div>
      <CardForm />
      <CardSearch />
      <CardList />
      <CardValue />
    </div>
  );
};

export default App;
