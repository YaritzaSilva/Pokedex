const atualizaTela = (pokemon)=> 
{
    const imagem=document.getElementById("fotopokemon");
    const nomePokemon=document.getElementById("nomepokemon");
    imagem.src=pokemon.sprites.other["official-artwork"].front_default;
    nomePokemon.innerHTML=pokemon.name;
}

const urlOutroPokemon = () => 
{
    const numeroSorteado=Math.round(Math.random()*150) +1;
    const urlPokemon=`https://pokeapi.co/api/v2/pokemon/${numeroSorteado}`; 
    return urlPokemon;
}

const iniciar=async()=> 
{
    const url=urlOutroPokemon();
    const response=await fetch(url);
    const result=await response.json();
    atualizaTela(result);
};


document.addEventListener('DOMContentLoaded', iniciar);