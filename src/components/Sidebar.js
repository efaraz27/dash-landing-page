import React from "react";
import "../styles/Sidebar.css";
import logo from "../assets/logo.svg";
import arrows from "../assets/arrows.svg";
import dashboard from "../assets/dashboard-icon.svg";
import overview from "../assets/overview-icon.svg";
import chat from "../assets/chat-icon.svg";
import team from "../assets/team-icon.svg";
import tasks from "../assets/tasks-icon.svg";
import reports from "../assets/reports-icon.svg";
import settings from "../assets/settings-icon.svg";
import jane from "../assets/jane.png";
import { BsXLg } from "react-icons/bs";
import useWindowsDimensions from "../hooks/useWindowDimensions";

function Sidebar(props) {
  const { width } = useWindowsDimensions();

  if (width > 800 || props.open) {
    return (
      <div className="Sidebar">
        <div className="sidebar-contents">
          <div className="logo">
            <img src={logo} alt="" />
            <div className="menu-btn">
              <BsXLg
                color={"#fff"}
                size={15}
                onClick={() => props.setOpen(false)}
              />
            </div>
          </div>

          <div className="divider"></div>
          <div className="team-card">
            <div className="avatar">DW</div>
            <div className="card-contents">
              <div className="team-name">Dlex Designs</div>
              <div className="team-type">general team</div>
            </div>
            <div className="arrows">
              <img src={arrows} alt="" />
            </div>
          </div>
          <div className="nav-elements">
            <div className="nav-element first">
              <img src={dashboard} alt="" />
              <span className="nav-text first">Dashboard</span>
            </div>
            <div className="nav-element">
              <img src={overview} alt="" />
              <span className="nav-text">Overview</span>
            </div>
            <div className="nav-element chat">
              <img src={chat} alt="" />
              <span className="nav-text">Chat</span>
              <div className="chat-counter">5</div>
            </div>
            <div className="nav-element">
              <img src={team} alt="" />
              <span className="nav-text">Team</span>
            </div>
          </div>
          <div className="shortcut">shortcut</div>
          <div className="nav-elements">
            <div className="nav-element">
              <img src={tasks} alt="" />
              <span className="nav-text">Tasks</span>
            </div>
            <div className="nav-element reports">
              <img src={reports} alt="" />
              <span className="nav-text">Reports</span>
            </div>
            <div className="nav-element">
              <img src={settings} alt="" />
              <span className="nav-text">Settings</span>
            </div>
          </div>
          <div className="storage-plan-card">
            <div className="storage-heading">Storage</div>
            <div className="gigabytes-used">
              3.4 GB <span className="out-of">of 15 GB</span>
            </div>
            <div className="storage-bar">
              <div className="storage-bar-fill" style={{ width: "20%" }}></div>
            </div>
          </div>
          <div className="divider bottom"></div>
          <div className="profile">
            <img src={jane} alt="" />
            <div className="profile-name">Jane Smith</div>
            <img className="profile-arrows" src={arrows} alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Sidebar;
