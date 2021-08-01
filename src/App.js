import "./App.css";
import Home from "./View/Home";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Signin from "./View/Authentication/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
import About from './View/About';
import Register from './View/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/about" component={About} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
