import React from "react";
import { Card, Button, Col } from "react-bootstrap";

interface Props {
  name: string;
  thumbnail: string;
}

const GalleryGridItem = ({ name, thumbnail }: Props) => {
  return (
    <Col>
      <Card className="m-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Description : Some quick example text to build on the card title and
            make up the bulk of the card's content.
          </Card.Text>
          <hr />
          <Card.Text>Type: type</Card.Text>
          <Button variant="secondary">Go to Gallery</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GalleryGridItem;
