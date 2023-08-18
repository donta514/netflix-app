import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="images/netflix.png"
                alt="Netflix Logo"
            />

            <img
                className="nav_avatar"
                src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ?format=jpg&name=240x240"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav;