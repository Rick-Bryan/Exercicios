let user = {
  name: "Rick",
  age: 19,
  email: "rickbryanbatistalima@gmail.com",
  city: "Belém",
  blogPosts: ["Empadão de frango", "4 Receitas de purê de batata"],
  login: function(){
    console.log(`Logado como ${this.name}`)
  },
  logout: function(){
    console.log(`Você deslogou de ${this.name}`)
  },
  logBlogPosts: function(){
    console.log(`${this.name} escreveu os seguintes posts: `)
    this.blogPosts.forEach(post =>{
      console.log(post)
    })
  }
}*/
user.logBlogPosts()
//Fazendo uma function declaration menor e utilizando this 
let user2 = { 
  name: "Rick",
  age: 19,
  email: "rickbryanbatistalima@gmail.com",
  city: "Belém",
  blogPosts: ["Empadão de frango", "4 Receitas de purê de batata"],
  login () {  // sem a palavra function e sem os pontos : podemos usar assim
    console.log(`Logado como ${this.name}`)
  },
  logout () {  // sem a palavra function e sem os pontos :
    console.log(`Você deslogou de ${this.name}`)
  },
  logBlogPosts () {  // sem a palavra function e sem os pontos :
    console.log(`${this.name} escreveu os seguintes posts: `)
    this.blogPosts.forEach(post =>{
      console.log(post)
    })
  }
}
user2.logBlogPosts()
*/
/*
app.js
No início deste ano
24 De Jun.
Desconhecido fez o upload de 1 item
JavaScript
app.js*/



/*
  01

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/
const name = "Rick"

//Verificando se é um escopo global (é obvio que é , mas segue o roteiro)
for (let i= 0; i < 5;i++){
  //console.log(` Dentro do bloco de código : ${name}`)
}
//console.log(`Fora do bloco de código : ${name}`)
/*
  02

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/
const showMyAge = () =>{
  let idade = 19
  console.log(idade)
}
//showMyAge()
//console.log(idade)
//R= porque a variavel foi declarada em um escopo de bloco

/*
  03

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/

const car = {
  name: "Hb20",
  brand: "Hyundai",
  colors: ["Preto","Branco","Vermelho"],
  isRunning: false,
  run: function () {
    this.isRunning = true
    return `O ${this.name} está em movimento`
  },
  stop: function () {
    this.isRunning = false
    return `O ${this.name} está parado`
  },
  getColorsMessage:function () {
    return `O ${this.name} está disponível nas cores ${this.colors[0]}, ${this.colors[1]} e ${this.colors[2]}`
  }
}

// Resolução do curso 
const car = {
  name: "Hb20",
  brand: "Hyundai",
  colors: ["Preto","Branco","Vermelho"],
  isRunning: false,
  run: function () {
    this.isRunning = true
    return `O ${this.name} está em movimento`
  },
  stop: function () {
    this.isRunning = false
    return `O ${this.name} está parado`
  },
  getColorsMessage:function () {
    const lastItem = this.colors[this.colors.length-1]
    const colors = this.colors.join(',').replace(lastItem, ` e ${lastItem}`)
    
    return `O ${this.name} está disponível nas cores ${colors}`
  }
}

/*
  04

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/
console.log(car.run())
console.log(car.isRunning === true)
/*
  05

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/
//console.log(car.stop())
//console.log(car.isRunning === false)
/*
  06

  - Exiba, no console, a mensagem com as cores do carro.
*/
console.log(car.getColorsMessage())
/*
  07

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
//console.log(`O carro é um ${car['brand']} ${car['name']}`)
