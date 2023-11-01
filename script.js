// //exec 1 atividade 4

// let valor = Number(prompt("Digite seu numero"));

// while (valor > 0) {
//   if (valor >= 50) {
//     let quantidade = parseInt(valor / 50);
//     document.write(`GC$ 50,00 -> ${quantidade} <br>`);
//     valor -= quantidade * 50;
//   } else if (valor >= 10) {
//     let quantidade = parseInt(valor / 10);
//     document.write(`GC$ 10,00 -> ${quantidade} <br>`);
//     valor -= quantidade * 10;
//   } else if (valor >= 5) {
//     let quantidade = parseInt(valor / 5);
//     document.write(`GC$ 5,00 -> ${quantidade} <br>`);
//     valor -= quantidade * 5;
//   } else if (valor >= 1) {
//     let quantidade = parseInt(valor / 1);
//     document.write(`GC$ 1,00 -> ${quantidade} <br>`);
//     valor -= quantidade * 1;
//   }
// }

// //exec 1 ativadade 5
// let verificador = true;
// let media = 0;
// let idades = 0;

// while (verificador) {
//   let idade = Number(prompt("Digite a sua Idade"));

//   idades++;
//   media += idade;

//   if (idade == 999) {
//     verificador = false;
//     media -= 999;
//     idades--;
//   }
// }
// document.write(
//   `Existem ${idades} alunos e a media de idade é ${media / idades}`
// );

// //exec 2 ativade 5
// let wageMan = 0;
// let wageWoman = 0;
// let continuar = true;

// while (continuar) {
//   let salario = Number(prompt("Qual o salario?"));
//   let sex = prompt("Qual o sexo? m ou f");

//   if (sex == "m") {
//     wageMan += salario;
//   } else if (sex == "f") {
//     wageWoman += salario;
//   }
//   continuar = confirm("Deseja continuar?");
// }

// document.write(`O total de salarios pagos a os homens foi de ${wageMan}<br>`);
// document.write(
//   `O total de salarios pagos a os mulheres foi de ${wageWoman}<br>`
// );

// //exec 3 atividade 5
// document.write("Contagem: ");
// let inicial = Number(prompt("Digite o valor Inicial"));
// let final = Number(prompt("Digite o valor final"));
// let incremento = Number(prompt("Digite o valor do incremento"));

// for (let valor = inicial; valor < final; valor += incremento) {
//   document.write(`${valor} `);
// }
// document.write("Acabou!");

//exec 4 atividade 5

// let name = prompt("Digite seu nome:");
// let sex = prompt("Digite seu sexo: H ou M").toUpperCase();
// let value = Number(prompt("Valor da sua compra:"));

// if (sex == "H") {
//   let total = value * 0.95;
//   document.write("O total da sua compra foi de " + total);
// } else if (sex == "M") {
//   let total = value * 0.87;
//   document.write("O total da sua compra foi de " + total);
// } else {
//   document.write("Sexo invalido");
// }

// //exec 5 atividade 5

// let distance = Number(prompt("Quantos KM você quer percorrer?"));

// if (distance < 200) {
//   let calc = distance * 0.5;
//   document.write("Você tem que pagar R$" + calc);
// } else {
//   let calc = distance * 0.45;
//   document.write("Você tem que pagar R$" + calc);
// }

// //exec 6 atividade 6

// let largura = Number(prompt("Qual a largura?"));
// let comprimento = Number(prompt("Qual o comprimento?"));
// let area = largura * comprimento;

// if (area < 100) {
//   document.write("TERRENO POPULAR");
// } else if (area > 100 && area < 500) {
//   document.write("TERRENO MASTER");
// } else {
//   document.write("TERRENO VIP");
// }
