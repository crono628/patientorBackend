import patientData from '../../data/patientsData'

import { Patient, NonSensitivePatient, NewPatient } from '../types'

const getPatients = (): Patient[] => patientData

const getNonSensitivePatients = (): NonSensitivePatient[] =>
  patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }))

const findById = (id: string): Patient | undefined => {
  const patient = patientData.find((p) => p.id === id)
  if (!patient) {
    throw new Error(`Patient with id ${id} not found`)
  }
  return patient
}

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: String(Math.max(...patientData.map((p) => Number(p.id))) + 1),
    ...patient
  }
  patientData.push(newPatient)
  return newPatient
}

export default { getNonSensitivePatients, findById, getPatients, addPatient }
