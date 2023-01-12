import { Button } from "react-bootstrap";
import "./Btn.css";
export function Btn({ btnName }) {
  return (
    <>
      <Button className="bg-main">{btnName}</Button>
    </>
  );
}
