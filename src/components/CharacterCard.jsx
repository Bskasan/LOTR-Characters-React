import React, { useState } from "react";
import { Card } from "react-bootstrap";

const CharacterCard = ({ name, img, info }) => {
  const [showImg, setShowImg] = useState(true);

  const handleClick = () => {
    setShowImg(!showImg);
  };

  return (
    <Card
      onClick={handleClick}
      className="rounded-2 m-auto player-card"
      role="button"
    >
      {showImg ? (
        <Card.Img className="player-img" variant="top" src={img} />
      ) : (
        <div className="m-auto p-4">
          <p>{info}</p>
        </div>
      )}
    </Card>
  );
};

export default CharacterCard;
