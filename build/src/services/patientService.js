"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientsData_1 = __importDefault(require("../../data/patientsData"));
const getPatients = () => patientsData_1.default;
const getNonSensitivePatients = () => patientsData_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
}));
const addPatient = () => null;
exports.default = { getNonSensitivePatients, getPatients, addPatient };
