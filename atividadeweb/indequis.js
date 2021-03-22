/*

EXERCICIO 1!

const nome = prompt('Digite seu nome:');
let altura = prompt('Digite sua altura:');
let peso = prompt('Digite seu peso:');

let alturanova = parseFloat(altura);
let pesonovo = parseFloat(peso);
 
let imc = pesonovo / (alturanova * alturanova);

console.log(`O imc de ${nome} é ${imc.toFixed(2)}`);

EXERCICIO 2!

const nome = prompt('Digite seu nome:');
let altura = prompt('Digite sua altura:');
let peso = prompt('Digite seu peso:');

let alturanova = parseFloat(altura);
let pesonovo = parseFloat(peso);
 
let imc = pesonovo / (alturanova * alturanova);

if (imc < 17) {
    console.log(`Seu IMC é: (${imc.toFixed(2)}) esta muito abaixo do peso! Consulte um médico`);

} else if(imc >= 17 && imc < 18.5){
    console.log(`Seu IMC é: (${imc.toFixed(2)}) esta abaixo do peso! Procure manter uma dieta`);

} else if(imc >= 18.5 && imc < 25){
    console.log(`Seu IMC é: (${imc.toFixed(2)}) Peso normal! Continue mantendo a boa forma física!`);

} else if(imc >= 25 && imc < 30){
    console.log(`Seu IMC é: (${imc.toFixed(2)}) Acima do peso! Procure comer apenas nos horários certos!`);

} else if(imc >= 30 && imc < 35){
    console.log(`Seu IMC é: (${imc.toFixed(2)}) Obesidade I! Procure um nutricionista e faça mais exercícios!`);

} else if(imc >= 35 && imc < 40){
    console.log(`Seu IMC é: (${imc.toFixed(2)}) Obesidade II! Seu IMC é preocupante!`);

} else{
    console.log(`O IMC é: (${imc.toFixed(2)}) Obesidade III (mórbida)! Procure um médico com urgência!`);
}

EXERCICIO 3! 

const nomeUsu = prompt('Digite o nome de usuário:');
const senha = prompt('Digite a senha:');

if (nomeUsu === "aluno" && senha === "123" || nomeUsu === "professor" && senha === "456") {
    console.log("Sucesso");}
else{
    alert("Nome de usuário ou senha incorreto.");} 

EXERCICIO 4!  

const numero = prompt("Digite um numero:");
let array = [];

for(let i = 0; i < numero; i++){
    const palavra = prompt("Digite uma palavra:");
    array.push(palavra);
}

    for(let i=array.length;i>=0;i--) {
    const aux=array[i];
    if(i<array.length) {
        console.log(`${aux}`);
    }else{}


    }

EXERCICIO 5!

consultaAposen()

function consultaAposen (){
    const nome = prompt(`informe seu nome`);
    const ano = prompt(`informe seu ano de nascimento`);

    const idade = calcularIdade(parseInt(ano));

    if (idade>=65) {
        console.log(`você ja pode se aposentar ${nome}`);
        alert(`Você ja pode se aposentar ${nome}!`);} 
        else {
        console.log(`Você ainda não pode se aposentar ${nome}`);
        alert(`Você ainda não pode se aposentar ${nome}!`);}
}
function calcularIdade (anoNasci) {
    return 2021-anoNasci;}

EXERCICIO 6! */

let restaurantes = [];
let valores = [];
let gorjetas = [];

const taxa = (valor) => {
    if (valor < 50) {
        return valor * 0.2;}
    else if (valor >= 50 && valor < 200) {
        return valor * 0.15;}
    else {
        return valor * 0.1;}   
}
for (let i=0;i<3;i++) {
    restaurantes[i] = prompt(`Digite o nome do ${i + 1}º restaurante:`);
    valores[i] = parseFloat(prompt(`Digite o valor total do ${i + 1}º restaurante:`)).toFixed(2);
    gorjetas[i] = taxa(parseFloat(valores[i])).toFixed(2);}
const totalidade = (valores,restaurantes,gorjetas) => {
    for (let i=0;i<3;i++) {
        console.log(`Restaurante: ${restaurantes[i]}-[Valor: R$ ${valores[i]} Taxa do Garçom: R$ ${gorjetas[i]} 
        Total: R$ ${parseFloat(gorjetas[i]) + parseFloat(valores[i])}`); 
    }   
}
totalidade(valores,restaurantes,gorjetas);