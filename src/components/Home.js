import React from "react";
import { H1Title } from "../components/StylesComponentes";
import Formulario from "./Formulario";

const Home = () => {
  const handleSubmit = async (data) => {
    const res = { ciudad: "ams" };

    
    await fetch("http://localhost:3001/", {
      method: "GET",
      body: JSON.stringify(res),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    // .then((data) => console.log(data));
  };
  return (
    <div className=" flex flex-col justify-center">
      <section className="my-2">
        <div
          className="container flex  flex-col md:flex-row items-center justify-center px-6 mx-auto
         mt-10 md:space-y-0"
        >
          {/* left item */}
          <div className="flex flex-col justify-center space-y-12 md:w-1/2 sm:items-center">
            <H1Title className="mb-5 md:mb-0">
              Formulario de Ingreso de productos
            </H1Title>
          </div>
          <Formulario handleSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default Home;
