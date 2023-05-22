import StoreList from "../components/StoreList";
import Search from "../components/Search";
import Nav from "react-bootstrap/Nav";

function Cafe() {
  return (
    <div>
      <h3>
        <p className="text-center mt-4 mb-4">카페 목록</p>
      </h3>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/">홈</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/restaurant">식당 목록</Nav.Link>
        </Nav.Item>
      </Nav>

      <Search />

      <StoreList storeType="cafe" />
    </div>
  );
}

export default Cafe;
