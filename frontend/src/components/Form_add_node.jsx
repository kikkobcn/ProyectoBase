import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export const Form_add_node = () => {
  const [mensaje, setMensaje] = useState(" ");
  const sendServer = async (datos) => {
    const response = await fetch("http://localhost:3333/node/add", {
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
        <div>
          <label>Network number</label>
          <input
            className='form-control'
            defaultValue="1989"
            {...register('network', { required: true })}
          />
        </div>
        <div>
          <label>Node Number</label>
          <input
            className='form-control'
            defaultValue="1"
            {...register('node', { required: true })}
          />
        </div>
        <input className="btn btn-primary my-2" type="submit" value="Añadir nodo" />
      </form>
      {mensaje != "" ? <p className="alert alert-success">{mensaje}</p> : ""}
    </div>
  </div>
  )
}
export default Form_add_node;
