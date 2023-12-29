import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "./app.scss";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./components/routing/app.routing";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element!);

const router = createBrowserRouter(routes);

root.render(<RouterProvider router={router}></RouterProvider>);
