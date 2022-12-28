import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./component/Booking";
import OrderDetails from "./component/OrderDetails";
import StripePayment from "./component/StripePayment";
import Success from "./component/Success";
import Cancel from "./component/Cancel";
import Hotelbooking from "./component/Hotelbooking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/order" element={<OrderDetails />} />
        <Route path="/hotel" element={<Hotelbooking />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/booknow" element={<StripePayment />} />
        <Route path="/" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
