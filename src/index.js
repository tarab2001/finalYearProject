import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Layout from './pages/layout';
import Home from './pages/home';
import Booking from './pages/booking';
import Pricing from './pages/pricing';
import 'tw-elements';


export default function App() {
  //return routes
  return (
    <BrowserRouter>
    <Layout />
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
