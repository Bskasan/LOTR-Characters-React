import React from "react";
import { Container, Image } from "react-bootstrap";
import TheLOTRImage from "../assets/TheLOTR-Image.jpg";

const Header = () => {
  return (
    <Container>
      <Image src={TheLOTRImage} width="300px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">The Lord Of the Rings Characters</h1>
    </Container>
  );
};

export default Header;
