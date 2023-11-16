import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from '../pages/Home';
import Products from '../pages/Products';
import Favorites from '../pages/Favorites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/favorites",
        element: <Favorites />
      }
    ]
  }

]);

export default router;