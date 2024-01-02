import useGalleries from "../../hooks/useGalleries";
import { GalleryQuery } from "../pages/gallery/galllery-grid-layout";
import GalleryGridItem from "./gallery-grid-item";
import { Row } from "react-bootstrap";

interface Props {
  galleryQuery: GalleryQuery;
}

const GalleryGrid = ({ galleryQuery }: Props) => {
  const { data, error, isLoading } = useGalleries();

  return (
    <>
      {error && <div>{error}</div>}
      <Row xs={1} md={2} lg={3} className="g-4 align-items-middle">
        {data.map((result: any) => (
          <GalleryGridItem
            key={result.id}
            name={result.name}
            thumbnail={result.background_image}
          />
        ))}
      </Row>
    </>
  );
};

export default GalleryGrid;
