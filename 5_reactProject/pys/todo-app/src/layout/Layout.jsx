import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "components/organisms";
import { Manage, Today } from "pages/";
import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export function Layout() {
  const { sidebar } = useSelector((state) => {
    return state;
  });
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.center}>
        <div
          className={
            sidebar
              ? `${style.sidebar} ${style.sidebar_open}`
              : `${style.sidebar} ${style.sidebar_close}`
          }
        >
          <Sidebar />
        </div>
        <div className={style.main}>
          <Outlet />
          <MyVerticallyCenteredModal show={show} onHide={handleClose} />
        </div>
      </div>
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn_close"
          variant="secondary"
          onClick={props.onHide}
        >
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
