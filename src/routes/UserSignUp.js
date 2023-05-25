import UserSignForm from "../components/UserSignForm";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* 내가 설정해놓은 paltte 에서 2번째 회색을 쓰겠어 */
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: #e3ece5;
  border-radius: 2px;
`;

function UserSignUp() {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">단대맛집</Link>
        </div>
        <UserSignForm type="join" />
      </WhiteBox>
    </AuthTemplateBlock>
  );
}

export default UserSignUp;
