import axios from "axios";

// export default axios.create({
//   baseURL: "http://www.punchcodestudios.com/api",
//   params: {
//     key: "DSFSDFSDF",
//   },
// });

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "a7fbded39045470ea679403d134cc0d0",
  },
});
