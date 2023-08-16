import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";

function Layout() {
  return (
    <Container>
      <CustomNavbar/>
      <Outlet />
    </Container>
  );
}

export default Layout;
