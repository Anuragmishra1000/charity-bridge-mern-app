import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PaymentSuccess from "./components/PaymentSuccess";
import About from "./components/About";





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
    </Routes>
  )
}

export default App;
