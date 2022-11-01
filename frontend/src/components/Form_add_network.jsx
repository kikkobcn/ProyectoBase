import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import ReactDOM from "react-dom/client";

export function Form_add_network() {
  const [network, setNetwork] = useState("");
  const [node, setNode] = useState("");
  return (
    <form action="http://localhost:3333/network/create/" method="post">
      <label>
        Enter network name:
        <input
          type="text"
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
        />
      </label>
      <label>
        Enter node number:
        <input
          type="text"
          value={node}
          onChange={(e) => setNode(e.target.value)}
        />
      </label>
      <div>
        <button> Send Now</button>
      </div>
    </form>
    // <form action="http://localhost:3333/network/create/7777/1" method="post">
    //   <div>
    //     <button>Send</button>
    //   </div>
    // </form>
  );
}

export default Form_add_network;
