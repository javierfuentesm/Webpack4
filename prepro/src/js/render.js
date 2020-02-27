const render = data => {
  const pokemon = document.createElement("img");
  console.log(data.sprites.front_default);
  pokemon.setAttribute("src", data.sprites.front_default);
  document.body.append(pokemon);
};
export default render;
