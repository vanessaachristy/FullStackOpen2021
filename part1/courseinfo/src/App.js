import React from "react";


const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts = [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of component',
            exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course = {course}/>
            <Content parts = {parts}/>
            <Total parts = {parts}/>
        </div>
    )
}


const Header = (props)=>{
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}

const Content = (props)=>{
    return (
        <div>
            <Part part = {props.part1} exercises = {props.exercises1}/>
            <Part part = {props.part2} exercises = {props.exercises2}/>
            <Part part = {props.part3} exercises = {props.exercises3}/>
        </div>
    )
}

const Total = (props)=>{
    return (
        <div>
            <p> 
                Total exercises: {props.exercises1 + props.exercises2 + props.exercises3}
            </p>
        </div>
    )
}

const Part = (props) =>{
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    )

}

export default App;