window.alert = function (message, timeout = null) {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.setAttribute('style', `
        position:absolute;
        top:-29px;
        background:rgb(23, 124, 229);
        color:white;
        font-size:2.5rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight:500;
        padding:1.3rem 3rem;
        border-radius:1rem;
        `)
    alert.innerHTML = `${message} <i class="fa-regular fa-circle-check" style="color: #ffffff; font-weight:600;"></i>`;
    quote.appendChild(alert);
        setTimeout(()=>{
            alert.remove();
            btn3.style.display = 'block';
        },600)
}
const quote = document.getElementById('quote');
const quoteText = document.getElementById('quote-text');
const author = document.getElementById('author');
const btn1 = document.getElementById('btn-1');
const btn3 = document.getElementById('btn-3');

const api_Url = 'https://quotes-api-self.vercel.app/quote';

btn1.addEventListener('click', () => { quotes(api_Url) });

function quotes(url) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            quoteText.innerHTML = data.quote;
            author.innerHTML = data.author;
        })
        .catch(err => {
            console.log(err);
        });
    btn3.style.display = 'none';
}

quotes(api_Url);

function copyText() {
    const textArea = document.createElement('textarea');

    textArea.value = `${quoteText.innerHTML} \n --- by ${author.innerHTML}`;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');

    document.body.removeChild(textArea);

    alert("Copied");;
}

function faceBook() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A5500%2Findex.html&amp;src=sdkpreparse", "Quotes", "width= 500, height=300");
}