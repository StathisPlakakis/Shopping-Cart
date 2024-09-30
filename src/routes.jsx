import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
        path:"shop",
        element: <Shop/>
      },
    ]
  },
]

export default routes;