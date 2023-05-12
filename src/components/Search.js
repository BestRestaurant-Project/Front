import { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";

function Search() {
  const [word, setWord] = useState("");
  const onChange = (event) => {
    setWord(event.target.value);
  };
  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            value={word}
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
