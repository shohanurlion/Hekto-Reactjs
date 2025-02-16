import { createBrowserRouter } from "react-router-dom";
import Roote from "../Roote/Roote";
import { Home } from "../Page/Home/Home";
import Products from "../Page/Products/Products";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import Contact from "../Page/Contact/Contact";
import NotFound from "../Page/Not-Found/NotFound";
import Login from "../Page/Login/Login";
import Billingcard from "../Page/Billingcard/Billingcard";
import Shoping from "../Page/Shoping/Shoping";
import Blogpages from "../Page/Blog/Blogpages/Blogpages";
import Singleblog from "../Page/Blog/Singleblog/Singleblog";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Roote></Roote>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        }, 
        {
            path: "/products",
            element:<Products></Products>,
          }, 
          {
            path: "/productsdetails/:id",
            element:<ProductDetails></ProductDetails>,
          }, 
          {
            path: "contact",
            element:<Contact></Contact>,
          }, 
          {
            path: "notfound",
            element:<NotFound></NotFound>,
          }, 
          {
            path: "login",
            element:<Login></Login>,
          }, 
          {
            path: "billing",
            element:<Billingcard></Billingcard>,
          },
          {
            path: "shoping",
            element:<Shoping></Shoping>,
          },
          {
            path: "blog",
            element:<Blogpages></Blogpages>,
          },
           {
            path: "/Singleblog/:id",
            element:<Singleblog></Singleblog>,
          }
      ],
    },
  ]);
  export default router