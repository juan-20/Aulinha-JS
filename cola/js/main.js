function logar(){
  const nome =     document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  console.log(senha);
  console.log(nome);

  if (nome === 'Juan' & senha=== '123'){
    // location.assign("https://twitter.com/home");
    location.assign("./logado.html");
  }else{
    document.getElementById("cu").innerHTML = "Errou sucumba";
  }
}