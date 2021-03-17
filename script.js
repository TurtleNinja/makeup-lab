/* function to calculate the result */
function calculate() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);
  let op = document.getElementById('operator').value;

  try {
    // make sure input are valid numbers
    if (isNaN(firstNum) || isNaN(secondNum)) {
      throw TypeError("Input must be numbers");
    }

    // avoid divide by zero error
    if (secondNum === 0 && op === '/') {
      throw new DividedByZeroError("Cannot divide by 0");
    }

    // calculate and render the result
    const result = document.getElementById('result');
    switch (op) {
      case '+':
        result.innerHTML = `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
        break
      case '-':
        result.innerHTML = `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
        break
      case '*':
        result.innerHTML = `${firstNum} * ${secondNum} = ${firstNum % secondNum}`;
        break
      case '/':
        result.innerHTML = `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
    };
  } catch (err) {
    document.getElementById('result').innerHTML = err.message;
    console.log(err);
  } finally {
    alert(result.innerHTML);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  /* demo an example of console.log() */
  document.getElementById('console-log').onclick = () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const op = document.getElementById('operator').value;
    console.log(`You entered: ${num1} ${op} ${num2}`);
  };

  /* demo an example of console.error() */
  document.getElementById('console-error').onclick = () => {
    console.error('Console Error Demo');
  };

  /* demo an example of console.table() */
  document.getElementById('console-table').onclick = () => {
    const jokes = [
      {
        "id":189,
        "type":"general",
        "setup":"What did the ocean say to the beach?",
        "punchline":"Thanks for all the sediment."
      },
      {
        "id":314,
        "type":"general",
        "setup":"Why are ghosts bad liars?",
        "punchline":"Because you can see right through them!"
      },
      {
        "id":221,
        "type":"general",
        "setup":"What do you call a group of killer whales playing instruments?",
        "punchline":"An Orca-stra."
      }];
      console.table(jokes);
  };

  /* print a JSON representation of the calculator with console.dir() */
  document.getElementById('console-dir').onclick = () => {
    console.dir(document.getElementById('calculator'));
  };

  /* print an XML representation of an element with console.dirxml() */
  document.getElementById('console-dirxml').onclick = () => {
    console.dirxml(document.getElementById('calculator'));
  };

  /* Attach an event handler for console-error in group log */
  function createInfoElement() {
    console.info(document.getElementById('console-error').value);
  }

  /* start a demo of console.group() */
  document.getElementById('console-group-start').onclick = () => {
    const label = 'Console Log Group';
    console.group(label);
    document.getElementById('console-error').addEventListener('click', createInfoElement);
  };


  /* end a demo of console.group() */
  document.getElementById('console-group-end').onclick = () => {
    const label = 'Console Log Group';
    console.groupEnd(label);
    // remove the group listener for console-error
    document.getElementById('console-error').removeEventListener('click', createInfoElement);
  };

  /* start a timer clock */
  document.getElementById('console-time-start').onclick = () => {
    console.time('Console Timer');
  };

  /* end a timer clock */
  document.getElementById('console-time-end').onclick = () => {
    console.timeEnd('Console Timer');
  };

  /* demo an example of console.trace() */
  document.getElementById('console-trace').onclick = () => {
    const children = () => { parents (); };
    const parents = () => { grandparent(); };
    const grandparent = () => { greatGrandparents(); };
    const greatGrandparents = () => { console.trace(); };
    children();
  };

  /* trigger a global error */
  document.getElementById('global-error').onclick = function triggerError() {
    let errorHandler = window.onerror;
    errorHandler = function (message, url, lineNumber) {
      console.log(`There is an error: ${message} at line ${lineNumber} from ${url}`);
      return true;
    }
    
    try {
      console.log(kaboo);
    } catch(e) {
      errorHandler(e.message, e.url, e.lineNumber);
    }
  };

  /* get the inputs, operation and calculate the result */
  document.getElementById('calculate').onclick = calculate;

});

class DividedByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DividedByZeroError";
  }
}

/* Track errors */
TrackJS.track('Testing TrackJS!');