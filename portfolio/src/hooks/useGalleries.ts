import { GalleryQuery } from "../queries/gallery-query";
import useData from "./useData";

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Gallery {
  id: string;
  name: string;
  description: string;
  categories: { category: Category }[];
  type: string;
}

const useGalleries = (galleryQuery: GalleryQuery) =>
  useData<Gallery>(
    "/games",
    {
      params: {
        id: galleryQuery?.id,
        name: galleryQuery.name,
        description: galleryQuery.description,
        categories: galleryQuery.categories,
        type: galleryQuery.type,
      },
    },
    [galleryQuery]
  );

export default useGalleries;
