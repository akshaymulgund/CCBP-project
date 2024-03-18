import './index.css'
import React ,{useState,useEffect,useContext} from 'react'

const Home=()=>{
    const [video,setVideo]=useState([])

    return(
        <>
        <Header/>
          <div className="min">
          <SideBar/>
          <div className="Home" style={{color:color,backgroundColor:bgcolor}}>
          {
            show && (
                <div> </div> 
            )
          }
          
          </div>
          </div>
        </>
    )
}