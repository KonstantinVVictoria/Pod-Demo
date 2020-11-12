import StyleTemplate from "../styles/MiniPlayer.module.css";
import PlayArrow from "../assets/playArrow.svg"
import Wave from "../assets/wave.svg"
const Style = (style_name) => {
    return StyleTemplate[`${style_name}`]
}

const MiniPlayer = () => {

    return (
        <div className={Style("body")}>
            <div className={Style("interface")}>
                <button className={Style("play-button")}>
                    <PlayArrow style={{ width: "105%" }} />
                </button>
                <div style={{ display: "flex", width: "70%", overflow: "hidden" }}>
                    <Wave style={{ height: "30px", marginLeft: 5 }} />
                    <Wave style={{ height: "30px" }} />
                    <Wave style={{ height: "30px" }} />
                    <Wave style={{ height: "30px" }} />
                    <Wave style={{ height: "30px" }} />
                    <Wave style={{ height: "30px" }} />
                </div>
            </div>
            <div className={Style("slider")}></div>
        </div>)
}
export default MiniPlayer;