import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const CommentList = ({ storeId }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const [comments, setComments] = useState([]);

  const fetchReviews = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        process.env.REACT_APP_HOST + `/replies/${storeId}`
        //`http://localhost:3000/data/replies/${storeId}.json`
      );
      setComments(response.data);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { loading, data: reviews, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!reviews) return null;

  const handleCommentSubmit = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div>
      <h2>
        <p className="mt-4 mb-4">댓글</p>
      </h2>
      <ul className="small__block">
        <CommentForm storeId={storeId} onCommentSubmit={handleCommentSubmit} />
        {comments.data.map((comment) => (
          <>
            <li className="comment__block" key={comment.replyId}>
              <span className="id__font">{comment.userName}</span>
              <span>&nbsp;&nbsp;{comment.content}</span>
              <p className="right">{comment.dateTime}</p>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
