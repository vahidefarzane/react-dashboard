import "./App.css";
import SideBar from "./Component/SideBar/SideBar";
import Header from "./Component/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <SideBar />
      <div className="main">
        <Header />
        {router}
      </div>
    </>
  );
}

export default App;
