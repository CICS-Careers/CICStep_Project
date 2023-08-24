import React from 'react'
import '../style/home.css'
const Home =()=>{
    const [data,setData]=React.useState(null)
  React.useEffect(()=>{
    fetch("/api")
    .then((res)=>res.json())
    .then((data)=>{
      setData(data.message)
      console.log(data)
    })
  },[])
    return <div className="home-wrap">
            <div className="text">{data}</div>
          </div>
}
export default Home