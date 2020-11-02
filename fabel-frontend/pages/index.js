import Head from 'next/head'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'


export default function Home() {
    const [resp, setResp] = useState({});

   
  


useEffect( async () => {
    
  const datafetch = async () => {
    const res = await fetch("http://localhost:8080/search/sofa") 
    const data = await res.json()
    console.log(data);
    setResp(data)

  }

    datafetch()
      
}, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Fabel Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Search For Fabel</h1>

        <div className="flex">
          <Card data={resp}/>

          
        </div>
      </main>
    </div>
  )
}
