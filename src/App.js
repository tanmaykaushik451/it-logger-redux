import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Searchbar from "./components/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import Store from "./store/Store";

const App = () => {
  React.useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={Store}>
      <>
        <nav>
          <Searchbar />
        </nav>
        <main>
          <div className="container">
            <AddBtn />
            <AddLogModal />
            <EditLogModal />
            <AddTechModal />
            <TechListModal />
            <Logs />
          </div>
        </main>
      </>
    </Provider>
  );
};
export default App;
