import Form from "react-bootstrap/Form";

export default function SwitchButton({ label }) {
    return (
        <div>
            <Form>
                <Form.Check type="switch" id="custom-switch" label={label} />
            </Form>
        </div>
    );
}
