import React, { useEffect, useState } from 'react'

const CurrentDateTime = () => {
    const [currentTime, setCurrentTime]=useState({});
    useEffect(()=>{
        const interval=setInterval(()=>{
            const date=new Date();
            setCurrentTime({time:date.toLocaleTimeString(), dete:date.toLocaleDateString()})
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])    
    return (
        <div style={{textAlign:"center"}}>
        <h1>{currentTime.dete}</h1>
        <h1>{currentTime.time}</h1>
        </div>
    )
}

export default CurrentDateTime
