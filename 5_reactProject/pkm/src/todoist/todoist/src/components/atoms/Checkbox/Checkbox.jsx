import { Form } from "react-bootstrap";

export function Checkbox({ name }) {
  return (
    <>
      <Form>
        <div className="mb-1">
          <Form.Check type={name} id={`${name}`} label={`${name}`} />
        </div>
      </Form>
    </>
  );
}
