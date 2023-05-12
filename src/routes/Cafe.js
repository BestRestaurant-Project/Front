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
      <StoreList storeData={cafeList.data} />
    </div>
  );
}

export default Cafe;
