import axios from "axios";
import useAsync from "./useAsync";
import Store from "./Store";
import Search from "../components/Search";
import Nav from "react-bootstrap/Nav";

function StoreListForm({ type, storeData }) {
  async function getStores() {
    const response = await axios.get(`/stores/${type}/get`);
    return response.data;
  }

  const [state, refetch] = useAsync(getStores, []);
  const { loading, data: stores, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!stores) return null;
  return (
    <div>
      <h3>
        <p className="text-center mt-4 mb-4">
          {type === "restaurant" ? "식당 목록" : "카페 목록"}
        </p>
      </h3>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/">홈</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {type === "restaurant" ? (
            <Nav.Link href="/cafe">카페 목록</Nav.Link>
          ) : (
            <Nav.Link href="/restaurant">식당 목록</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
      <Search />
      {stores.map((store) => (
        <Store
          key={store.storeId}
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
