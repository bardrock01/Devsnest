const memeUrl = 'https://meme-api.herokuapp.com/gimme';
const btn = document.querySelector(".btn");
const memes = document.querySelector('.emptyImage');

async function getData() {
    const res = await fetch(memeUrl);
    const data = await res.json()
    return data
}
btn.addEventListener('click', async() => {
    let response = getData();
    let meme = await response;
    console.log(meme);
    var img = document.createElement('img')
    img.src = meme.url;
    memes.appendChild(img);
    img.classList.add('designMeme');
})