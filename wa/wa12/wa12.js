const newBtn = document.querySelector('#js-new-quote').addEventListener('click', () => {
    move(); 
    getKanyeQuote(); 
});

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

const kanyeQuoteEndpoint = 'https://api.kanye.rest';

async function getKanyeQuote() {
    try {

        document.getElementById("myBar").style.width = '0%';

        const response = await fetch(kanyeQuoteEndpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();

        displayQuote(json.quote);
        quote = '';
    } catch (err) {
        console.log(err);
    }
}

function displayQuote(quoteText) {
    questionTxt.textContent = quoteText;
}

var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

getKanyeQuote(); 



