import diagnosesData from '../../data/diagnosesData'

import { Diagnose } from '../types'

const getDiagnoses = (): Diagnose[] => diagnosesData

const addDiagnoses = () => null

export default {
  getDiagnoses,
  addDiagnoses
}
