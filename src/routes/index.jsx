import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import { Home } from '../pages';

function CustomRouterProvider() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default CustomRouterProvider