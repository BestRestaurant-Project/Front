import React, { useState, useReducer } from "react";
import axios from "axios";
import styled from "styled-components";
import storage from "../lib/storage";

const initialState = {
  comment: "",
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
    case "COMMENT_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        comment: "",
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

const CommentForm = ({ storeId, onCommentSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    const { name, value } = event.target;
    dispatch({
      type: "CHANGE_FIELD",
      field: name,
      value: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { comment } = state;

    dispatch({ type: "COMMENT_START" });

    const tokens = storage.get("tokens");
    const accessToken = tokens.tokenDto.accessToken;
    console.log(accessToken);

    try {
      const response = await axios.post(
        //process.env.REACT_APP_HOST + `/reply/create`,
        `http://localhost:3000/data/replies/${storeId}.json`,
        {
          storeId,
          content: comment,
        },
        {
          headers: {
            Access_Token: accessToken,
          },
        }
      );
      dispatch({ type: "SUCCESS" });
      onCommentSubmit(response.data);
      setComment("");
    } catch (error) {
      dispatch({ type: "FAIL", error: error.message });
      console.error(error);
    }
  };

  const { content, loading, error } = state;
  console.log(comment);

  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <textarea
        className="comment"
        value={content}
        onChange={handleCommentChange}
        placeholder="후기를 남겨주세요."
      />
      <button className="comment__btn" type="submit" disabled={loading}>
        등록
      </button>
    </form>
  );
};

export default CommentForm;

const ErrorMessage = styled.p`
  color: red;
`;
