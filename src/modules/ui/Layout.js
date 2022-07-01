import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar />

      <div className="view__container">
        <Outlet />
      </div>
    </>
  );
};
