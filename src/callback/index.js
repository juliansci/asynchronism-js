const multiplyCallback = (a, b) => {
  return a * b;
}


const multiply = (a, b, fn) => {
  return fn(a, b);
}

const multiplication = multiply(2, 5, multiplyCallback);
console.log(multiplication);

const multiplyAndPrint = (a, b, printerFn) => {
	const result = a * b;
	printerFn(result);
}

multiplyAndPrint(2,4,printAResult);


const printAResult = (number) => {
	console.log(`The result is ${number}`);
}

const makeADifficultCalculationAndPrint = (a, b, printerFn) => {
  setTimeout(resultOfCalculation => {
    printerFn(resultOfCalculation);
  }, 5000, a * b ) // Last param is a simulation of the difficult calculation result
}

makeADifficultCalculationAndPrint(2,4,printAResult);