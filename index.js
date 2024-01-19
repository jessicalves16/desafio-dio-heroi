//Desafio Classificação Nível do(a) Herói(na)

//Declaracao das variaveis nome e XP
let nomeHeroi = "Jessica"
let nivelXP = 10005

//Variavel para armazenar a Classificação
let classificacaoHeroi

if (nivelXP <= 1000){
    classificacaoHeroi = "Ferro"
    console.log(classificacaoHeroi)
} 

else if (nivelXP >=1001 && nivelXP <=2000){
    classificacaoHeroi = "Bronze"
    console.log(classificacaoHeroi)
} 

else if (nivelXP >=2001 && nivelXP <=5000){
    classificacaoHeroi = "Prata"
    console.log(classificacaoHeroi)
} 

else if (nivelXP >=5001 && nivelXP <=7000){
    classificacaoHeroi = "Ouro"
    console.log(classificacaoHeroi)
} 

else if (nivelXP >=7001 && nivelXP <=9000){
    classificacaoHeroi = "Ascendente"
    console.log(classificacaoHeroi)
} 

else if (nivelXP >=9001 && nivelXP <=10000){
    classificacaoHeroi = "Imortal"
    console.log(classificacaoHeroi)
} 

else if (nivelXP >=10001){
    classificacaoHeroi = "Radiante"
    console.log(classificacaoHeroi)
}

console.log("A heroína de nome " + nomeHeroi + " está no nível " + classificacaoHeroi)