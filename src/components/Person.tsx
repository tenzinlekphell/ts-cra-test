import { FC, useState, ChangeEvent } from "react";

export enum DogBreed {
  Cockapoo = "Cute dog",
  Shipoo = "Small dog",
  GermanSheppard = "Bold and brave dog",
}

interface Props {
  name?: string;
  age?: number;
  email?: string;
  location?: string;
  priceOfDog?: number;
  dogBreed?: DogBreed;
  //getName: (name: string) => string;
}

export const Person: FC<Props> = ({ name, age, email, dogBreed }) => {
  const [country, setCountry] = useState<string | null>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{email}</p>
      <input type="text" onChange={handleChange} />
      <p>{dogBreed}</p>
    </div>
  );
};
