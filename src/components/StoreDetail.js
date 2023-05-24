import Menu from "./Menu";
import Comment from "./Comment";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "./Review";
import StarRate from "./StarRate";

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

function StoreDetail({ type }) {
  const { storeId } = useParams();
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchStore = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        `http://localhost:3000/data/${type}/${storeId}.json`
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchStore();
  }, []);

  const { loading, data: store, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!store) return null;

  const thisStore = store[0];

  return (
    <div>
      <h1>
        <p className="text-center mt-4 mb-4">{thisStore.name}</p>
      </h1>
      <p className="text-center mt-4 mb-4">평점: {thisStore.ratingAverage}</p>
      <Menu storeId={thisStore.storeId} />
      <StarRate />
      <Comment />
      <Review storeId={thisStore.storeId} />
    </div>
  );
}

export default StoreDetail;
