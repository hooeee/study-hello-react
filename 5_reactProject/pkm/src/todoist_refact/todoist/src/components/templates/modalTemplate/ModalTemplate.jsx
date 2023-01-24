import { BodyModal, FooterModal, HeadModal } from "components/organisms";
import style from "./ModalTemplate.module.css";
import { Button } from "react-bootstrap";
import { ModalShow } from "components/atoms";
import { useState } from "react";

export function ModalTemplates() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      Modal Test Button
      </Button>
      <ModalShow
        show={modalShow}
        onHide={() => setModalShow(false)}
        Head={<HeadModal></HeadModal>}
        Body={<BodyModal></BodyModal>}
        Footer={<FooterModal></FooterModal>}
      ></ModalShow>
    </div>
  );
}
