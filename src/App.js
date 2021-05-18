import Todos from "./components/Todos"
import ColorModeContainer from "./components/ColorModeContainer"
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ColorModeContainer>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/todos">
              <Todo />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/404">
              <NoMatch />
            </Route>
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </div>
      </ColorModeContainer>
    </Router>
  )
}

function Home() {
  useEffect(() => {
    document.title = "Home"
  }, [])

  return <h2>Home</h2>
}
function Todo() {
  useEffect(() => {
    document.title = "Todos"
  }, [])

  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
      <Todos />
    </div>
  )
}
function Login() {
  useEffect(() => {
    document.title = "Login"
  }, [])

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Login</h1>
      <div className="mb-3 row d-flex justify-content-center">
        <label htmlFor="Email" className="col-sm-1 col-form-label">Email</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="Email" placeholder="email@example.com" />
        </div>
      </div>
      <div className="mb-3 row d-flex justify-content-center">
        <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Password</label>
        <div className="col-sm-4">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
    </div>
  )
}

function NoMatch() {

  useEffect(() => {
    document.title = "404 Page not found"
  }, [])

  return (
    <div className="text-center text-danger">
      <h2>
        Error 404
      </h2>
    </div >
  );
}

export default App
