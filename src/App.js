import MoviesState from "./context/movies/MoviesState";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MyList from "./components/MyList";
import Home from "./components/Home";
import Movie from "./components/Movie";

const App = () => {
  return (
    <MoviesState>
      <Router>
        <Navbar />
        <main className='py-3'>
          <div className='container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/my-list' component={MyList} />
            <Route exact path='/movie/:id' component={Movie} />
          </div>
        </main>
      </Router>
    </MoviesState>
  );
};

export default App;
