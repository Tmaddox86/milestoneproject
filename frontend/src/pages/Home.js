import { useEffect }from 'react'
import { usePatientsContext } from "../hooks/usePatientsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import PatientDetails from '../components/PatientDetails'
import PatientForm from '../components/PatientForm'

const Home = () => {
  const {patients, dispatch} = usePatientsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('/api/patients', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_PATIENTS', payload: json})
      }
    }

    if (user) {
      fetchPatients()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="patients">
        {patients && patients.map((patient) => (
          <PatientDetails key={patient._id} patient={patient} />
        ))}
      </div>
      <PatientForm />
    </div>
  )
}

export default Home