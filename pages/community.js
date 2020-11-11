import Head from 'next/head'
import styles from '../styles/Home.module.css'
import StyleTemplate from "../styles/CommunityPage.module.css"
import Template from '../templates/main'
import MainFeed from "../components/MainFeed"  
import { withRouter } from 'next/router'
import LoadCS from "../components/LoadCS"
const Style =(style_name) =>
{
    return StyleTemplate[`${style_name}`]
} 

function Community(props) {
  const CommunityPage = LoadCS("Community")
  let id = props.router.query.communityId || props.router.asPath[props.router.asPath.length-1]
  return (   
    <div className={styles.container}>
      
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        #__next {
          padding: 0;
          margin: 0;
        }
      `}</style>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
      </Head>
      <Template>
        <CommunityPage id={id}/>
        <MainFeed/>
      </Template>
    </div>
  )
}
export default withRouter(Community)
const Tags = ()=>{

}

const Stats = ()=>{
  
}