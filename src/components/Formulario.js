import React, { useState } from "react";
import Input from "./Input";
import SearchSelect from "./SearchSelect";

const initialStateDataFrom = {
  nombre: "",
  identificacion: "",
  telefono: "",
  direccion: "",
  departamento: "",
  ciudad: "",
  pais: "",
  id_ciudad: 0,
  id_pais: 0,
};

const Formulario = () => {
  const [dataForm, setdataForm] = useState(initialStateDataFrom);
  const [ciudad, setCiudad] = useState([]);
  const [pais, setPais] = useState([]);

  const handleSubmit = async (event, dataFrom) => {
    event.preventDefault();
    await fetch("http://localhost:3001/api/", {
      method: "POST",
      body: JSON.stringify(dataFrom),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        alert("Enviado Exitosamente");
        setdataForm(initialStateDataFrom);
      })
      .catch(() => alert("Ocurrio un error inesperado!!"));
  };

  const handleChangeInput = (event) => {
    const data = event.target.value;
    const type = event.target.name;

    setdataForm({ ...dataForm, [type]: data });
    switch (type) {
      case "ciudad":
        // setdataForm({ ...dataForm, ciudad: data });
        onChangeSearchApi(data, "c");
        break;
      case "pais":
        // setdataForm({ ...dataForm, pais: data });
        onChangeSearchApi(data, "p");

        break;
      default:
    }
  };

  const onChangeSearchApi = async (query, type) => {
    await fetch(`http://localhost:3001/api/${type}?q=${query}`)
      .then((res) => res.json())
      .then(({ data }) => (type === "c" ? setCiudad(data) : setPais(data)));
  };

  return (
    <form
      className="w-full max-w-lg "
      onSubmit={(event) => handleSubmit(event, dataForm)}
    >
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
        <SearchSelect
          SearchValue={dataForm.pais}
          setSearchValue={setdataForm}
          name="pais"
          elemtsLista={pais}
          handleChangeInput={handleChangeInput}
        />
        <Input
          title="departamento"
          name="departamento"
          placeholder="Digite la telefono"
          value={dataForm.departamento}
          handleChangeInput={handleChangeInput}
          type="text"
        />
        <SearchSelect
          SearchValue={dataForm.ciudad}
          setSearchValue={setdataForm}
          name="ciudad"
          elemtsLista={ciudad}
          handleChangeInput={handleChangeInput}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-2"></div>
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
