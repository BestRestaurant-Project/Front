import Inquire from "../components/Inquire";
import Stack from "react-bootstrap/Stack";

function Home() {
  return (
    <div>
      <h1>
        <p className="text-center mt-4 mb-4">단대맛집</p>
      </h1>
      <p className="text-center mt-4 mb-4">
        오늘 뭐 먹을지 고민하는 단국인들을 위한 맛집 정보 서비스
      </p>
      <Stack gap={2}>
        <Inquire type={"restaurant"} />
        <Inquire type={"cafe"} />
      </Stack>
    </div>
  );
}

export default Home;
