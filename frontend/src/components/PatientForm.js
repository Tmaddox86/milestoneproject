import { useState} from "react"

const PatientForm = () => {
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [age, setAge] = useState('')
    const [mobile, setMobile] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const patient = {name, race, age, mobile}
    
        const response = await fetch('/api/patients', {
            method: 'POST',
            body: JSON.stringify(patient)
        })
    }

    return (
        <form className="create" onSubmit= {handleSubmit}>
            <h3>Add New Patient</h3>

            <label>Patient Name</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value = {name}
            />

            <label>Patient Race</label>
            <input 
                type="text"
                onChange={(e) => setRace(e.target.value)}
                value = {race}
            />

            <label>Patient Age</label>
            <input 
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value = {age}
            />

            <label>Patient Mobile</label>
            <input 
                type="number"
                onChange={(e) => setMobile(e.target.value)}
                value = {mobile}
            />

        <button>Add Patient</button>

        </form>
    )
}