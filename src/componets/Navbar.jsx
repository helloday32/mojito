import React from 'react';
import {navLinks} from '../../constents/index';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

function Navbar(props) {
    useGSAP(() => {
        const navTween = gsap.timeline({
            ScrollTrigger : {
                trigger : 'nav' ,
                start : 'bottom top',
            }
        });
        navTween.fromTo('nav' , {backgroundColor : 'transparent'},
                                {backgroundColor: '#00000060' ,
                                        backgroundFilter : 'blur(12px)',
                                        duration : 1.2 ,
                                        ease : 'easeOut',})

    }, [])
    return (
        <nav className="">
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src='/images/logo.png' alt="logo" className=""/>
                    <p className="">Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map(link => (
                        <li className="" key={link.id}>
                            <a href={`#${link.id}`} className="">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;