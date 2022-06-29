import React, { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";
const Formulario = ({ handleSubmit }) => {
  const [dataForm, setdataForm] = useState({
    nombre: "",
    identificacion: "",
    telefono: "",
    direccion: "",
    departamento: "",
    ciudad: "",
  });

  const [pais, setPais] = useState([]);
  const [ciudad, setCiudad] = useState([]);
  const [searchCiudad, setsearchCiudad] = useState("");
  // const handleSelection = (event) => {
  //   const data = event.target.value;
  //   const name = event.target.name;
  //   console.log(name, data);
  // };
  const handleChangeInput = (event) => {
    const data = event.target.value;
    const type = event.target.name;

    switch (type) {
      case "ciudad":
        setdataForm({ ...dataForm, ciudad: data });
        onChangeCiudad(data);
        break;
      case "pais":
        setPais(data);

        break;

      default:
        setdataForm({ ...dataForm, [type]: data });
    }
  };

  const onChangeCiudad = async (query) => {
    console.log(query);
    await fetch(`http://localhost:3001/api/c?q=${query}`)
      .then((res) => res.json())
      .then(({ data }) => setCiudad(data));
  };

  return (
    <form className="w-full max-w-lg " onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          title="Nombre"
          name="nombre"
          placeholder="Digite el nombre"
          value={dataForm.nombre}
          handleChangeInput={handleChangeInput}
        />
        <Input
          title="Identificacion"
          name="identificacion"
          placeholder="Digite la identificacion"
          value={dataForm.identificacion}
          handleChangeInput={handleChangeInput}
          type="number"
        />
        <Input
          title="Telefono o Movil"
          name="telefono"
          placeholder="Digite la telefono"
          value={dataForm.telefono}
          handleChangeInput={handleChangeInput}
          type="number"
        />
        <Input
          title="Direccion de recidencia"
          name="direccion"
          placeholder="Digite la direccion"
          value={dataForm.direccion}
          handleChangeInput={handleChangeInput}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Ciudad
          </label>
          <input
            onChange={handleChangeInput}
            name="ciudad"
            value={dataForm.ciudad}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
          />
          <select
            multiple
            className="bg-color5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {ciudad.map(({ name, id }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </>
      </div>
      <div className="flex flex-col items-center">
        <button className="rounded-full grow w-1/2 p-2 text-3xl bg-color5 text-white md:mt-5 active drop-shadow-2xl">
          Enviar
        </button>
      </div>
    </form>
  );
};

// <Select title="Departamento" handleSelect={handleSelection} />
// <Select title="Ciudad" handleSelect={handleSelection} />

export default Formulario;
