import { Link } from "react-router-dom";
import propTypes from "prop-types";
import Table from "react-bootstrap/Table";

function Store({ type, name, storeId, starRating, foodType }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{type} 이름</th>
          <th>카테고리</th>
          <th>별점</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link to={`/restaurant/${storeId}`}>{storeId}</Link>
          </td>
          <td>{name}</td>
          <td>{foodType}</td>
          <td>{starRating}</td>
        </tr>
      </tbody>
    </Table>
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
