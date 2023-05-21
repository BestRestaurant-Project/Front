import StarRate from "../components/StarRate";
import { useState, useEffect } from "react";

function RestaurantDetail() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/restaurant.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStores(data);
      });
  }, []);
  console.log(stores);

  return (
    <div>
      <StarRate />
    </div>
  );
}

export default RestaurantDetail;
