import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import Details from './Pages/Details/Details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/details/:projectId">
              <Details></Details>

            </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
