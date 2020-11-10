import StyleTemplate from "../styles/CommunitySlider.module.css";
import communities from "../data/communities.json"
const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
}
const Feed = () =>
{
    let Cards = []
    communities.data.forEach(element => {
        Cards.push(<Card name={element.name}/>)
    });
    return(<>
    <h1 style={{margin:"0px 10px 10px"}}>Communities</h1>
    <div className={Style("body")}>
        {Cards}
    </div>
    </>);
}

const Card = ({name}) =>
{
    return(
    <div className={Style("card")}>
        <div></div>
        <p>{name}</p>
        <button>Visit</button>
    </div>)
}

export default Feed;