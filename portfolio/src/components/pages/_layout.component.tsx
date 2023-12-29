import { Outlet } from "react-router-dom";
import MainNavComponent from "../navigation/main-nav/main-nav.component";

function LayoutComponent() {
  return (
    <div className="container">
      <MainNavComponent />
      <main className="main-content d-flex flex-column">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
export default LayoutComponent;
