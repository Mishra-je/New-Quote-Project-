const urlhold="https://v2.jokeapi.dev/joke/Any?type=single";

const Quote = document.getElementById("Quote");
const btn  = document.getElementById("btn");

async function getCode(url)
{
    const hold = await fetch(url)
    const hold1= await hold.json();
    console.log(hold1);
    Quote.innerHTML=hold1.joke;

}

getCode(urlhold);

