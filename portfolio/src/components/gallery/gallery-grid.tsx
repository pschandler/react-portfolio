import useGalleries from "../../hooks/useGalleries";
import { GalleryQuery } from "../pages/gallery/galllery-grid-layout";
import GalleryGridItem from "./gallery-grid-item";
import { Row } from "react-bootstrap";
import GalleryItemSkeleton from "./gallery-item-skeleton";

interface Props {
  galleryQuery: GalleryQuery;
}

const GalleryGrid = ({ galleryQuery }: Props) => {
  const { data, error, isLoading } = useGalleries(galleryQuery);
  const skeletons = ["1", "2", "3"];

  return (
    <>
      {error && (
        <div>
          <p className="danger">{error}</p>
        </div>
      )}
      <Row xs={1} md={2} lg={3} className="g-4 align-items-middle">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GalleryItemSkeleton key={skeleton}></GalleryItemSkeleton>
          ))}
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 align-items-middle">
        {data.map((result: any) => (
          <GalleryGridItem
            key={result.id}
            name={result.name}
            thumbnail={result.background_image}
            description={result.description}
          />
        ))}
      </Row>
    </>
  );
};

export default GalleryGrid;
