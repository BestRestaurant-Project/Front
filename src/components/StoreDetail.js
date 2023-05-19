import { useParams } from "react-router-dom";

function StoreDetail({ storeData }) {
  const { storeId } = useParams();
  return (
    <div>
      <br />
      <h1>
        <p className="text-center mt-4 mb-4">{storeData[storeId - 1].name}</p>
      </h1>
      <ul>
        <li>
          <h5>{storeData[storeId - 1].foodType}</h5>
        </li>
        <li>
          <h5>별점: {storeData[storeId - 1].starRating}</h5>
        </li>
      </ul>
    </div>
  );
}

export default StoreDetail;
