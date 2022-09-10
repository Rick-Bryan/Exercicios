/*const double= function(number){
  doubleResult = number*2
  console.log(doubleResult)
  return doubleResult;
}
app.js
No início deste ano
24 De Jun.

Zero 07 fez o upload de 1 item
JavaScript
app.js*/
/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
/*
function multi(n1 = 2, n2= 10){
  return n1*n2
}
console.log(multi(3,4))
*/
/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
/*const divisao= function(n1 =2,n2 =10){
  return n1/n2;
}
console.log(divisao(5,2))
*/
/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
/*function mostrar(value=10){
  console.log(value)
}
mostrar()

let contExibicao = 1
for(let i = 0; i<7;i++){
  function show(){
  console.log(`Esta é a ${contExibicao} vez que essa string é exibida.`)
  }
  show()
  contExibicao++
}
*/
//RESOLUÇÂO DO CURSO 

const log = function(value=" Você deve passar um valor como argumento"){
  console.log(value)
}
for(let i=0; i < 7; i++){
  let counter = i+1
  //log(`Esta é a ${counter} vez que essa string é exibida.`)
}

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
/*let newArray= []
function upper(){
  for(let i=0;i<millennialWords.length;i++){
    newArray.push(millennialWords[i].toUpperCase())
  }
  return newArray
}
const result = upper()*/
//console.log(result)
const transformToUpperCase= function(array=[]){
  let novoArray= []
  for(let i=0;i<array.length;i++){
    const wordsInUpperCase = array[i].toUpperCase()
    novoArray.push(wordsInUpperCase)
  }
  return novoArray
}
const millennialWordsInUpperCase = transformToUpperCase(millennialWords)
//console.log(millennialWordsInUpperCase)
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
/*
let contPositivo = 0
let contNegativo = 0
let countNumber = 0
function verify(){
  for(let i = 0; i<randomNumbers.length;i++){
    if(randomNumbers[i] >= 0){
      contPositivo++
    }
    else{
      contNegativo++
    }
    countNumber++
  }
  console.log(`O array "randomNumbers" possui ${countNumber} números, sendo ${contPositivo} positivos e ${contNegativo} negativos.`)

}  
verify()
*/

//RESOLUCAO DO CURSO

let positiveNumbersCounter = 0
let negativeNumbersCounter = 0
const isPositive= function(number = 0){
  return number>=1
}
for(let i=0;i<randomNumbers.length;i++){
  const isPositiveNumber= isPositive(randomNumbers[i])
  
  if(isPositiveNumber){
    positiveNumbersCounter ++
  }
  else{
    negativeNumbersCounter ++
  }
  
}
//console.log(`O array "randomNumbers" possui ${randomNumbers.length} numeros,sendo ${positiveNumbersCounter} positivos e ${negativeNumbersCounter} negativos.`)



/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
/*function getOddNumbers(array){
  let impar = []
  for(let i=0 ;i< array.length;i++){
    if(array[i]%2!==0){
      impar.push(array[i])
    }
  }
  return impar
}

const newNumber = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
console.log(newNumber)*/
//Resolução do curso

const getOddNumbers = function (numbers = []){
  let newArray = []
  
  for(let i=0; i<numbers.length;i++){
    const number = numbers[i]
    const isOddNumber = number %2 !==0
    
    if( isOddNumber ){
      newArray.push(number)
    }
  }
  
  return newArray;
}
const oddNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
//console.log(oddNumbers)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/
//Não consegui fazer
//RESOLUÇÂO DO CURSO 
const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]
let sentence = ""
for (let i= 0;i<functions.length;i++){
  const string= `${functions[i]()} `
  sentence += string
  
}
console.log(sentence)
