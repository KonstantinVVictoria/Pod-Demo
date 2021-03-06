import StyleTemplate from "../styles/Template.module.css";
import HiddenMenu from "../components/HiddenMenu"
import SearchIcon from "../assets/search.svg"
import ListIcon from "../assets/list.svg"
import { useState } from "react";
const Style = (style_name) => {
    return StyleTemplate[`${style_name}`]
}
const Template = ({ children }) => {

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <MainTemplate>{children}</MainTemplate>
        </div>
    );
};

const MainTemplate = ({ children }) => {
    const [hiddenMenuStatus, changeHiddenMenu] = useState("noshow")
    return (<>
        <NavBar changeHiddenMenu={changeHiddenMenu} hiddenMenuStatus={hiddenMenuStatus} />
        <HiddenMenu status={hiddenMenuStatus} />
        <main style={{ marginTop: "65px" }}>
            {children}
        </main>
        <footer>
            <div className={Style("footer")}>
                <p style={{ color: "#FFF", margin: "0px 20px 0px", fontSize: "30px", fontWeight: "200" }}>PodCo</p>
                <p style={{ color: "#FFF", margin: "0px 20px 0px", fontSize: "15px", fontWeight: "200" }}>Contact us: podco.info@gmail.com</p>
                <div className={Style("footer-copyright")}>
                    <span>Copyright 2020 by PodCo</span>
                    <span>All Rights Reserved</span></div>
            </div>
        </footer>
    </>)
}

const NavBar = ({ changeHiddenMenu, hiddenMenuStatus }) => {
    return (
        <header className={Style("main-header")}>
            <nav className={Style("main-navbar")}>
                <button onMouseDown={() => hiddenMenuStatus != "nav" ? changeHiddenMenu("nav") : changeHiddenMenu("noshow")} className={Style("main-navbar-button")}><ListIcon /></button>
                <h1 style={{ color: "#FF7D66", margin: "0px 20px 0px", fontSize: "30px", fontWeight: "200" }}>PodCo</h1>
                <div style={{ display: "flex", position: "absolute", right: 0, marginRight: "5px" }}>
                    <button onMouseDown={() => hiddenMenuStatus != "search" ? changeHiddenMenu("search") : changeHiddenMenu("noshow")} className={Style("main-navbar-button")}><SearchIcon /></button>
                    <button onMouseDown={() => hiddenMenuStatus != "status" ? changeHiddenMenu("status") : changeHiddenMenu("noshow")} style={{ marginLeft: "5px", width: "100px" }} className={Style("main-navbar-button")}>Status</button>
                </div>
            </nav>
        </header>)
}

export default Template;