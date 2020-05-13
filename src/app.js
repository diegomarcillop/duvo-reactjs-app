import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Error404 from "./components/error404";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Course from "./pages/Course"; 
import MyCourses from "./pages/MyCourses";
 
const routes = [
  {
    path: "/",
    component: Home,
    exact: "true",
  },
  {
    path: "/signin",
    component: Auth,
    exact: "true",
  },
  {
    path: "/signup",
    component: Auth,
    exact: "true",
  },
  {
    path: "/courses",
    component: Course,
    exact: "true",
  },
  {
    path: "/course/add",
    component: Course,
    exact: "true",
  },
  {
    path: "/course/index",
    component: Course,
    exact: "true",
  },
  {
    path: "exercises",
  },
  {
    path: "/my-courses",
    component: MyCourses,
    exact: "true"
  },
  {
    component: Error404,
  },
];

function App() {
  return (
    <div>
      <Helmet>
        <title>Duvo</title>
      </Helmet>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export default App;
