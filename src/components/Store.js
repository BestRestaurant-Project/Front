import propTypes from "prop-types";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function Store({ name, type, storeId, ratingAverage, foodType }) {
  return (
    <ListGroup id={storeId} variant="flush">
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
        action
        href={`/${type}/${storeId}`}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <h5>{name}</h5>
          </div>
          {ratingAverage}
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
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  ratingAverage: propTypes.number.isRequired,
  foodType: propTypes.string,
};

export default Store;
