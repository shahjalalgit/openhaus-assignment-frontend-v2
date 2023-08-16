import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Gallery = lazy(() => import("../pages/Gallery"));
function CustomRouterProvider() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/gallery",
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <Gallery />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default CustomRouterProvider;
