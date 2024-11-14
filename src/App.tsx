import React, { useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Error404 } from "./components/pages/Error404";
import { PageOne } from "./components/pages/Adidas";
import { PageThree } from "./components/pages/Abibas";
import { PageTwo } from "./components/pages/Puma";
import { S } from "./components/pages/_styles";
import styles from "./components/Site.module.css";
import { Model } from "./components/pages/Model";


const PATH = {
    PAGE1: "/ADIDAS",
    PAGE2: "/PUMA",
    PAGE3: "/ABIBAS",
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
            <S.NavWrapper><NavLink  to={PATH.PAGE1}>ADIDAS</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PAGE2} >PUMA</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink  to={PATH.PAGE3}>ABIBAS</NavLink></S.NavWrapper>
          </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.PAGE1}/> }/>
            <Route path={PATH.PAGE1} element={<PageOne />} />
            <Route path={PATH.PAGE2} element={<PageTwo />} />
            <Route path={PATH.PAGE3} element={<PageThree />} />
            <Route path={PATH.EROR404} element={<Error404 />} />
            <Route path={"/*"} element={<Error404 />} />

{/*             <Route path="/*" element={<Navigate to={PATH.EROR404} />} />
 */}            <Route path={'/ADIDAS/:id'} element={<Model/>}/>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;

