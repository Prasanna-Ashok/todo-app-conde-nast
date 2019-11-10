import React from "react";
import "./App.css";
import UserContextProvider from "./contexts/UserContext";
import Cards from "./components/Cards";
import Header from "./components/Header";
import NewUser from "./components/NewUser";
import SimplePieChart from "./components/Charts";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <UserContextProvider>
        <div className="container">
        <div className="row">
          <div className="col-md-10">
          <Cards />
          </div>
          <div className="col-md-2">
            <NewUser />
          </div>
        </div>
        </div>
        <SimplePieChart />
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
