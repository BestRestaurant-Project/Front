import StarRate from "../components/StarRate";
import StoreDetail from "../components/StoreDetail";
import { useState, useEffect } from "react";

function RestaurantDetail() {
  const [stores, setStores] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/restaurant.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStores(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data/restaurant-menu.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);
  console.log(stores);
  console.log(menu);

  return (
    <div>
      <StoreDetail menu={menu} />
      <StarRate />
    </div>
  );
}

export default RestaurantDetail;
