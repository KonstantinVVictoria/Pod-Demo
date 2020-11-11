import StyleTemplate from "../styles/MainFeed.module.css";
import MiniPlayer from "../components/MiniPlayer"
import StarIcon from "../assets/star.svg"
import BookmarkIcon from "../assets/bookmark.svg"
import CommentIcon from "../assets/comment.svg"
const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
}
const Feed = () =>
{
    return(<><h1 style={{margin:"10px 10px 20px", paddingBottom:"5px",fontWeight:"200", borderBottom:"solid 1px rgb(231, 231, 231)"}}>Feed</h1>
    <div className={Style("body")}>
        <Post/>
        <Post/>
        <Post/>
    </div>
    </>);
}

const Post = () =>
{
    return(
    <div className={Style("post")}>
        <h1 className={Style("post-title")}>Homotopy type theory - The new foundation of mathematics</h1>
        <div className={Style("post-desc")}>
            <div className={Style("post-tag")}>mathematics</div>
            <p style={{fontSize:"70%", margin:"7px 5px 7px", color:"  rgb(151, 151, 151)"}}>11/9/2020 @2:00pm Konstantin Victoria </p>
        </div>
        <MiniPlayer/>
        <div className={Style("post-widgets")}>
            <p style={{fontSize:"80%", margin:"7px 5px 7px", color:"  rgb(151, 151, 151)"}}>12 min : 9 sec</p> 
            <div className={Style("widgets-buttons")}>
                <div className={Style("widget-icon")}>
                    <StarIcon/>
                </div>
                    <p></p>5
                <div className={Style("widget-icon")}>
                    <CommentIcon/>
                </div>
                    10 
                <div className={Style("widget-icon")}>
                    <BookmarkIcon/>
                </div>
                </div>
        </div>
    </div>)
}
export default Feed;