import React, { useState } from "react";
import axios from "axios";

const CommentForm = ({ storeId, replyId, onCommentSubmit }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 로그인한 사용자의 정보를 얻어온다고 가정
    const userId = "사용자ID";

    try {
      const response = await axios.post(
        `http://localhost:3000/data/replies/${storeId}.json`,
        {
          replyId: replyId,
          storeId: storeId,
          content: comment,
          userId: userId,
        }
      );

      onCommentSubmit(response.data);

      setComment("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={handleCommentChange} />
      <button className="find-btn2" type="submit">
        댓글 작성
      </button>
    </form>
  );
};

export default CommentForm;
