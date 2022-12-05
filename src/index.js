import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Layout from './pages/layout';
import Home from './pages/home';
import Booking from './pages/booking';
import Confirmation from './pages/confirmation';
import Pricing from './pages/pricing';
//import firebase from './firebase';


export default function App() {
  return (
    <BrowserRouter>
    <Layout />
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
