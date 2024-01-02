import React from "react";
import { Card, Button, Col } from "react-bootstrap";

interface Props {
  idx: string;
  name: string;
}

const GalleryGridItem = ({ idx, name }: Props) => {
  return (
    <Col key={idx}>
      <Card className="m-5" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="http://www.punchcodestudios.com/images/gallery.png"
        />
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
