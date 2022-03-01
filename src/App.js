import './App.css';
import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import CartPage from "./pages/cart-page/cart-page";
import ProductPage from "./pages/product-page/product-page";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <div className="content-wrapper">
        <div className="App wrapper">
          <Header/>
          <div className="content">
             <Switch>
                 <Route path="/" exact>
                     <HomePage/>
                 </Route>
                 <Route path="/cart" exact>
                     <CartPage/>
                 </Route>
                 <Route path="/product/:idProduct" exact>
                     <ProductPage />
                 </Route>
             </Switch>
          </div>
        </div>
  </div>
  );
}

export default App;
