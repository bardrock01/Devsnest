const url = 'https://discord.com/api/webhooks/858291674186121226/-Bsu8wxAHwbrD4EHL25NTIKtI43ELCuACx1CxV_uTV3l-ko2cI_HK1oHUp59-JOoDiR2';
const memeUrl = 'https://meme-api.herokuapp.com/gimme';
const btn = document.querySelector('.btn');



btn.addEventListener('click', async() => {
    const res1 = await fetch(memeUrl);
    const data1 = await res1.json()
    let response = await fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: data1.url })
    });
    let data = await response.json();



})