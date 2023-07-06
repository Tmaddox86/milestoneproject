import { usePatientsContext } from '../hooks/usePatientsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PatientDetails = ({ patient }) => {
  const { dispatch } = usePatientsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/patients/' + patient._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_PATIENT', payload: json})
    }
  }

  return (
    <div className="patient-details">
      <h4>{patient.name}</h4>
      <p><strong>Race </strong>{patient.race}</p>
      <p><strong>Age </strong>{patient.age}</p>
      <p>{formatDistanceToNow(new Date(patient.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default PatientDetails