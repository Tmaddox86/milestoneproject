const express = require('express')

const Patient = require('./models/patientModel')

const {
    createPatient,
    getPatients,
    getPatient,
    deletePatient,
    updatePatient,
} = require ('../controller/patientController')

const router = express.Router()

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