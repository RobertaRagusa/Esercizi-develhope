function calculate() {
  let sum = 0;
  return {
    add(num) {
      sum += num;
      return this;
    },
    sub(num) {
      sum -= num;
      return this;
    },
    multiply(num) {
      sum *= num;
      return this;
    },
    divide(num) {
      sum /= num;
      return this;
    },
    printResult() {
      console.log(sum);
    },
  };
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
