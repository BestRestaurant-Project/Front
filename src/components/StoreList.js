import Store from "./Store";
import Search from "../components/Search";
import { Link } from "react-router-dom";

function StoreList({ storeData }) {
  return (
    <div>
      <br />
      <h1>
        <span>
          <Link to="/">단대맛집</Link>
        </span>
      </h1>
      <Search text={"가게/카테고리 검색"} />
      <br />
      <div>
        {storeData.map((store) => (
          <Store
            key={store.storeId}
            type={store.type}
            name={store.name}
            storeId={store.storeId}
            starRating={store.starRating}
            foodType={store.foodType}
          />
        ))}
      </div>
    </div>
  );
}

export default StoreList;
