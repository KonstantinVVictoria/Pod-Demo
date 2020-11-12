import StyleTemplate from "../styles/ProfilePage.module.css"
import Posts from "../data/posts.json"
import MiniPlayer from "../components/MiniPlayer"
import StarIcon from "../assets/star.svg"
import BookmarkIcon from "../assets/bookmark.svg"
import CommentIcon from "../assets/comment.svg"

const Style = (style_name) => {
    return StyleTemplate[`${style_name}`]
}


const ProfilePage = () => {
    const content = []
    Posts.data.forEach(({ title, tag, time, contributors, duration, stats }, i) => {
        content.push(<Post key={i} title={title} tag={tag} time={time} contributors={contributors} duration={duration} stats={stats} />)
    });
    const tags = ["Mathematics", "Marketing", "Cinema", "Fortnite", "Nature"]
    const tagbubbles = []
    tags.forEach((element, i) => {
        tagbubbles.push(<div key={i} className={Style("post-tag")}>{element}</div>)
    });
    return (
        <>
            <div className={Style("body")}>
                <h1 style={{ margin: "10px", fontSize: "3em", color: "white" }}>Konstantin</h1>
                <div style={{ position: "relative", margin: "10px 0px 10px" }}>
                    <img src={"assets/profile.png"} className={Style("profile-image")} />
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "20px", color: "white" }}>Followers: 2</div>
                    <div style={{ color: "white" }}>Pods: 12</div>
                </div>
            </div>
            <div style={{ display: "flex", width: "100%", overflow: "scroll", padding: "10px 10px" }}>
                <div style={{ marginLeft: "0px 2px" }} className={Style("post-tag")}>All</div>
                {tagbubbles}
            </div>
            {content}
        </>

    )
}

const Post = ({ title, tag, time, contributors, duration, stats }) => {
    let constributorList = []
    contributors.forEach((contributor, i) => {
        constributorList.push(<h1 key={i} style={{ fontSize: "70%", margin: "2px 5px 2px", color: "#FF7D66" }}>{contributor}</h1>)
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

export default ProfilePage;