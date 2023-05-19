import StoreList from "../components/StoreList";
import Search from "../components/Search";

function Restaurant() {
  const restaurantList = {
    result: "SUCCESS",
    data: [
      {
        storeId: 1,
        starRating: 5,
        name: "해피덮",
        type: "음식점",
        foodType: "양식",
      },
      {
        storeId: 2,
        starRating: 4.5,
        name: "백소정",
        type: "음식점",
        foodType: "일식",
      },
      {
        storeId: 3,
        starRating: 4.2,
        name: "단대골목",
        type: "음식점",
        foodType: "한식",
      },
    ],
  };
  return (
    <div>
      <h1>
        <p className="text-center mt-4 mb-4">
          <a href="/">단대맛집</a>
        </p>
      </h1>
      <Search />
      <StoreList storeData={restaurantList.data} />
    </div>
  );
}

export default Restaurant;
