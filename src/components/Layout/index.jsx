import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Container>
      <h1 className="d-flex justify-content-center ">Welcome to app</h1>
      <Outlet />
    </Container>
  );
}

export default Layout;
