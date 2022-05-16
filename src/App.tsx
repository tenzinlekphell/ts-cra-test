import React, { FC } from "react";
import { Person } from "./components/Person";
import { DogBreed } from "./components/Person";

const App: FC = () => {
  return (
    <div>
      <p>Hello</p>
      <Person
        name="Tenzin"
        age={20}
        email="t@gmail.com"
        dogBreed={DogBreed.Cockapoo}
      />
    </div>
  );
};

export default App;
