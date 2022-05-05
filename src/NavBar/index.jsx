import React from "react";

const NavBar = () => {
    return (
        <header id="navBar">
            <nav>
                <div id="navBarBrand">
                    <a className="navLink" href="/">WillRead Test Site</a>
                </div>
                <div id="navBarBody">
                    <menu id="topLevelNavMenu">
                        <li>
                            <a className="navLink" href={"/"}>Home</a>
                        </li>
                        <li>
                            <a className="navLink" href={"/posts/all"}>All Posts</a>
                        </li>
                    </menu>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
