// app

import './index.css';
import React from 'react';
import {ScrollTrigger , SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./componets/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger , SplitText);



export default function App(props) {
    return (
        <main className="constructor">
            < Navbar />
        </main>
    );
}
//  git branch -M main
//  git remote add origin https://github.com/helloday32/mojito.git
//  git branch -M main
//  git push -u origin main

