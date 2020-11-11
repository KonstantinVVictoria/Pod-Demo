import StyleTemplate from "../styles/CommunityPage.module.css"
import communities from "../data/communities.json"
const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
} 


const CommunityPage = ({id}) =>
{
  const community = communities.data[id]
  return(
    <div className={Style("body")}>
    <div style={{position:"relative", margin:"10px 0px 10px"}}>
        <img src={"/assets/"+community.image}className={Style("community-image")}/>
        <img src={"/assets/"+community.image}className={Style("community-image-glow")}/>
    </div>
    <h1 style={{margin:"10px",fontSize:"3em"}}>{community.name}</h1>
    <div style={{display:"flex"}}>
        <div style={{marginRight:"20px"}}>Podcasts: { community.stats.podcasts}</div>
        <div>Members: {community.stats.members}</div>
    </div>
    </div>
  )
}
export default CommunityPage;
