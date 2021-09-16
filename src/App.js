import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminNav from "./Components/AdminNav/AdminNav";
import ManageShops from "./Pages/ManageShops/ManageShops";
import InputShops from "./Pages/InputShops/InputShops";
import HomeDiv from "./Components/HomeDiv/HomeDiv";
import HomePage from "./Pages/HomePage/HomePage";


function App() {
  return (
    <div>
      {/* <Navbar />
      <Slider />
      <HomeDiv/>
      <Footer />
  
      <AdminNav />
      <Dashboard />
      <ManageShops />
      <InputShops /> */}
 {/* <HomePage/> */}
 <LoginPage />
    </div>
  );
}

export default App;
