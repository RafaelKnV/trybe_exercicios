const venda = 44
const custo = 30

var custoTotal = custo +(custo*0.2)
var lucro = venda - custoTotal

if(custo < 0 || venda < 0){
    console.log("erro")
}
else{
    console.log(lucro*1000)
}