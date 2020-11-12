import StyleTemplate from "../styles/MainFeed.module.css";
import MiniPlayer from "../components/MiniPlayer"
import StarIcon from "../assets/star.svg"
import BookmarkIcon from "../assets/bookmark.svg"
import CommentIcon from "../assets/comment.svg"
import Posts from "../data/posts.json"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from "react"

const Style = (style_name) => {
    return StyleTemplate[`${style_name}`]
}
const Feed = () => {
    const [show, changeShow] = useState("feed");
    const content = []
    console.log(show)
    if (show === "feed") {
        Posts.data.forEach(({ title, tag, time, contributors, duration, stats }, i) => {
            content.push(<Post key={i} title={title} tag={tag} time={time} contributors={contributors} duration={duration} stats={stats} />)
        });
    }
    else {
        content.push(<User />)
    }
    return (<>
        <div style={{ display: "flex", margin: "10px 10px 20px", paddingBottom: "10px", borderBottom: "solid 1px rgb(231, 231, 231)" }}>
            <h1 onMouseDown={() => { changeShow("feed") }} style={{ color: show === "feed" ? "black" : "gainsboro", userSelect: "none", margin: "0px", fontWeight: "700" }}>Feed</h1>
            <h1 style={{ userSelect: "none", margin: "0px 10px 0px", fontWeight: "700" }}>|</h1>
            <h1 onMouseDown={() => { changeShow("users"); console.log("clocked") }} style={{ userSelect: "none", color: show !== "feed" ? "black" : "gainsboro", margin: "0", fontWeight: "700" }}>Members</h1>
        </div>
        <div className={Style("body")}>
            {content}
        </div>
    </>);
}
const User = () => {
    const router = useRouter()
    const userArray = ["Konstantin", "LonelyBatman", "Shorya", "GoBears!"]
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {userArray.map(t => (<div className={Style("post")}>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ display: "flex", borderRadius: "100%", height: "80px", width: "80px" }}>
                        <Image
                            src="/assets/profile.png"
                            alt="Picture of the author"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex" }}>
                            <h3 onMouseDown={() => {
                                router.push({
                                    pathname: '/profile',
                                })
                            }} style={{ outline: "none", display: "flex", alignItems: "center", margin: "0px" }}>
                                {t}
                                <div style={{ marginLeft: "10px", height: "12px", width: "12px", backgroundColor: "lightgreen", borderRadius: "100%" }} />
                            </h3>

                        </div>
                        <p style={{ margin: "5px 0px" }}>I am a new person!</p>
                        <div style={{ display: "flex" }}>
                            <p style={{ margin: "0px 10px 0px 0px" }}>followers:</p>13
               <p style={{ margin: "0px 10px 30px" }}>casts: </p>54
           </div>
                    </div>
                </div>
            </ div>))}
        </div>)
}
const Post = ({ title, tag, time, contributors, duration, stats }) => {
    let constributorList = []
    contributors.forEach((contributor, i) => {
        constributorList.push(<h1 key={i} style={{ fontSize: "80%", margin: "0px 5px", color: "#FF7D66" }}>{contributor}</h1>)
    }

    )
    return (
        <div className={Style("post")}>
            <h1 className={Style("post-title")}>{title}</h1>
            <div className={Style("post-desc")}>
                <div style={{ display: "flex" }}>
                    <div className={Style("post-tag")}>{tag}</div>
                    <p style={{ fontSize: "70%", margin: "7px 5px 7px", color: "  rgb(151, 151, 151)", display: "flex" }}>
                        {time}
                    </p>
                </div>
                <div style={{ display: "flex", marginTop: 5 }}> {constributorList}</div>
            </div>
            <MiniPlayer />
            <div className={Style("post-widgets")}>
                <p style={{ fontSize: "80%", margin: "7px 5px 7px", color: "  rgb(151, 151, 151)" }}>{duration}</p>
                <div className={Style("widgets-buttons")}>
                    <div className={Style("widget-icon")}>
                        <StarIcon />
                    </div>
                    <span style={{ fontWeight: 600, color: "#b4b4b4" }}>{stats[0]}</span>
                    <div className={Style("widget-icon")}>
                        <CommentIcon />
                    </div>
                    <span style={{ fontWeight: 600, color: "#b4b4b4" }}>{stats[1]}</span>
                    <div className={Style("widget-icon")}>
                        <BookmarkIcon />
                    </div>
                </div>
            </div>
        </div>)
}
export default Feed;