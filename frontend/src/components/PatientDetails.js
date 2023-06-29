import { usePatientsContext } from '../hooks/usePatientsContext'

const PatientDetails = ({ patient }) => {

    const {dispatch} = usePatientsContext()

    const handleClick = async () => {
        const response = await fetch('/api/patients/' + patient._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_PATIENT', payload: json})
        }
    }

    return (
        <div className="patient-details">
            <h4>{patient.name}</h4>
            <p><strong>Race:</strong>{patient.race}</p>
            <p><strong>Age:</strong>{patient.age}</p>
            <p><strong>Mobile:</strong>{patient.mobile}</p>
            <p>{patient.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default PatientDetails