import React, { useState } from "react";

const Button = (props) => {
    return (
      <button onClick = {props.onClick} title={props.title}/>
    )
    
}

const StatisticsLine = (props) => {
    return (
        <div>
            <table>
                <tr> 
                    <td>{props.text}</td> 
                    <td>{props.value}{props.unit} </td>
                </tr>
            </table>
        </div>
    )
}




const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    if(good+neutral+bad===0){
        return(
            <div>
                <h1> give feedback </h1>
                <Button onClick = {()=>setGood(good+1)} title="good"/>
                <Button onClick = {()=>setNeutral(neutral+1)} title="neutral"/>
                <Button onClick = {()=>setBad(bad+1)} title="bad"/>
                
                <h1>statistics</h1>
                <p>No feedback given</p>

            </div>
        )
    }
    
    return (
        <div>
            <h1> give feedback </h1>
            <Button onClick = {()=>setGood(good+1)} text="good"/>
            <Button onClick = {()=>setNeutral(neutral+1)} text="neutral"/>
            <Button onClick = {()=>setBad(bad+1)} text="bad"/>
            
            <h1> statistics</h1> 
            <StatisticsLine text="good" value={good}/>
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad}/>

            <StatisticsLine text="all" value={good+neutral+bad}/>
            <StatisticsLine text="average" value={(good-bad)/(good+neutral+bad)}/>
            <StatisticsLine text="positive" value={good*100/(good+neutral+bad)} unit='%'/>
        </div>
    )
}


export default App;