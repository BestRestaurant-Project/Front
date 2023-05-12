import Inquire from "../components/Inquire";
import UserSign from "../components/UserSign";
import Stack from "react-bootstrap/Stack";

function Home() {
  return (
    <div>
      <br />
      <h1>
        <span>단대맛집</span>
      </h1>
      <p>
        <span>오늘 뭐 먹지? 고민하지 마~</span>
      </p>
      <p>
        <span>단국대 학생들을 위한 메뉴 추천 서비스</span>
      </p>
      <div className="d-grid gap-3">
        <Stack direction="horizontal" gap={2}>
          <UserSign sign={"signIn"} />
          <UserSign sign={"signUp"} />
        </Stack>
        <Stack direction="horizontal" gap={5}>
          <Inquire type={"restaurant"} />
          <Inquire type={"cafe"} />
        </Stack>
      </div>
    </div>
  );
}

export default Home;
