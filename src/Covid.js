import React,{useState, useEffect} from 'react'
import "./Covid.css"

const Covid = () => {
    const [covidData, setCovidData]=useState([]);
    const getcovidData=()=>{
        fetch("https://data.covid19india.org/data.json").then(res=>res.json()).then(data=>setCovidData(data.statewise))
    }
    useEffect(()=>{
        getcovidData();
    },[])
    return (
        <div className="covid">
            <div className="card">
            <h2>Covid 19 tracker</h2>
                {
                covidData.map((data, index)=>(
                    <div key={index}>
                        <span className="state">{data.state}</span>
                        <p className="container">
                            <p>Active</p><p>{data.active},</p>
                            <p>Confirmed</p><p>{data.confirmed},</p>
                            <p>Recovered</p><p>{data.recovered},</p>
                            <p>Deaths</p><p>{data.deaths}</p>
                        </p>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Covid