import StyleTemplate from "../styles/MainFeed.module.css";
import MiniPlayer from "../components/MiniPlayer"
import StarIcon from "../assets/star.svg"
import BookmarkIcon from "../assets/bookmark.svg"
import CommentIcon from "../assets/comment.svg"
import Posts from "../data/posts.json"
import Users from "../data/users.json"
import {useState} from "react"

const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
}
const Feed = () =>
{
    const [show, changeShow] = useState("feed");
    const content = []
    console.log(show)
    if(show === "feed")
    {
    Posts.data.forEach(({title, tag, time, contributors, duration, stats}, i) => {
        content.push(<Post key={i} title={title} tag={tag} time={time} contributors={contributors} duration={duration} stats={stats}/>)   
    });
    } 
    else
    {
        content.push(<User />) 
    }
    return(<>
    <div style={{display:"flex", margin:"10px 10px 20px", paddingBottom: "10px",  borderBottom:"solid 1px rgb(231, 231, 231)"}}>
        <h1 onMouseDown={()=>{changeShow("feed")}} style={{ color: show === "feed" ?"black" : "gainsboro", userSelect: "none",margin: "0px", fontWeight:"700"}}>Feed</h1> 
        <h1 style={{userSelect: "none", margin: "0px 10px 0px", fontWeight:"700"}}>|</h1>
        <h1 onMouseDown={()=>{changeShow("users"); console.log("clocked")}} style={{userSelect: "none", color:show !== "feed" ? "black" : "gainsboro", margin: "0", fontWeight:"700"}}>People</h1>
    </div>
    <div className={Style("body")}>
        {content}
    </div>
    </>);
}
const User =  () =>
{
    return(<div>

    </div>)
}
const Post = ({title, tag, time, contributors, duration, stats}) =>
{
    let constributorList = []
    contributors.forEach((contributor, i)=>
        {
        constributorList.push(<h1 key={i} style = {{fontSize:"70%", margin:"2px 5px 2px", color:"#882cca"}}>{contributor}</h1>)
        }
        
        )
    return(
    <div className={Style("post")}>
        <h1 className={Style("post-title")}>{title}</h1>
        <div className={Style("post-desc")}>
            <div className={Style("post-tag")}>{tag}</div>
            <p style={{fontSize:"70%", margin:"7px 5px 7px", color:"  rgb(151, 151, 151)"}}>{time}</p>
            <div style={{display:"flex"}}>
                {constributorList}
            </div>
        </div>
        <MiniPlayer/>
        <div className={Style("post-widgets")}>
            <p style={{fontSize:"80%", margin:"7px 5px 7px", color:"  rgb(151, 151, 151)"}}>{duration}</p> 
            <div className={Style("widgets-buttons")}>
                <div className={Style("widget-icon")}>
                    <StarIcon/>
                </div>
                    {stats[0]}
                <div className={Style("widget-icon")}>
                    <CommentIcon/>
                </div>
                {stats[1]}
                <div className={Style("widget-icon")}>
                    <BookmarkIcon/>
                </div>
                </div>
        </div>
    </div>)
}
export default Feed;