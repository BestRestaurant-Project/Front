import Store from "./Store";

function StoreList({ storeData }) {
  return (
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
  );
}

export default StoreList;
