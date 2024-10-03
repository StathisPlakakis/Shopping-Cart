import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
        path:"shop",
        element: <Shop/>,
        children: [
          {
            path:":name", 
            element:<Category/>,
            children: [
              {
                path:":name", 
                element:<Product/>,
              }
            ]
          }
        ]
      },
    ]
  },
]

export default routes;