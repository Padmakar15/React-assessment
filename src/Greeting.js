import React from 'react'

const Greeting = () => {
    let currDate=new Date();
    currDate=currDate.getHours();
    let greeting="";
    const cssStyle={}
    if(currDate>=1 && currDate<12){
        greeting="Good Morning";
        cssStyle.color="green";
    }else if(currDate>=12 && currDate<19){
        greeting="Good Afternoon"
        cssStyle.color="orange"
    }else{
        greeting="Good Night"
        cssStyle.color="black"
    }
    return (
        <div>
            <h2>Hello <span style={cssStyle}>{greeting}</span></h2>
        </div>
    )
}

export default Greeting
