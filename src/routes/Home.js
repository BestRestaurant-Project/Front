import Stack from "react-bootstrap/Stack";
import { Nav, Button } from "react-bootstrap";

const stores = ["restaurant", "cafe"];

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
        {stores.map((element, index) => (
          <div key={index} className="d-grid gap-2">
            {element === "restaurant" ? (
              <Button
                key={element}
                variant="secondary"
                size="lg"
                href="/restaurant"
              >
                식당
              </Button>
            ) : (
              <Button key={element} variant="secondary" size="lg" href="/cafe">
                카페
              </Button>
            )}
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
