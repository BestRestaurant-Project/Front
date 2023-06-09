import Stack from "react-bootstrap/Stack";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const stores = ["restaurant", "cafe"];

function Home() {
  return (
    <div className="white__block">
      <h1>
        <p className="text-center mt-4 mb-4">단대맛집</p>
      </h1>
      <p className="text-center mt-4 mb-4">
        오늘 뭐 먹을지 고민하는 단국인들을 위한 맛집 정보 서비스
      </p>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} href="/login">
            로그인
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} href="/join">
            회원가입
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Stack gap={2}>
        {stores.map((element, index) => (
          <div className="find-btn" key={index}>
            {element === "restaurant" ? (
              <button className="find-btn1" key={element}>
                <Link style={{ color: "white" }} to="/restaurant">
                  <h4>식당</h4>
                </Link>
              </button>
            ) : (
              <button className="find-btn1" key={element}>
                <Link style={{ color: "white" }} to="/cafe">
                  <h4>카페</h4>
                </Link>
              </button>
            )}
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
