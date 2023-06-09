import StoreList from "../components/StoreList";
import StoreNav from "../components/StoreNav";

function Restaurant() {
  return (
    <div className="white__block">
      <StoreNav storeType="restaurant" />
      <StoreList storeType="restaurant" />
    </div>
  );
}

export default Restaurant;
