import React, { useState } from 'react';
import styles from "./components/Site.module.css";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import { Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Error404 } from "./components/pages/Error404";
import styled from 'styled-components';
import { S } from './components/pages/_styles'
import { Model } from "./components/pages/Model";
import { Prices } from "./components/pages/Prices";


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    PROTECTEDPAGE: '/protectedPage',


} as const

function App() {
    const navigate =useNavigate()
    const navigateHandler =()=>{
        navigate(-1)
    }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTEDPAGE}>rotected Page</NavLink></S.NavWrapper>

                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}></div>
                    <S.NavWrapper><NavLink className={styles.LinkLikeButton} to={PATH.PAGE1}>Main Page</NavLink></S.NavWrapper>
                    <Outlet />
                </div>
                <button  onClick={navigateHandler} className={styles.ButtonLikeLink}>Back</button>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



