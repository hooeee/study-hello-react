import Form from "react-bootstrap/Form";

export default function SwitchButton({ label, checked, onChange }) {
    return (
        <div>
            <Form>
                <Form.Check type="switch" id="custom-switch" label={label} checked={checked} onChange={onChange} />
            </Form>
        </div>
    );
}
