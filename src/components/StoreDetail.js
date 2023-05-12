import { useParams } from "react-router-dom";

function StoreDetail({ storeData }) {
  const { storeId } = useParams();
  return (
    <div>
      <br />
      <h1>
        <span>{storeData[storeId - 1].name}</span>
      </h1>
      <ul>
        <li>{storeData[storeId - 1].foodType}</li>
        <li>별점: {storeData[storeId - 1].starRating}</li>
      </ul>
    </div>
  );
}

export default StoreDetail;
