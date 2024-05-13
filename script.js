const main = document.getElementById("main");
const selected = document.getElementById("selected");
const button = document.getElementById("button");

const values = document.querySelectorAll('[data-val]')

const close = document.getElementById("close");

let rate = 0

// ForEach is an Array method, you can use this to iterate thought you Array.
values.forEach((btn, idx)=>{
    btn.addEventListener('click', ()=>{
        selectBtn(btn)
        let btnValue = idx + 1
        rate = btnValue
    })
})


button.addEventListener("click", () => {
    selected.innerText = rate
    toggleCards()
});

close.addEventListener("click", () => {
  //After 5 seconds, it will show the card again.
    setTimeout(()=>{
        toggleCards()
    }, 5000)
});

function toggleCards(){
    const rateCard = document.querySelector('#rating-state')
    const thankCard = document.querySelector('#thank-state')
    rateCard.classList.toggle('hidden') //Toggle the hidden class, so, if it will add/remove the class.
    thankCard.classList.toggle('hidden') //Toggle the hidden class, so, if it will add/remove the class.
}

function selectBtn(btn){
    values.forEach((btn)=>{
        btn.classList.remove('selected')
    })

    btn.classList.add('selected')
}
