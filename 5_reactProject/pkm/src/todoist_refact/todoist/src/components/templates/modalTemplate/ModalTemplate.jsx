import { BodyModal, FooterModal, HeadModal } from "components/organisms";
import style from "./ModalTemplate.module.css";
import { Button, ModalShow } from "components/atoms";
import { setModalShow } from "./../../../store/store";
import { useDispatch, useSelector } from "react-redux";

export function ModalTemplates() {
  // const [modalShow, setModalShow] = useState(false);
  const { modalShow } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <ModalShow
        show={modalShow}
        onHide={() => dispatch(setModalShow())}
        headmodal={<HeadModal></HeadModal>}
        bodymodal={<BodyModal></BodyModal>}
        footermodal={<FooterModal></FooterModal>}
      ></ModalShow>
    </div>
  );
}
