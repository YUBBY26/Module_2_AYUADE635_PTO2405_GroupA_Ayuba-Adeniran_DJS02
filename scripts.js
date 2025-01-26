const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const numDividend = Number(dividend);
  const numDivider = Number(divider);
  if (dividend === '' || divider === '') {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again.';
  } else if (divider === '0') {
    result.innerText = 'Division not performed. Invalid number provided. Try again.';
    console.error('Error: Division by zero attempted.');
  } else if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "<h1>Error: Something critical went wrong. Please reload the page</h1>";
    console.error('Error: Non-numeric input detected.');
} else {
    result.innerText = Math.trunc(numDividend / numDivider);
  }
});