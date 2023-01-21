import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ProjectAddPage } from './components/pages/ProjectAddPage';

function Test() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
   <>
      <Button variant="secondary" onClick={handleShow}>
        프로젝트 추가하기
      </Button>

      <Modal show={show} onHide={handleClose}>
      <ProjectAddPage></ProjectAddPage>

      </Modal>
    </>
    </div>
  );
}

export default Test;
