import Menu from "../components/Menu";

function StoreDetail({ menu }) {
  return (
    <div>
      {menu.map((element) => (
        <Menu
          key={element.foodId}
          name={element.name}
          storeId={element.storeId}
          foodId={element.foodId}
          cost={element.cost}
        />
      ))}
    </div>
  );
}

export default StoreDetail;
