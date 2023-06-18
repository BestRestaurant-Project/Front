import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useReducer } from "react";
import axios from "axios";

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

function Menu({ storeId }) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchMenu = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        process.env.REACT_APP_HOST + `/foods/${storeId}/get`
        //`http://localhost:3000/data/foods/${storeId}.json`
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const { loading, data: menu, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!menu) return null;

  return (
    <>
      <h2>
        <p className="mt-4 mb-4">메뉴</p>
      </h2>
      {menu.data.map((element) => (
        <ListGroup key={element.foodId} variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h5>{element.foodName}</h5>
              </div>
              {element.price}원
            </div>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default Menu;
