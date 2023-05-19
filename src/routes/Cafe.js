import StoreList from "../components/StoreList";

function Cafe() {
  const cafeList = {
    result: "SUCCESS",
    data: [
      {
        storeId: 1,
        starRating: 5,
        name: "1319",
        type: "카페",
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
      <StoreList storeData={cafeList.data} />
    </div>
  );
}

export default Cafe;
