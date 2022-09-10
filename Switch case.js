/*const grade = 'A'
switch(grade){
  case 'A':
    console.log("Você tirou um A")
    break
  case 'B':
    console.log('Você tirou um B')
    break
  case 'C':
    console.log('Você tirou um C')
    break
  case 'D':
    console.log('Você tirou um D')
    break
  case 'E':
    console.log('Você tirou um E')
    break
  default:
    console.log('Nota inválida')
}*/

/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

//console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo','leão']
const animalInc= animals.includes('leão')
/*switch(animalInc){
  case true:
    console.log("Existe um leão no array animals.")
    break;
  default:
    console.log("Leão não existe no array animals.")
}*/
/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 23]
let som = 0
const limit= 400

//Resolução do curso

/*for(let i=0;i<randomNumbers.length;i++){
  if(som > limit){
    console.log(`A soma ultrapassou ${limit}. Até aqui, o valor atual é ${som}.`)
    break
  }
  som += randomNumbers[i]
}*/

/*
for(let i=0;i<randomNumbers.length;i++){
  som+=randomNumbers[i]
}
let verify= som>400
switch(verify){
    case true:
      console.log(`A soma ultrapassou 400. Até aqui, o valor atual é ${som}.`)
}
*/

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
/*let sentenceConcat = sentence.join(' ')
let sentenceVerify= sentenceConcat.includes('certeza')
switch(sentenceVerify){
  case true:
    var resultado = sentenceConcat.replaceAll('certeza','')
    
}*/
//console.log(resultado)
//Resolucao do curso

let newSentence = '';
for(let i=0;i<sentence.length;i++){
  const word = sentence[i]
  if (word === 'certeza'){
    continue
  }
  newSentence += `${word} `
}
console.log(newSentence)

 
/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]
/*let countString = 0
let arrayString=[]
let countBolean = 0
let count = 0
for(let i=0; i<randomValues.length;i++){
  if (countString === 4){
    break
  }
  if (typeof randomValues[i] === 'string' ){
    countString++
    arrayString.push(randomValues[i])
  }
  if (typeof randomValues[i] === 'boolean'){
    countBolean++
  }
  count ++
}
  
console.log(`
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são ${arrayString};
      - Até que as primeiras 4 strings fossem iteradas, ${countBolean} booleans foram iterados;
      - O array foi iterado por ${count} vezes.`)
*/
/*let stringsAmount= 0
let booleansAmount =0
let totalIterations = 0
let firstFourStrings = []
for(let i = 0;i<randomValues.length;i++){
  const item = randomValues[i]
  const typeOfItem = typeof item
  const isItemAString = typeOfItem === 'string'
  const isItemABoolean = typeOfItem === 'boolean'
  if( stringsAmount ===4){
    break
  }
  if (isItemAString){
    stringsAmount++
    firstFourStrings.push(item)
  }
  if (isItemABoolean){
    booleansAmount++
  }
  totalIterations++
}
const lastItem= firstFourStrings[firstFourStrings.length-1]
const fourStrings = firstFourStrings.join(', ').replace(`, ${lastItem}`, ` e ${lastItem}`)
console.log(`
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são ${fourStrings};
      - Até que as primeiras 4 strings fossem iteradas, ${booleansAmount} booleans foram iterados;
      - O array foi iterado por ${totalIterations} vezes.`)
*/
/*
  06

  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = "água";
/*let bebida = ""
switch (drinkType){
  case "água":
    bebida = "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio."
    console.log(bebida)
    break
  case "refrigerante":
    bebida = "Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar."
    console.log(bebida)
    break
  case "suco":
    bebida = "Bebida produzida do líquido extraído de frutos."
    console.log(bebida)
    break
  default:
    console.log("Bebida desconhecida")
}  
*/
//Resolução do curso
let drinkMessage = null 
switch (drinkType){
  case "água":
    drinkMessage = "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio."

    break
  case "refrigerante":
    drinkMessage = "Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar."
    
    break
  case "suco":
    drinkMessage = "Bebida produzida do líquido extraído de frutos."
    
    break
  default:
    drinkMessage= "Bebida desconhecida"
}  
console.log(drinkMessage)

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const a = 1

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

/*switch(a){
  case 0:
    console.log(`O valor de "a" é ${a}`)
    break
  case 1:
    console.log(`O valor de "a" é ${a}`)
    break
  default:
    console.log('O valor de "a" é qualquer número, exceto 0 e 1')
}*/

//RESOLUÇÃO DO CURSO

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }
const number = 2
const numberMessage =` O valor de "number" é `
switch(number){
  case 0:
    console.log(`${numberMessage} ${number}`)
    break
  case 1:
    console.log(` ${numberMessage} ${number}`)
    break
  default:
    console.log(` ${numberMessage} qualquer número, exceto 0 e 1`)
}
