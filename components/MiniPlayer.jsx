import StyleTemplate from "../styles/MiniPlayer.module.css";
const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
}

const MiniPlayer = () =>
{

    return(
    <div className={Style("body")}>
        <div className={Style("interface")}>
            <button className={Style("play-button")}></button>

        </div>
        <div className={Style("slider")}></div>
    </div>)
}
export default MiniPlayer;