import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Form_Faucet() {
  return (
    <Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">
            Insert Source Address
          </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          <Form.Label htmlFor="disabledTextInput">
            Insert Destiny Metamask Address
          </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default Form_Faucet;
