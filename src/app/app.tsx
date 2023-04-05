import React from "react";
import TopBar from "../components/TopBar/TopBar";
import SideBar from '../components/SideBar/SideBar';
import Divider from '@mui/material/Divider';
import "./app.css";
import TopRightBar from '../components/TopRightBar/TopRightBar';
import Main from '../components/Main/Main';

export function App() {
  return (
    <>
      <section className="wrapper">
        <article className="sidebar-container">
          <TopBar />
          <Divider sx={{ backgroundColor: "#a9a9a9" }} />
          <SideBar />
        </article>
        <article className="main-content">
          <TopRightBar />
          <Main />
        </article>
      </section>
    </>
  );
}

export default App;
