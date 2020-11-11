import StyleTemplate from "../styles/HiddenMenu.module.css";
const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
}
const HiddenMenu = ({status}) =>
{
    let Content = ()=><div></div>;
    switch(status)
    {
        case "status":
        Content = Status;          
    }
    return (
    <div id="hidden-menu" style ={{top: status=="status"?"0px":"-300px"}}className={Style("body")}>
        <Content/>
    </div>)
}

const Status = () =>
{
    return (<>
    <div style={{display:"flex", flexDirection:"column", position: "relative"}}>
        <div className={Style("status-profile-pic")}>
            <img></img>
        </div>
        <div style={{position:"absolute", right:"0",display:"flex", alignItems:"center", height:"40px"}}>
            <p style={{color:"lightgreen"}}>Active</p><p style={{color:"rgb(190, 190, 190)"}}>| Not Active</p>
        </div>
    <textarea className={Style("status-changer")}>
    </textarea>
    </div>
    </>)
}

export default HiddenMenu;