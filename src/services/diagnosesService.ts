import diagnoses from '../../data/diagnoses'

import { Diagnose } from '../types'

const getDiagnoses = (): Diagnose[] => diagnoses

const addDiagnoses = () => null

export default {
  getDiagnoses,
  addDiagnoses
}
