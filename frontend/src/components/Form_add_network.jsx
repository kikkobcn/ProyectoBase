import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Form_add_network() {
  return (
    <Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Chain ID</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          <Form.Label htmlFor="disabledTextInput">
            Metamask Account sin 0x
          </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          <Form.Label htmlFor="disabledTextInput">Network Name</Form.Label>
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

export default Form_add_network;
