import React, { useState } from "react";

const Button = ({onClick, title}) => {
    return (
      <button onClick = {onClick}>
          {title}
        </button>
    )
    
}


const StatisticsLine = ({text, value}) => {
    return (
        <div>
            <table>
                <tr> 
                    <td>{text}</td> 
                    <td>{value}</td>
                </tr>
            </table>
        </div>
    )
}

const Statistics = ({good, bad, neutral}) => {

    const total = good + neutral + bad
    const average = total/3
    const positive = (good+total)*100

    if (good===0 && neutral===0 && bad===0){
        return (
            <p> No feedback given </p>
        )
    }

    else{
        return(
            <div>
                <h1> Statistics </h1>
                <table>
                    <tbody>
                        <StatisticsLine text="good" value={good}/>
                        <StatisticsLine text="neutral" value={neutral}/>
                        <StatisticsLine text="bad" value={bad}/>
                        <StatisticsLine text="total" value={total}/>
                        <StatisticsLine text="average" value={average}/>
                        <StatisticsLine text="positive" value={isNaN(positive)?0:positive+" %"}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

const DisplayText = ({text}) => {

    return (
        <div>
            {text}
        </div>
    )
}



const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
      ]
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const randomAnecdote = () => {
        let randomNumber = Math.floor(Math.random()*anecdotes.length)
        setSelected(randomNumber)
    }

    const voteAnecdote = () => {
        const copy = [...votes]
        copy[selected] +=1
        setVotes(copy)
    }

    const highestVote = Math.max(...votes)

    const winningAnecdote = anecdotes[votes.indexOf(highestVote)]


    return (
        <div>
            <h1> give feedback </h1>
            <Button onClick = {()=>setGood(good+1)} title="good"/>
            <Button onClick = {()=>setNeutral(neutral+1)} title="neutral"/>
            <Button onClick = {()=>setBad(bad+1)} title="bad"/>
            <Statistics good={good} neutral={neutral} bad={bad}/>

            <h1>Anecdote of the day</h1>
            <DisplayText text={anecdotes[selected]}/>
            <DisplayText text={"has " + votes[selected] + " votes"}/>
            <Button onClick = {randomAnecdote} title="next anecdote"/>
            <Button onClick = {voteAnecdote} title="vote"/>
            
            <h1>Anecdote with most votes</h1>
            <DisplayText text={winningAnecdote}/>
            <DisplayText text={"with " + votes[votes.indexOf(highestVote)] + " votes"}/>

        </div>
    )
}


export default App;