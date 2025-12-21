import React from 'react';
import {navLinks} from '../../constents/index';

function Navbar(props) {
    return (
        <nav className="">
            <div>
                <a href="#home" className="flex items-center gap-2">
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