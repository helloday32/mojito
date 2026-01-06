import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

function Hero(props) {
    useGSAP(() => {
        const heroSplit = new SplitText('.title' ,
                                            {type : 'chars, words'})
        const paraSplit = new SplitText('.subtitle' ,
                                             {type : 'lines'})
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars , {
            yPercent : 140 ,
            duration : 1.5 ,
            ease : 'expo.out',
            stagger : 0.08,
        })
        gsap.from(paraSplit.lines  ,  {
            opacity : 0,
            yPercent : 140 ,
            duration : 1.5 ,
            ease : 'expo.out',
            stagger : 0.08,
            delay : .5 ,
        })
        gsap.timeline({
            scrollTrigger : {
                trigger : '#hero',
                start : 'top  top',
                end : 'bottom top ',
                scrub : true ,

            }
        })
            .to('.right-leaf' , {y:200} , 0)
            .to('.left-leaf' , {y:200} , 0)
    } , [])
    return (
        <section id="hero" className="noisy">
           <h1 className="title">MOJITO</h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf" className={`left-leaf`}/>
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className={`right-leaf`}/>

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p className="">Cool Crisp . Classic</p>
                        <p className="subtitle">
                            sip the Spirit <br /> of summer
                        </p>
                    </div>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">
                        every cocktail on our menu is blend of premium
                        ingredients , creative , flair and timeless -
                        designed to delight your senses
                    </p>
                    <a href="#cocktails"> View CockTails</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;