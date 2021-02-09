import { React , useEffect , useState} from "react";
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
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [usersComments, setUsersComments] = useState([]);
  const [page, setPage] = useState(1)
  const [backward, setBackward] = useState(false)
  const [forward, setForward] = useState(false)
  const [commentsFiltered, setCommentsFiltered] = useState([])
  const [currentPage, setCurrentPage] = useState([])

  return (
    <>
      <Router>
        <Header/>

        <Switch>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/movie/:idMovie">
            <Movie setCurrentPage={setCurrentPage} currentPage={currentPage} commentsFiltered={commentsFiltered} setCommentsFiltered={setCommentsFiltered} setBackward={setBackward} backward={backward} setForward={setForward} forward={forward} page={page} setPage={setPage} users={users} setUsers={setUsers} comments={comments} setComments={setComments} photos={photos} setPhotos={setPhotos} usersComments={usersComments} setUsersComments={setUsersComments}/>
          </Route>

        </Switch>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
