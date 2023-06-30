const express = require('express')
const {
    createPatient,
    getPatients,
    getPatient,
    deletePatient,
    updatePatient,
} = require ('../controllers/patientController')
const requireAuth = ('../middleware/requireAuth')

const router = express.Router();

//require authorization for all routes
//router.use(requireAuth)

//GET all patients
router.get('/', getPatients )


//GET single patient
router.get('/:id', getPatient)

//POST a new patient
router.post('/', createPatient)

//DELETE a patient
router.delete('/:id', deletePatient)

//UPDATE a patient
router.patch('/:id', updatePatient)

module.exports = router