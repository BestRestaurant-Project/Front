import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function UserSign({ sign }) {
  function signType() {
    if (sign === "signIn") {
      return "로그인";
    } else if (sign === "signUp") {
      return "회원가입";
    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  const userId = (event) => {
    setId(event.target.value);
  };
  const [password, setPassword] = useState("");
  const userPassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <Button variant="outline-secondary" size="sm" onClick={handleShow}>
        {signType()}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header>
            <Modal.Title>{signType()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="id"
                value={id}
                onChange={userId}
                placeholder="Enter nickname"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={userPassword}
                placeholder="Password"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              닫기
            </Button>
            <Button variant="primary" type="submit">
              {signType()}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default UserSign;
