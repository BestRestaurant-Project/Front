import Nav from "react-bootstrap/Nav";

function StoreNav({ storeType }) {
  return (
    <>
      <h3>
        <p className="text-center mt-4 mb-4">
          {storeType === "restaurant" ? "식당 목록" : "카페 목록"}
        </p>
      </h3>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} href="/">
            홈
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {storeType === "restaurant" ? (
            <Nav.Link style={{ color: "black" }} href="/cafe">
              카페 목록
            </Nav.Link>
          ) : (
            <Nav.Link style={{ color: "black" }} href="/restaurant">
              식당 목록
            </Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </>
  );
}

export default StoreNav;
