import React, { useState } from "react";
import Input from "./Input";
import { Contenedor } from "./StylesComponentes";



const Formulario = ({ handleSubmit }) => {
  const [dataForm, setdataForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    pais: "",
    departamento: "",
    ciudad: "",
  });

  const handleChangeInput = (event) => {
    const data = event.target.value;
    const type = event.target.name;
    setdataForm({ ...dataForm, [type]: data });
  };

  return (
    <div className="text-center flex  flex-col  justify-center">
      <Contenedor className="my-5">
        <Input
          value={dataForm.nombre}
          name="nombre"
          placeholder="digite su nombre"
          handleChangeInput={handleChangeInput}
          className="mx-2"
        />
        <Input
          value={dataForm.telefono}
          name="telefono"
          type="number"
          placeholder="Digite su telefono"
          handleChangeInput={handleChangeInput}
        />
        <Input
          value={dataForm.direccion}
          name="direccion"
          placeholder="Digite su direccion"
          handleChangeInput={handleChangeInput}
        />

        <Input
          value={dataForm.pais}
          name="pais"
          placeholder="Digite su pais"
          handleChangeInput={handleChangeInput}
        />
      <Input
        value={dataForm.departamento}
        name="departamento"
        placeholder="departamento"
        handleChangeInput={handleChangeInput}
      />
      </Contenedor>
      <button className="mt-4" onClick={() => handleSubmit(dataForm)}>
        Enviar
      </button>
    </div>
  );
};

export default Formulario;
