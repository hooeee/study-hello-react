import { Form } from "react-bootstrap";

export function Checkbox({ id, label, checkedFlag, changeChecked }) {
  return (
    <>
      <Form>
        <div className="mb-1">
          <Form.Check
            type="checkbox"
            id={`${id}`}
            label={`${label}`}
            onClick={(e) => {
              console.log("!111");
              changeChecked(id);
            }}
            checked={checkedFlag}
          />
        </div>
      </Form>
    </>
  );
}
