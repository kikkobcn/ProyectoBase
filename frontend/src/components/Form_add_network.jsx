import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Form_add_network() {
  return (
    <form action="http://localhost:3333/network/create/7777/1" method="post">
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

export default Form_add_network;
