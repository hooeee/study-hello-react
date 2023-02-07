import { useState } from "react";
import style from "./AddProjectModal.module.css";

const AddProjectModal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? `${style.openModal} ${style.modal}` : style.modal}>
      {open ? (
        <section>
          <header>
            {header}
            <button className={style.close} onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className={style.close} onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default AddProjectModal;
