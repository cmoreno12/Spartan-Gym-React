export function Exercise(
  type,
  name,
  numberSeries,
  numberRepetitions,
  description
) {
  var type = type;
  var name = name;
  var numberSeries = numberSeries;
  var numberRepetitions = numberRepetitions;
  var description = description;

  function increaseNumberSeries() {
    this.numberSeries += 1;
    return this;
  }

  function increaseNumberRepetitions() {
    this.numberRepetitions += 1;
    return this;
  }

  function getDetails() {
    return this;
  }
}

export function rutine(types) {
  var date = new Date();
  var types = types;
  var exercises = [];

  function getRoutine() {
    return this;
  }

  function addExercise(exercise) {
    exercises.push(exercise);
    return this;
  }

  function generateRandomRoutine(exercises) {
    types.forEach((type) => {
      const exerciseType = exercises.filter((x) => x.type === type);
      let cont = Math.floor(Math.random() * exerciseType.length) + 3;
      while (cont >= 0) {
        addExercise(
          exerciseType[Math.floor(Math.random() * exerciseType.length - 1)]
        );
        cont = cont - 1;
      }
      return this;
    });
  }

  return {
    get date() {
      return date;
    },
    set date(date) {
      date = date;
    },
    get types() {
      return types;
    },
    set types(types) {
      types = types;
    },
    generateRandomRoutine: generateRandomRoutine,
  };
}
