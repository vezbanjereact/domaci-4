import { useState } from "react";
import "./App.css";
import InputField from "./InputField";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [informations, setInformations] = useState([]);

  const onSubmit = () => {
    console.log(city, country, temperature);

    setInformations([
      ...informations,
      {
        city: city,
        country: country,
        temperature: temperature,
      },
    ]);
    console.log(informations);
  };

  return (
    <>
      <div className="flex justify-center items-center my-20">
        <div className="px-40 py-20 border border-black">
          <div className="flex flex-col items-center gap-y-10 ">
            <InputField
              id="city"
              title="City"
              setMethod={setCity}
              type="text"
            />

            <InputField
              id="country"
              title="Country"
              setMethod={setCountry}
              type="text"
            />

            <InputField
              id="temperature"
              title="Temperature"
              setMethod={setTemperature}
              type="number"
            />

            <button
              onClick={() => onSubmit()}
              className="w-50 border bg-black text-white py-2 hover:border-black hover:bg-white hover:text-black"
            >
              ADD
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-5 text-2xl font-bold">
        {informations.map((information, key) => {
          return (
            <p key={key}>
              {information.city} in {information.country} has temperature:{" "}
              {information.temperature}&deg;C
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
