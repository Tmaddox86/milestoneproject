import { useState} from "react"
import { usePatientsContext } from '../hooks/usePatientsContext'

const PatientForm = () => {
    const { dispatch } = usePatientsContext()
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [age, setAge] = useState('')
    const [mobile, setMobile] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const patient = {name, race, age, mobile}
    
        const response = await fetch('/api/patients', {
            method: 'POST',
            body: JSON.stringify(patient),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok) {
            setName('')
            setRace('')
            setAge('')
            setMobile('')
            setError(null)
            setEmptyFields([])
            console.log('New Patient Added', json)
            dispatch({type: 'CREATE_PATIENT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit= {handleSubmit}>
            <h3>Add New Patient</h3>

            <label>Patient Name</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value = {name}
                className={emptyFields.includes('name') ? 'error' : ''}
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
                className={emptyFields.includes('age') ? 'error' : ''}
            />

            <label>Patient Mobile</label>
            <input 
                type="number"
                onChange={(e) => setMobile(e.target.value)}
                value = {mobile}
                className={emptyFields.includes('mobile') ? 'error' : ''}
            />

        <button>Add Patient</button>
        {error && <div className="error">{error}</div>}

        </form>
    )
}

export default PatientForm