import React from "react";
import { H1Title } from "../components/StylesComponentes";
import Formulario from "../components/Formulario";

const Home = () => {

  return (
    <div className=" flex flex-col justify-center start-animation">
      <section className="my-2 md:mt-10">
        <div
          className="container flex  flex-col md:flex-row items-center justify-center px-6 mx-auto
         mt-10 md:space-y-0"
        >
          <div className="flex flex-col justify-center space-y-12 md:w-5/3 sm:items-center">
            <H1Title className="mb-5 md:mb-0">
              Formulario de Ingreso de Clientes
            </H1Title>
          </div>
          <Formulario  />
        </div>
      </section>
    </div>
  );
};

export default Home;
