import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export const Form_delete_node = () => {
  const [mensaje, setMensaje] = useState(" ");
  const sendServer = async (datos) => {
    const response = await fetch("http://localhost:3333/node/delete", {
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
  return (<div>
    {mensaje != "" ? <p className="alert alert-danger">{mensaje}</p>:""}
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
        <input type="submit" value="borrar" />
      </form>
    </div>
  )
}
export default Form_delete_node;