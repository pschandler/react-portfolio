import { GalleryQuery } from "../components/pages/gallery/galllery-grid-layout";
import useData from "./useData";

export interface Gallery {
  id: string;
  name: string;
  background_image: string;
  description: string;
}

const useGalleries = (galleryQuery: GalleryQuery) =>
  useData<Gallery>("/games", {}, [galleryQuery]);

export default useGalleries;
