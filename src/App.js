import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import Home from "./pages/Home/Home";
import store from './redux/store'

import './App.css';
import Profile from "./pages/Profile/Profile";
import ListArt from "./pages/ListArt/ListArt";
import BuyArt from "./pages/BuyArt/BuyArt";
import Galleries from "./pages/Galleries/Galleries";
import Exhibition from "./pages/Exhibition/Exhibition";

function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path='/list-art' element={<ListArt/>}/>
          <Route path='/buy-art' element={<BuyArt/>}/>
          <Route path='/galleries' element={<Galleries/>}/>
          <Route path='/exhibition' element={<Exhibition/>}/>
        </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
