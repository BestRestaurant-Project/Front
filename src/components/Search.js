import React, { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import Store from "./Store";

function Search({ stores }) {
  const [userInput, setUserInput] = useState("");

  const searched = stores.filter((store) => {
    return store.name.includes(userInput);
  });

  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="가게 검색"
          />
          <Button type="button" variant="outline-secondary">
            검색
          </Button>
        </InputGroup>
      </Form>
      {searched.map((item) => (
        <Store
          key={item.storeId}
          type={item.type}
          name={item.name}
          storeId={item.storeId}
          starRating={item.starRating}
          foodType={item.foodType}
        />
      ))}
    </div>
  );
}

export default Search;
