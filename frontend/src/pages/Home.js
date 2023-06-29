import { useEffect } from 'react'
import { usePatientsContext } from '../hooks/usePatientsContext'
import PatientDetails from '../components/PatientDetails'

import PatientForm from '../components/PatientForm'

const Home = () => {
    const {patients, dispatch} = usePatientsContext()


    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/api/patients')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PATIENTS', payload: json})
            }
        }
        fetchPatients()

    }, [dispatch])

    return (
        <div className="home">
            <div className="patients">
                {patients && patients.map((patient) =>(
                    <PatientDetails key={patient._id} patient={patient} />
                ))}
            </div>
            <PatientForm/>
        </div>
    )
}

export default Home