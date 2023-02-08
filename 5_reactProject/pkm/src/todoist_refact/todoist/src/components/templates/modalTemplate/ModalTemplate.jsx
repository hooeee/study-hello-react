import { BodyModal, FooterModal, HeadModal } from "@components/organisms";
import style from "./ModalTemplate.module.css";
import { Button, ModalShow } from "@components/atoms";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "@store";

export function ModalTemplates() {
  // const [modalShow, setModalShow] = useState(false);
  const { modalShow } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const { projectCancel, setProjectCancel } = useStore();
  return (
    <div>
      <ModalShow
        show={projectCancel}
        headmodal={<HeadModal></HeadModal>}
        bodymodal={<BodyModal></BodyModal>}
        footermodal={<FooterModal></FooterModal>}
      ></ModalShow>
    </div>
  );
}
