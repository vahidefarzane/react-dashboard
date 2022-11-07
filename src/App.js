import "./App.css";
import SideBar from "./Component/SideBar/SideBar";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
        <SideBar />
      <div className="main">
        <Header />
      </div>
    </>
  );
}

export default App;
