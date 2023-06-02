let form = document.getElementById("form");

const operations = {
  suma: 1,
  resta: 2,
  multiplicacion: 3,
  division: 4,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = new FormData(e.target);

  let num1 = Number(form.get("numero1"));
  let num2 = Number(form.get("numero2"));

  let operator = Number(form.get("operator"));

  let result = document.getElementById("result");

  switch (operator) {
    case operations.suma:
      result.innerHTML = Number(num1) + Number(num2);
      break;
    case operations.resta:
      result.innerHTML = Number(num1) - Number(num2);
      break;
    case operations.multiplicacion:
      result.innerHTML = Number(num1) * Number(num2);
      break;
    case operations.division:
      result.innerHTML = (Number(num1) / Number(num2)).toFixed(2);
      break;
    default:
      result.innerHTML = "Error";
  }
});
