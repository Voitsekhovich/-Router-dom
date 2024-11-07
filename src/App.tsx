import React, { useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import { PageOne } from "./components/pages/PageOne";
import { PageThree } from "./components/pages/PageThree";
import { PageTwo } from "./components/pages/PageTwo";
import styles from "./components/Site.module.css";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
            <div><NavLink className={({isActive})=> isActive?styles.activeNavLink:styles.navLink} to={"/page1"}>Page1</NavLink></div>
            <div><NavLink to={"/page2"} className={({isActive})=> isActive?styles.activeNavLink:styles.navLink}>Page2</NavLink></div>
            <div><NavLink className={({isActive})=> isActive?styles.activeNavLink:styles.navLink} to={"/page3"}>Page3</NavLink></div>
          </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={"/page1"}/> }/>
            <Route path="/page1" element={<PageOne />} />
            <Route path="/page2" element={<PageTwo />} />
            <Route path="/page3" element={<PageThree />} />
            <Route path="/Error404" element={<Error404 />} />
            <Route path="/*" element={<Navigate to={"/Error404"} />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
