const PatientDetails = ({ patient }) => {
    return (
        <div className="patient-details">
            <h4>{patient.name}</h4>
            <p><strong>Race:</strong>{patient.race}</p>
            <p><strong>Age:</strong>{patient.age}</p>
            <p><strong>Mobile:</strong>{patient.mobile}</p>
            <p>{patient.createdAt}</p>
        </div>
    )
}

export default PatientDetails