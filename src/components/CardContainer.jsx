import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import data from "../helpers/data";
import CharacterCard from "./CharacterCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <div>
      <Form.Conrol
        placeholder="Search Character..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((character) =>
              character.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((character, i) => (
              <Col md={6} lg={4} xl={4} key={i}>
                <CharacterCard {...character} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
