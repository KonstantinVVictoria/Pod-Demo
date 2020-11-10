import StyleTemplate from "../styles/Template.module.css";
import SearchIcon from "../assets/search.svg"
import ListIcon from "../assets/list.svg"
import MainFeed from "../components/MainFeed"
import Communities from "../components/CommunitySlider"
const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
}
const Template = () => 
{

    return(
    <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
        <MainTemplate></MainTemplate>
    </div>
    );
};

const MainTemplate = () =>
{
    return(<>
    <header className={Style("main-header")}>
        <nav className={Style("main-navbar")}>
            <button className={Style("main-navbar-button")}><ListIcon/></button><h1 style={{margin:"0px 20px 0px", fontSize:"240%"}}>PodCo</h1>
                <div style={{display:"flex", position:"absolute", right:0, marginRight:"5px"}}>
                    <button className={Style("main-navbar-button")}><SearchIcon/></button> 
                    <button style={{marginLeft:"5px", width:"100px"}}className={Style("main-navbar-button")}>Status</button>
                </div>
        </nav>
    </header>
    <main>
        <MainPage/>
    </main>
    <footer></footer>
    </>)
}

const MainPage =()=>{
    return(<>
    <Communities/>
    <MainFeed/>
    </>)
}
export default Template;