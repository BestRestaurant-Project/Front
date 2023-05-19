import propTypes from "prop-types";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function Store({ type, name, storeId, starRating, foodType }) {
  return (
    <ListGroup id={storeId} variant="flush">
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
        action
        href={`/restaurant/${storeId}`}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <h5>{name}</h5>
          </div>
          {starRating}
        </div>
        <Badge bg="dark" pill>
          {foodType}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

Store.propTypes = {
  storeId: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  starRating: propTypes.number.isRequired,
  foodType: propTypes.string,
};

export default Store;
