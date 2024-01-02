import axios from "axios";

// export default axios.create({
//   baseURL: "http://www.punchcodestudios.com/api",
//   params: {
//     key: "DSFSDFSDF",
//   },
// });

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "83cfa136c49640d1865f3b761f393d7b",
  },
});
