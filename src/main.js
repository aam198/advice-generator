const dice = document.querySelector('.dice-button');
const title_id = document.querySelector('.title-id');
const adviceText = document.getElementById('advice-insert');



async function adviceData() {
  // Fetch Advice
  const response = await fetch("https://api.adviceslip.com/advice");
  const jsonData = await response.json();
  // Check data from response
  console.log(jsonData);
  console.log(jsonData.slip.advice);
  console.log(jsonData.slip.id);
  // Place in variables
  const id = jsonData.slip.id;
  const advice = jsonData.slip.advice;
  // Display on component
  title_id.innerHTML = id;
  adviceText.innerHTML = advice;
}


dice.addEventListener('click', () => {
  console.log(123);
  adviceData();
})

// Load a quote when page is loaded
window.addEventListener("DOMContentLoaded", adviceData);