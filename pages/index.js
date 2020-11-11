import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Template from '../templates/main'

export default function Home() {
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
      <Template></Template>
    </div>
  )
}
