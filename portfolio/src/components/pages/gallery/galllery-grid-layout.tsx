import { useState } from "react";
import GalleryGrid from "../../gallery/gallery-grid";

export interface GalleryQuery {
  sortOrder: string;
  searchText: string;
}

const GalleryGridLayout = () => {
  const [galleryQuery, setGalleryQuery] = useState<GalleryQuery>(
    {} as GalleryQuery
  );
  return <GalleryGrid galleryQuery={galleryQuery} />;
};

export default GalleryGridLayout;
