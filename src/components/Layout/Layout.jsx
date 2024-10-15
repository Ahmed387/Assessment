import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
export default function Layout() {
  return (
    <>
      <div className="container mx-auto  ">
        <Outlet />
      </div>
    </>
  );
}
