import propTypes from "prop-types";
import { Link } from "react-router-dom";
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
    <Button variant="outline-secondary" size="lg" type="button">
      <Link to={`/${type}`}>{inquireType()}</Link>
    </Button>
  );
};

Inquire.propTypes = {
  type: propTypes.string.isRequired,
};

export default Inquire;
