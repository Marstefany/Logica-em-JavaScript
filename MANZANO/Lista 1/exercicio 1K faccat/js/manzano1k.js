    /* E laborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
    banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
    calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
    total acumulado da área residencial */

let nome_comodo
let afirmacao = (prompt("Deseja continuar?")).toUpperCase() 

let area = 0
let largura = 0
let comprimento = 0
let total = 0
let contadora = 0

while (afirmacao === 'SIM') { 
    nome_comodo = prompt ("Digite o nome do cômodo")
    largura = Number(prompt ("Digite a largura do(a) " + nome_comodo))
    comprimento = Number(prompt ("Digite o comprimento do(a) " + nome_comodo))
    area = largura * comprimento
    alert("O comprimento desse cômodo é " + area + "m²")
    total += area
    contadora++
    afirmacao = prompt("Continuar o cálculo ").toUpperCase()
} 

alert ("O número de comodos contados foram " + contadora + " e p total de area é " + total + "m2")