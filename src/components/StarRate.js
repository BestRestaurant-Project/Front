import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";
import storage from "../lib/storage";

const ARRAY = [0, 1, 2, 3, 4];

function StarRate({ storeId }) {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const sendReview = async (event) => {
    let score = clicked.filter(Boolean).length;
    console.log(score);

    const tokens = storage.get("tokens");
    const accessToken = tokens.tokenDto.accessToken;
    console.log(accessToken);

    const response = await axios.post(
      process.env.REACT_APP_HOST + `/starrating/evaluate`,
      {
        storeId,
        ratingValue: score,
      },
      {
        headers: {
          Access_Token: accessToken,
        },
      }
    );
    console.log(response.data);
    window.location.reload();
  };

  return (
    <div>
      <h2>
        <p className="mt-4">별점</p>
      </h2>
      <Stars className="small__block">
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
        <button className="find-btn2" type="submit" onClick={sendReview}>
          평가하기
        </button>
      </Stars>
    </div>
  );
}

export default StarRate;

const Stars = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

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
