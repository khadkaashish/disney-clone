import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  isRouteErrorResponse,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<></>} />
          <Route
            path="/detail/:id"
            element={
              <>
                <Detail />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


//FIREBASE HOSTING

// Project Console: https://console.firebase.google.com/project/disney-clone-51109/overview
// Hosting URL: https://disney-clone-51109.web.app