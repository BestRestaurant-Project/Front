import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import oc from "open-color";
import UserNameCheck from "./UserNameCheck";

const initialState = {
  username: "",
  password: "",
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "REGISTER_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        username: "",
        password: "",
        email: "",
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const UserSignForm = ({ type }) => {
  const [nameCheck, setNameCheck] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "CHANGE_FIELD",
      field: name,
      value: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = state;

    dispatch({ type: "REGISTER_START" });

    try {
      // 회원가입 요청
      const response = await axios.post("/api/register", {
        username,
        password,
      });

      dispatch({ type: "SUCCESS" });

      console.log(response.data); // 성공적으로 회원가입된 사용자 정보
    } catch (error) {
      dispatch({ type: "FAIL", error: error.message });
      console.error(error);
    }
  };

  const { username, password, loading, error } = state;

  return (
    <AuthFormBlock>
      <FormContainer>
        <Title>{type === "login" ? "로그인" : "회원가입"}</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            value={username}
            placeholder="사용자명"
            onChange={handleChange}
          />
          {type === "join" ? (
            <UserNameCheck checked={nameCheck} onChange={setNameCheck}>
              사용자명 중복확인
            </UserNameCheck>
          ) : null}
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <SubmitButton type="submit" disabled={loading}>
            {type === "login" ? "로그인" : "가입하기"}
          </SubmitButton>
        </Form>
        <Footer>
          {type === "login" ? (
            <Link to="/join">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </FormContainer>
    </AuthFormBlock>
  );
};

export default UserSignForm;

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
  }
`;

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${oc.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${oc.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: 1px solid ${oc.gray[6]};
    text-decoration: underline;
    &:hover {
      color: 1px solid ${oc.gray[9]};
    }
  }
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 10px;
  background-color: #4d6f53;
  color: white;
  border: none;
  cursor: pointer;
`;
