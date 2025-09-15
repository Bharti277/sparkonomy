import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import IncomeTrend from "./components/IncomeTrend";
import Invoices from "./components/Invoices";
import Navbar from "./components/Navbar";
import TotalEarning from "./components/TotalEarning";

function App() {
  return (
    <div className="bg-[rgba(255,221,218,0.54)]">
      <Navbar />
      <Dashboard />
      <div className=" md:flex md:justify-center md:items-center">
        <TotalEarning />
        <IncomeTrend />
      </div>
      <Invoices />
      <Footer />
    </div>
  );
}

export default App;
