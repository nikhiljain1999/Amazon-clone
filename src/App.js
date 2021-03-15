import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/checkout" strict>
            <Header />
            <Checkout />
            
            
          </Route>
          <Route path="/login" strict>
           
            <Login/>
            
            
          </Route>
          <Route path="/" >
            <Header />
            <Home />
          </Route>
          </Switch>

      </div>
    </Router>

  );
}

export default App;
