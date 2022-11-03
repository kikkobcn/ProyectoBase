import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export function Form_delete_network() {
  const [mensaje, setMensaje] = useState(" ");
  const sendServer = async (datos) => {
    const response = await fetch('http://localhost:3333/networkweb/delete', {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datosResponse = await response.json();
    setMensaje(JSON.stringify(datosResponse));
  };

  const mutation = useMutation(sendServer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit = (data) => {
    mutation.mutate(data);
  };
  return (
    <div className="container text-light">
    <div className='network-container bg-dark mt-2 p-3'>
      <form onSubmit={handleSubmit((data) => submit(data))}>
        <div className="mb-4">
          <label>Network number</label>
          <input
            type = "number"
            className="form-control"
            defaultValue="1989"
            {...register("network", { required: true })}
          />
        </div>
        <input className="btn btn-danger mb-4" type="submit" value="Borrar Red" />
      </form>
      {mensaje != "" ? <p className="alert alert-danger">Red eliminada:{mensaje}</p> : ""}
      </div>
    </div>
  );

}

export default Form_delete_network;
