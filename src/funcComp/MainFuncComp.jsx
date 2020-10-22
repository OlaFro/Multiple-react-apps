import React from "react";

import FuncComp from "./FuncComp";
import TableComp from "./TableComp";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

export default function MainFuncComp() {
  const [users, setUsers] = React.useState([]);
  return (
    <div>
      <Router>
        <div>
          <Link to="/TableComp">Home</Link>
        </div>
        <div>
          <Link to="/FuncComp">Register</Link>
        </div>

        <Switch>
          <Route path="/FuncComp">
            <FuncComp users={users} setUsers={setUsers} />
          </Route>
          <Route path="/TableComp">
            <TableComp users={users} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
