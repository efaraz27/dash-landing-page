import React, { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart.js";
import TopCountries from "./components/TopCountries";
import Segmentation from "./components/Segmentation";
import Satisfaction from "./components/Satisfaction";
import AddComponent from "./components/AddComponent";
import jane from "./assets/jane.png";
import nadeem from "./assets/nadeem.png";
import john from "./assets/john.png";
import stonks from "./assets/trending-up.svg";
import notStonks from "./assets/trending-down.svg";
import { BsList } from "react-icons/bs";
import useWindowsDimensions from "./hooks/useWindowDimensions";

function App() {
  const { width } = useWindowsDimensions();
  const [open, setOpen] = useState(width < 800 ? false : true);
  return (
    <div className="App">
      {width < 800 && (
        <BsList
          color="#000"
          size={24}
          style={{ position: "absolute", top: "10px", left: "10px" }}
          onClick={() => setOpen(!open)}
        />
      )}
      {open && <Sidebar open={open} setOpen={setOpen} />}
      <div className="home">
        <div className="cards">
          <ProfileCard
            className="profile-card-1"
            pic={jane}
            trend={stonks}
            name={"Jane Smith"}
            value={"$3490.00"}
            up={true}
            progress={"30%"}
          />
          <ProfileCard
            className="profile-card-2"
            pic={nadeem}
            trend={notStonks}
            name={"Nadeen Isac"}
            value={"$490.00"}
            up={false}
            progress={"70%"}
          />
          <ProfileCard
            className="profile-card-3"
            pic={john}
            trend={stonks}
            name={"John K."}
            value={"$3490.00"}
            up={true}
            progress={"90%"}
          />
          <Chart className="chart-card" />
          <TopCountries />
          <Segmentation />
          <Satisfaction />
          <AddComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
