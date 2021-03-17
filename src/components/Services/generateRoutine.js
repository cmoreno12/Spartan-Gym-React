import { rutine } from "../../models/exercise";
var exercises = [
  {
    type: "Pierna",
    name: "Sentadilla",
    description: "Sentadilla",
    numberSeries: 4,
    numberRepetitions: 12,
  },
  {
    type: "Pierna",
    name: "Prensa",
    description: "Prensa",
    numberSeries: 4,
    numberRepetitions: 13,
  },
  {
    type: "Pierna",
    name: "Zancadas",
    description: "Zancadas",
    numberSeries: 4,
    numberRepetitions: 15,
  },
  {
    type: "Pierna",
    name: "Extension de cuadricep",
    description: "Extension de cuadricep",
    numberSeries: 3,
    numberRepetitions: 10,
  },
  {
    type: "Pierna",
    name: "Peso muerto con piernas rígidas",
    description: "Peso muerto con piernas rígidas",
    numberSeries: 4,
    numberRepetitions: 12,
  },
  {
    type: "Pierna",
    name: "Curl femoral tumbado",
    description: "Curl femoral tumbado",
    numberSeries: 4,
    numberRepetitions: 15,
  },
  {
    type: "Pecho",
    name: "Press de banca inclinado con mancuernas",
    description: "Press de banca inclinado con mancuernas",
    numberSeries: 4,
    numberRepetitions: 15,
  },
  {
    type: "Pecho",
    name: "Press de banca con barra o mancuernas",
    description: "Press de banca con barra o mancuernas",
    numberSeries: 4,
    numberRepetitions: 15,
  },
  {
    type: "Pecho",
    name: "Fondos en paralelas",
    description: "Fondos en paralelas",
    numberSeries: 4,
    numberRepetitions: 12,
  },
  {
    type: "Pecho",
    name: "Cruces con poleas altas",
    description: "Cruces con poleas altas",
    numberSeries: 4,
    numberRepetitions: 10,
  },
  {
    type: "Pecho",
    name: "Flexiones con banda elástica",
    description: "Flexiones con banda elástica",
    numberSeries: 2,
    numberRepetitions: 25,
  },
];

export function generateRoutine(types) {
  const randomRoutine = new rutine(types);
  debugger
  return randomRoutine.generateRandomRoutine(exercises);
}
