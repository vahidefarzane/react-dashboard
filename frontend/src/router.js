import Products from "./Component/Products/Products";
import Comments from "./Component/Comments/Comments";
import Users from "./Component/Users/Users";
import Orders from "./Component/Orders/Orders";
import Offs from "./Component/Offs/Offs";
import Home from "./Component/Home/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/offs", element: <Offs /> },
];

export default routes