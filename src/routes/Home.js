import StoreType from "../components/StoreType";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";

function Home() {
  return (
    <div>
      <h1>
        <p className="text-center mt-4 mb-4">단대맛집</p>
      </h1>
      <p className="text-center mt-4 mb-4">
        오늘 뭐 먹을지 고민하는 단국인들을 위한 맛집 정보 서비스
      </p>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/login">로그인</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/join">회원가입</Nav.Link>
        </Nav.Item>
      </Nav>
      <Stack gap={2}>
        <StoreType type={"restaurant"} />
        <StoreType type={"cafe"} />
      </Stack>
    </div>
  );
}

export default Home;
