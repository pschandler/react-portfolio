import create from "./http-service";
export interface Gallery {
  id: string;
  name: string;
  description: string;
  categories: string[];
  type: string;
}

export default create("/galleries");
