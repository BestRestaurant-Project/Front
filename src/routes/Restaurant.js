import StoreList from "../components/StoreList";
import Search from "../components/Search";
import Nav from "react-bootstrap/Nav";

function Restaurant() {
  return (
    <div className="white__block">
      <h3>
        <p className="text-center mt-4 mb-4">식당 목록</p>
      </h3>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/">홈</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cafe">카페 목록</Nav.Link>
        </Nav.Item>
      </Nav>

      <Search />

      <StoreList storeType="restaurant" />
    </div>
  );
}

export default Restaurant;
