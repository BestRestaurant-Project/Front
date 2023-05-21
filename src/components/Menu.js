import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function Menu({ storeId, foodId, name, cost }) {
  return (
    <ListGroup id={storeId} variant="flush">
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <h5>{name}</h5>
          </div>
          {cost}
        </div>
        <Badge bg="dark" pill>
          {foodId}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Menu;
