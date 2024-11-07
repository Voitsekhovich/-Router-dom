import React, { useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Error404 } from "./components/pages/Error404";
import { PageOne } from "./components/pages/PageOne";
import { PageThree } from "./components/pages/PageThree";
import { PageTwo } from "./components/pages/PageTwo";
import { S } from "./components/pages/_styles";
import styles from "./components/Site.module.css";


const PATH = {
    PAGE1: "/page1",
    PAGE2: "/page2",
    PAGE3: "/page3",
    EROR404: "/Error404"
} as const 

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
            <S.NavWrapper><NavLink  to={PATH.PAGE1}>Page1</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PAGE2} >Page2</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink  to={PATH.PAGE3}>Page3</NavLink></S.NavWrapper>
          </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.PAGE1}/> }/>
            <Route path={PATH.PAGE1} element={<PageOne />} />
            <Route path={PATH.PAGE2} element={<PageTwo />} />
            <Route path={PATH.PAGE3} element={<PageThree />} />
            <Route path={PATH.EROR404} element={<Error404 />} />
            <Route path="/*" element={<Navigate to={PATH.EROR404} />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;

