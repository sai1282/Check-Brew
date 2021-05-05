import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import userHome from "./pages/home/UserHome";
import Promotion from "./pages/promotion/Promotion";
import News from "./pages/news/News";
import coffeeTips from "./pages/coffeeTips";
import aboutUs from "./pages/aboutUs";
import Login from "./pages/login/Login";
/* import React,{useState} from 'react'; */
import Bar from "./admin/admin_navBar";
//Admin Meun List pages
import OverView from './admin/shopOverView/overView';
import Products from './admin/product/Products';
import Order from './admin/order/order';
import CustomerList from './admin/employee/CustomerList';

//import Stock from './admin/inventory/stock';
import UserCart from './pages/home/UserCart/UserCart';


function App() {
  /* const [show,setShow]=useState(true) */
  return (
    <div className="app">

        <Router>
     
      <Navbar/>
        <Switch>
          <Route path='/' exact component={userHome}/>
          <Route path='/Promotion' component={Promotion}/>
          <Route path='/News' component={News}/>
          <Route path='/coffeeTips' component={coffeeTips}/>
          <Route path='/aboutUs' component={aboutUs}/>
          <Route path='/login' component={Login}/>
          <Route path='/UserCart' component={UserCart}/>
        </Switch>
      </Router>
    


{/*       <Router>
        <Bar />
        <Switch>
          <Route path="/overView">
            <OverView />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/customerList">
            <CustomerList />
          </Route>
          <Route path="/stock">
            <Stock />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
