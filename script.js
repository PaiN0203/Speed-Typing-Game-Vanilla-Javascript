const quote_api = 'https://api.quotable.io/random';
const quoteDisplay = document.getElementById("quoteDisplay")
const quoteInput = document.getElementById("quoteInput")
const timer = document.getElementById('timer')



quoteInput.addEventListener('input', ()=>{
    const quoteArr = quoteDisplay.querySelectorAll('span')
    const arrValue = quoteInput.value.split('')
    let correct = true;
    quoteArr.forEach((char , index)=>{
        const character = arrValue[index]
        if(char === null){
            char.classList.remove('correct')
            char.classList.remove('incorrect')
            correct = flase
        }   else if(character == char.innerText){
            char.classList.add('correct')
            char.classList.remove('incorrect')
        } else {
            char.classList.remove('correct')
            char.classList.add('incorrect')
            correct = flase
        }
    })

    if (correct) renderNewQuote()
})

function getRandomQuote(){
    return fetch(quote_api)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote(){
    const quote = await getRandomQuote()
    quoteDisplay.innerHTML = ''
    quote.split('').forEach(char => {
        const character = document.createElement('span')
        character.innerText = char
        quoteDisplay.appendChild(character)
    })
    quoteInput.value = null
    startTime()
    
}

let date

function startTime(){
    timer.innerText = 0;
    date = new Date()
    setInterval(() => {
        timer.innerText = getTime()
    }, 1000);
}


function getTime(){
    return Math.floor((new Date() - date) / 1000)
}

renderNewQuote()


