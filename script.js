const main = document.getElementById("main");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const selected = document.getElementById("selected");

const button = document.getElementById("button");

const numberArray = [one, two, three, four, five];

let activeElement = null;

for (let i = 0; i < numberArray.length; i++) {
  numberArray[i].addEventListener("click", () => {
    if (activeElement) {
      activeElement.classList.remove("number-active");
    }
    numberArray[i].classList.add("number-active");
    activeElement = numberArray[i];
  });
}

button.addEventListener("click", () => {
  if (activeElement.classList.contains("number-active")) {
    main.innerHTML = `
    <section class="thank-state" id="thank-state">
        <img
          src="images/illustration-thank-you.svg"
          alt="illustration-thank-you"
          class="illustration-thank-you"
        />
        <p class="select-text text">
          You selected <span class="selected" id="selected">${
            activeElement ? activeElement.textContent : "#"
          }</span> out of 5
        </p>
        <h2 class="title">Thank you!</h2>
        <p class="text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </section>

    `;
  }
});
