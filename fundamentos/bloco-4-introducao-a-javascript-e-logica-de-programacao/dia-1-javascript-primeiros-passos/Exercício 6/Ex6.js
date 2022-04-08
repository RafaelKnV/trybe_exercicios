let peca ="RAinHa";
let pecaLower = peca.toLowerCase()
switch (pecaLower) {
    case "rei":
     console.log("Uma casa em qualquer direção");
     break;

    case "rainha":
     console.log("Colunas, fileiras e diagonais");
     break;

    case "bispo":
     console.log("Diagonais");
     break;

    case "cavalo":
     console.log("Em 'L'(duas casas para a direção escolhida, e, uma para esquerda ou direita");
     break;

    case "torre":
     console.log("Colunas ou Fileiras");
     break;

    case "peao":
     console.log("Uma casa para frente");
     break;

    default:
        console.log("erro");
        break;
}