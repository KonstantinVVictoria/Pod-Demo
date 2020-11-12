import StyleTemplate from "../styles/HiddenMenu.module.css";
import Image from 'next/image'
import HomeIcon from '../assets/home.svg'
import ProfileIcon from '../assets/user.svg'
import SettingsIcon from '../assets/settings.svg'
import Link from 'next/link'

const Style = (style_name) => {
    return StyleTemplate[`${style_name}`]
}
const HiddenMenu = ({ status }) => {
    let Content = () => <div></div>;
    switch (status) {
        case "status":
            Content = Status;
            break;
        case "search":
            Content = Search;
            break
        case "nav":
            Content = Menu;
            break
    }
    return (
        <div id="hidden-menu" style={{ top: status !== "noshow" ? "0px" : "-300px" }} className={Style("body")}>
            <Content />
        </div>)
}

const Status = () => {
    return (<>
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
            <div className={Style("status-profile-pic")}>
                <Image
                    src="/assets/profile.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />

            </div>
            <h2 style={{ color: "white", margin: "5px" }}>My statuses:</h2>
            <span style={{ color: "white", fontSize: "20px", margin: "5px" }}>Update your statuses regularly to initiate new discussions!</span>
            <h3 style={{ color: "white", margin: "15px 5px 5px" }}>Bodybuilding</h3>
            <div style={{ position: "absolute", right: "0", display: "flex", alignItems: "center", height: "40px" }}>
                <p style={{ color: "lightgreen", fontWeight: 600 }}>Active &nbsp;</p><p style={{ color: "#FFF", fontWeight: 600 }}>| Not Active</p>
            </div>
            <textarea className={Style("status-changer")}>
            </textarea>

            <h3 style={{ color: "white", margin: "15px 5px 5px" }}>Cinema</h3>
            <textarea className={Style("status-changer")}>
            </textarea>

            <h3 style={{ color: "white", margin: "15px 5px 5px" }}>Voice Acting</h3>
            <textarea className={Style("status-changer")}>
            </textarea>
        </div>
    </>)
}

const Search = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ borderRadius: "50px", height: "30px", width: "100%", backgroundColor: "white", margin: "8px 0px" }}></div>
            </div>
        </>
    )
}

const Menu = () => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", position: "relative" }}>
            <Link href="/"><div style={{ marginRight: "40px" }}><HomeIcon height="30px" width="30px" /></div></Link>
            <Link href="/profile"><div style={{ marginRight: "40px" }}><ProfileIcon height="30px" width="30px" /></div></Link>
            <div style={{ marginRight: "40px" }}><SettingsIcon height="30px" width="30px" /></div>
        </div>
    )
}
export default HiddenMenu;