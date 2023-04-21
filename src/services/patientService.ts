import patientData from '../../data/patientsData'

import { Patient, NonSensitivePatient } from '../types'

const getPatient = (): Patient[] => patientData

const getNonSensitivePatient = (): NonSensitivePatient[] => patientData

const addPatient = () => null

export default { getNonSensitivePatient, getPatient, addPatient }
