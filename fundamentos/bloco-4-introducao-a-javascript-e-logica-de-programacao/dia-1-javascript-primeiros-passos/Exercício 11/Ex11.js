const salario =3000
let inss = 0
let ir = 0


if(salario <= 1556.94){
    inss = salario * 0.08
}
else if(salario <= 2594.92){
    inss = salario * 0.09
}
else if(salario <= 5189.82){
    inss = salario * 0.11
}
else{
    inss =570.88
}
let salarioSemInss = (salario-inss)
let liquido = 0
if( salarioSemInss < 1903.99){
    liquido = salarioSemInss
}
else if( salarioSemInss < 2826.66){
    liquido = salarioSemInss - (salarioSemInss*0.075) + 142.8 
}
else if( salarioSemInss < 3751.06){
    liquido = salarioSemInss - (salarioSemInss*0.15) + 354.8 
}
else if( salarioSemInss < 4664.69){
    liquido = salarioSemInss - (salarioSemInss*0.225) + 636.13 
}
else{
    liquido = salarioSemInss - (salarioSemInss*0.275) + 869.36 
}
console.log('R$'+liquido)