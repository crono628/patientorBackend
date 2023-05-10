import patientData from '../../data/patientsData'

import { Patient, NonSensitivePatient } from '../types'

const getPatients = (): Patient[] => patientData

const getNonSensitivePatients = (): NonSensitivePatient[] =>
  patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }))

const addPatient = () => null

export default { getNonSensitivePatients, getPatients, addPatient }
