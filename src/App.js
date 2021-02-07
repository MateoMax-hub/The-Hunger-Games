import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './fontawesome.js'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/Home";
import Movie from "./routes/movie/Movie";

function App() {
  return (
    <>
      <Router>
        <Header/>

        <Switch>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/movie/:idMovie">
            <Movie/>
          </Route>

        </Switch>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
