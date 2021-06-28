const url = 'https://discord.com/api/webhooks/858291674186121226/-Bsu8wxAHwbrD4EHL25NTIKtI43ELCuACx1CxV_uTV3l-ko2cI_HK1oHUp59-JOoDiR2';
const btn = document.querySelector('.btn');


btn.addEventListener('click', async() => {
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);


})