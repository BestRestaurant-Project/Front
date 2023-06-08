import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import oc from "open-color";
import storage from "../lib/storage";

const initialState = {
  userName: "",
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
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        userName: "",
        password: "",
      };
    case "FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const UserSignForm = ({ type, locateion }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

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

    const { userName, password } = state;

    dispatch({ type: "REGISTER_START" });

    if (type === "login") {
      try {
        // 로그인 요청
        const response = await axios.post(
          process.env.REACT_APP_HOST + `/user/signIn`,
          {
            userName,
            password,
          }
        );
        // 토큰을 얻어와 로컬에 저장하고 가져옴
        storage.set("tokens", response.data.data);
        const tokens = storage.get("tokens");
        const accessToken = tokens.tokenDto.accessToken;

        // 토큰을 헤더에 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        dispatch({ type: "SUCCESS", payload: accessToken });
        if (response.data.result === "SUCCESS") {
          console.log(response.data.data);
          history.push("/");
        }
      } catch (error) {
        dispatch({ type: "FAIL", error: error.message });
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post(
          process.env.REACT_APP_HOST + `/user/signUp`,
          {
            userName,
            password,
          }
        );

        dispatch({ type: "SUCCESS" });
        if (response.data.result === "SUCCESS") {
          console.log(response.data);
          history.push("/login");
        }
      } catch (error) {
        dispatch({ type: "FAIL", error: error.message });
        console.error(error);
      }
    }
  };

  const { userName, password, loading, error } = state;

  return (
    <AuthFormBlock>
      <FormContainer>
        <Title>{type === "login" ? "로그인" : "회원가입"}</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="userName"
            value={userName}
            placeholder="사용자명"
            onChange={handleChange}
          />
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
