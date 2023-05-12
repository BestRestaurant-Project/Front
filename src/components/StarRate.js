import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function StarRate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        평가하기
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header>
            <Modal.Title>별점</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>평가하기</Form.Label>
            <Form.Range />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              닫기
            </Button>
            <Button variant="primary" type="submit">
              평가
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default StarRate;
