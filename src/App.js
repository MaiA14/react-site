import React from "react";
import global from "../src/assets/styles/global.scss";
import InsightApp from "../src/pages/InsightApp";
import InsightPage from "../src/pages/InsightPage";
import UnderConstructionPage from "../src/pages/UnderConstructionPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <main>
          <Router history={history}>
            <Switch>
              <Route component={InsightApp} path="/" exact></Route>
              <Route component={InsightApp} path="/insights" exact></Route>
              <Route component={InsightPage} path="/insights/:id" exact></Route>
              <Route
                component={UnderConstructionPage}
                path="/under-construction"
                exact
              ></Route>
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
