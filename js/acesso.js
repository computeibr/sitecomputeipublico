var numeroSecreto = "Sara@"

// parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
  var chute = prompt('Digite o acesso')
  //se o chute for igual ao número secreto 
  if (chute == numeroSecreto) {
    alert('Acesso Autorizado!')
  } else if (chute > numeroSecreto) {
    alert('Não Autorizado... ')
  } else if (chute < numeroSecreto) {
    alert('Não Autorizado... ')
  }
}
