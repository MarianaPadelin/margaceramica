import { Outlet } from "react-router-dom"
import { Navegacion } from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { Divider } from "@mui/material";


const Layouts = () => {
  return (
    <>
      <Navegacion />
      <Divider />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layouts