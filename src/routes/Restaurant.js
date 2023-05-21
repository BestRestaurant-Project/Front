import StoreListForm from "../components/StoreListForm";
import { useState, useEffect } from "react";

function Restaurant() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/restaurantData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStores(data);
      });
  }, []);

  return (
    <div>
      <StoreListForm type="restaurant" storeData={stores} />
    </div>
  );
}

export default Restaurant;
