import React, { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    const nameObject = {
      name: newName
    }
    setNewName(persons.concat(nameObject))
    setNewName("")
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{
      persons.map(person=>
        <li>
          {person.name}
        </li>
      )}
        </ul>
    </div>
  )
}

export default App