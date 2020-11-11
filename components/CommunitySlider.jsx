import StyleTemplate from "../styles/CommunitySlider.module.css";
import communities from "../data/communities.json"
import { useRouter } from 'next/router'
const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
}
const Feed = () =>
{
    let Cards = []
    let i = 0;
    communities.data.forEach(element => {
        Cards.push(<Card community={element} i={i++}/>)
    });
    return(<>
    <h1 style={{margin:"20px 10px 20px", fontWeight:"700",}}>Communities</h1>
    <div className={Style("body")}>
        {Cards}
    </div>
    </>);
}

const Card = ({community, i}) =>
{
    const router = useRouter()
    return(
    <div className={Style("card")}>
    <div style={{position:"relative"}}>
        <img src={"/assets/"+community.image}className={Style("community-image")}/>
        <img src={"/assets/"+community.image}className={Style("community-image-glow")}/>
    </div>
        <p>{community.name}</p>
        <button onMouseDown={()=>
        router.push({
          pathname: '/community',
          query: { communityId:i},
        })}>Visit</button>
    </div>)
}

export default Feed;