import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export const Form_add_network = () => {
  const [mensaje, setMensaje] = useState(" ");
  const sendServer = async (datos) => {
    const response = await fetch("http://localhost:3333/networkweb/create", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const datosResponse = await response.json();
    setMensaje(JSON.stringify(datosResponse))
  }

  const mutation = useMutation(sendServer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit = (data) => {
    mutation.mutate(data);
  };
  return (<div className="container text-light">
    <div className='network-container bg-dark mt-2 p-3'>
      <form onSubmit={handleSubmit((data) => submit(data))}>
        <div className="form-group mb-3">
          <label for="net_num">Network number</label>
          <input
            type="number"
            id="net_num"
            className="form-control"
            defaultValue="1989"
            {...register("network", { required: true })}
          />
        </div>
        <div className="form-group mb-3">
          <label for="node_num">Node Number</label>
          <input
            type="number"
            id="node_num"
            className="form-control"
            defaultValue="1"
            {...register("node", { required: true })}
          />
        </div>
        <div className="form-group mb-3">
          <label for="met_acc">Metamask account</label>
          <input
            type="text"
            id="met_acc"
            className="form-control"
            defaultValue="0bD7e56e2216450828E127ad2235B77e52C0fcb2"
            {...register("metamaskid", { required: true })}
          />
        </div>
        <div className="form-group mb-3">
          <label for="met_port">Metamask Port</label>
          <input
            type="number"
            id="met_port"
            className="form-control"
            defaultValue="9000"
            {...register("metamaskport", { required: true })}
          />
        </div>
        <div className="form-group mb-3">
          <label for="chain_id">Chain ID</label>
          <input
            type="number"
            id="chain_id"
            className="form-control"
            defaultValue="10000"
            {...register("chainID", { required: true })}
          />
        </div>
        <input className="btn btn-primary my-2" type="submit" value="Crear red" />
      </form>
      {mensaje != "" ? 
      <p className="alert alert-success">
        Red creada correctamente!!! Datos: {mensaje}
        </p>
        :""}
      </div>
    </div>
  );
};
export default Form_add_network;
