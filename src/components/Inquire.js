import propTypes from "prop-types";
import Button from "react-bootstrap/Button";

const Inquire = ({ type }) => {
  function inquireType() {
    if (type === "restaurant") {
      return "식당";
    } else if (type === "cafe") {
      return "카페";
    }
  }
  return (
    <div className="d-grid gap-2">
      <Button variant="secondary" size="lg" href={`/${type}`}>
        {inquireType()}
      </Button>
    </div>
  );
};

Inquire.propTypes = {
  type: propTypes.string.isRequired,
};

export default Inquire;
