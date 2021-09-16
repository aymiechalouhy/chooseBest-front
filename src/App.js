import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminNav from "./Components/AdminNav/AdminNav";
import ManageShops from "./Pages/ManageShops/ManageShops";
import InputShops from "./Pages/InputShops/InputShops";


function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <LoginPage />
      <Footer />
      <AdminNav />
      <Dashboard />
      <ManageShops />
      <InputShops />
 
      
    </div>
  );
}

export default App;
