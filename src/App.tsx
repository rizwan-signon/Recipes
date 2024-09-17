import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./pages/Home";

const Content = React.lazy(() => import("./components/Content"));
const Details = React.lazy(() => import("./pages/Details"));
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to={"recipes"} />} />

          <Route
            path="recipes"
            element={
              <Suspense
                fallback={<div className="lazy_loading">Loading...</div>}
              >
                <Content />
              </Suspense>
            }
          />

          <Route
            path="/recipes/:id"
            element={
              <Suspense fallback={<div>details is loading wait a sec...</div>}>
                <Details />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
