import StoreListForm from "../components/StoreListForm";

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
      <StoreListForm storeType="cafe" storeData={cafeList.data} />
    </div>
  );
}

export default Cafe;
