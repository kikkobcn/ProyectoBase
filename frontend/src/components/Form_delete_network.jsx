import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import ReactDOM from "react-dom/client";

export function Form_delete_network() {
  return (
    <form action="http://localhost:3333/delete/network/1946" method="delete">
      <div>
        <button>Send Hardcoded</button>
      </div>
    </form>
  );
}

export default Form_delete_network;
