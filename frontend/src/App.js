import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Products_screen from "./components/Products_screen";
import Home from "./screens/Home";
import Login from "./Login";
import Checkout from "./screens/Checkout";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      {/* <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} /> */}
      <main className="app">
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/pre" component={Login} />
          {/* <Route exact path="/pre" component={HomeScreen} /> */}
          <Route exact path="/products" component={Products_screen} />
           {/* <Route exact path="/products" component={Login} /> */}
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
