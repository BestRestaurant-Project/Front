import { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";

function Search() {
  const [userInput, setUserInput] = useState("");
  const onChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };
  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={userInput}
            onChange={onChange}
            placeholder="가게/메뉴검색"
          />
          <Button type="submit" variant="outline-secondary">
            검색
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default Search;
