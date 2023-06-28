import { useEffect, useState } from 'react'


const Home = () => {
    const [patients, setPatients] = useState(null)

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('http://localhost:3000/api/patients')
            const json = await response.json()

            if (response.ok) {
                setPatients(json)
            }
        }
    }, [])

    return (
        <div className="home">
            <div className="patients">
                {patients && patients.map((patient) =>(
                    <p key={patient._id}>{patient.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Home