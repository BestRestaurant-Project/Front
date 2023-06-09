import StoreList from "../components/StoreList";
import StoreNav from "../components/StoreNav";

function Cafe() {
  return (
    <div className="white__block">
      <StoreNav storeType="cafe" />
      <StoreList storeType="cafe" />
    </div>
  );
}

export default Cafe;
