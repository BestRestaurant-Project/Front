import { useEffect, useReducer } from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

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

function Review({ storeId }) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchReply = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        `http://localhost:3000/data/replies/${storeId}.json`
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchReply();
  }, []);

  const { loading, data: reply, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!reply) return null;

  return (
    <>
      <h2>
        <p className="mt-4 mb-4">댓글</p>
      </h2>
      {reply.map((element) => (
        <ListGroup key={element.replyId} id={element.replyId} variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h5>{element.userName}</h5>
              </div>
              {element.content}
            </div>
            <Badge bg="dark" pill>
              {element.dateTime}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default Review;
