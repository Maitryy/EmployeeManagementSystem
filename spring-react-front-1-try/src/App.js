import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <div >
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route exact path="/" component= {ListEmployeeComponent} />
              <Route exact path="/employees" component= {ListEmployeeComponent} />
              <Route exact path="/add-employee" component= {CreateEmployeeComponent} />
              {/* <ListEmployeeComponent /> */}
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
