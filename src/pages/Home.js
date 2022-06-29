import React from "react";
import { H1Title } from "../components/StylesComponentes";
import Formulario from "../components/Formulario";

const Home = () => {
  const handleSubmit =  (event) => {
    event.preventDefault();
  };
  return (
    <div className=" flex flex-col justify-center start-animation">
      <section className="my-2 md:mt-10">
        <div
          className="container flex  flex-col md:flex-row items-center justify-center px-6 mx-auto
         mt-10 md:space-y-0"
        >
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
