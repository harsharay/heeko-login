import Login from "./Components/Login/Login"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Login} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
