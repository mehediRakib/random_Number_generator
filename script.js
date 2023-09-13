const btn =document.getElementById('btn');
btn.addEventListener('click', () => {
    const num = Math.floor(Math.random()*1000);
    document.getElementById('number').innerHTML=num;

});