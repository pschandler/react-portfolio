import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import GalleryGridItem from "./gallery-grid-item";
import { Row } from "react-bootstrap";

interface Gallery {
  id: string;
  name: string;
}

interface FetchGalleryResponse {
  count: number;
  results: Gallery[];
}

const GalleryGrid = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGalleryResponse>("/gamdfgs")
      .then((res) => setGalleries(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      <Row xs={1} md={2} lg={3} className="g-4 align-items-middle">
        {galleries.map((gallery) => (
          <GalleryGridItem idx={gallery.id} name={gallery.name} />
        ))}
      </Row>
    </>
  );
};

export default GalleryGrid;
