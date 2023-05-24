import { useState } from "react";
import CommentList from "./CommentList";

function Comment() {
  let [userName] = useState("cindy");
  let [comment, setComment] = useState("");
  let [feedComments, setFeedComments] = useState([]);
  let [isValid, setIsValid] = useState(false);

  let post = (e) => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment("");
  };

  return (
    <>
      <h2>
        <p className="mt-4 mb-4">댓글</p>
      </h2>
      <input
        type="text"
        className="inputComment"
        placeholder="리뷰를 남겨주세요"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        onKeyUp={(e) => {
          e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
        }}
        value={comment}
      />

      <button
        type="button"
        className={
          comment.length > 0 ? "submitCommentActive" : "submitCommentInactive"
        }
        onClick={post}
        disabled={isValid ? false : true}
      >
        등록
      </button>

      {feedComments.map((commentArr, i) => {
        return (
          <CommentList userName={userName} userComment={commentArr} key={i} />
        );
      })}
    </>
  );
}

export default Comment;
