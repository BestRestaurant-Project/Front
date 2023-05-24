import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

function StarRate() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // api 연동
  };

  return (
    <div>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="30"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && "yellowStar"}
            />
          );
        })}
      </Stars>
      <Button variant="primary">평가하기</Button>
    </div>
  );
}

export default StarRate;

const Stars = styled.div`
  display: flex;
  padding-top: 3px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
