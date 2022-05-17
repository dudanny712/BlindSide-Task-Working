import ReactDOM  from "react-dom";
import React from 'react'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import 'react-lazy-load-image-component/src/effects/blur.css'
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
<Provider store={store}>
<BrowserRouter>   
<App/>
</BrowserRouter>
</Provider>,
 
document.getElementById('root'));