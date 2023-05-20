import propTypes from "prop-types";
import Button from "react-bootstrap/Button";

const StoreType = ({ type }) => {
  return (
    <div className="d-grid gap-2">
      {type === "restaurant" ? (
        <Button variant="secondary" size="lg" href="/restaurant">
          식당
        </Button>
      ) : (
        <Button variant="secondary" size="lg" href="/cafe">
          카페
        </Button>
      )}
    </div>
  );
};

StoreType.propTypes = {
  type: propTypes.string.isRequired,
};

export default StoreType;
