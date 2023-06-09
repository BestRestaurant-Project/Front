import Store from "./Store";
import { useEffect, useReducer } from "react";
import axios from "axios";
import Search from "./Search";

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

function StoreListForm({ storeType }) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchStores = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        `http://localhost:3000/data/stores/${storeType}.json`
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const { loading, data: stores, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!stores) return null;

  return (
    <div>
      {stores.map((store) => (
        <Store
          key={store.storeId}
          type={store.type}
          name={store.name}
          storeId={store.storeId}
          starRating={store.starRating}
          foodType={store.foodType}
        />
      ))}
    </div>
  );
}

export default StoreListForm;
