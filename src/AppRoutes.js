import React, { useEffect }  from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";

function Home() {
  return (
    <h1>This is home page</h1>
  );
}

function About() {
  return (
    <h1>This is about page</h1>
  );
}

function Contact() {
  return (
    <h1>This is contact page</h1>
  );
}

const AppRoutes = ({ hideMenu }) => {
  const location = useLocation();
    useEffect(() => {
    hideMenu();
  }, [hideMenu, location]);

  return (
    <div className='container'>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default AppRoutes;

// 
