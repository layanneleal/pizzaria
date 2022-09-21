function fecharConta () {
  let saida = document.querySelector('div#res')
  let conta = prompt('Qual o valor da conta?')
  let clientes = parseInt(prompt('Número de clientes?'))

  let vConta = conta.replace('.', '').replace(',','.')
  vConta = parseFloat(vConta);
  
  if ( vConta > 0 && clientes > 0 ) {

  let valorPorPessoas = vConta/clientes

  //alert(valorPorPessoas) 
  saida.innerHTML = `A conta no valor R$ <strong>${conta}</strong> divido para ${clientes} clientes fica: R$ <strong>${valorPorPessoas.toFixed(2)}</strong> `

  }else{
    alert('Digite o valor da conta e a quantidade de clientes.')
    saida.innerHTML = ''
  }
}