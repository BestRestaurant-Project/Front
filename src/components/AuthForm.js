import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AuthForm = ({ type }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <h3>
        <p className="text-center mt-4 mb-4">
          {type === "signup" ? "회원가입" : "로그인"}
        </p>
      </h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>아이디</Form.Label>
          <Form.Control required type="text" placeholder="닉네임" />
          {type === "signup" && (
            <Form.Check
              required
              label="닉네임 중복 확인"
              feedback="사용 가능한 닉네임인지 확인해주세요."
              feedbackType="invalid"
            />
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control required type="number" placeholder="숫자 4자리" />
        </Form.Group>
        {type === "signup" && (
          <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="숫자 4자리 확인"
            />
          </Form.Group>
        )}
        <Button variant="primary" type="submit">
          {type === "signup" ? "회원가입" : "로그인"}
        </Button>
      </Form>
    </div>
  );
};

export default AuthForm;
