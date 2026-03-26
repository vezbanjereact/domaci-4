import { useState } from "react";
import "./App.css";

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
            <div className="flex flex-col gap-y-3 text-center">
              <label htmlFor="city">City:</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                id="city"
                type="text"
                className="border border-gray-500 rounded-md w-100 py-2 text-center"
              />
            </div>

            <div className="flex flex-col gap-y-3 text-center">
              <label htmlFor="country">Country:</label>
              <input
                onChange={(e) => setCountry(e.target.value)}
                id="country"
                type="text"
                className="border border-gray-500 rounded-md w-100 py-2 text-center"
              />
            </div>

            <div className="flex flex-col gap-y-3 text-center">
              <label htmlFor="temperature">Temperature:</label>
              <input
                onChange={(e) => setTemperature(e.target.value)}
                id="temperature"
                type="number"
                max={50}
                className="border border-gray-500 rounded-md w-100 py-2 text-center"
              />
            </div>

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
