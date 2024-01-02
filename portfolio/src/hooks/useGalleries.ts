import { GalleryQuery } from "../components/pages/gallery/galllery-grid-layout";
import useData from "./useData";

export interface Gallery {
  id: string;
  name: string;
  background_image: string;
}

const useGalleries = () => useData<Gallery>("/games");

console.log("USE GALLERIES");
export default useGalleries;
