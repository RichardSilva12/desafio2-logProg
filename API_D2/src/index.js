let qntdVitorio = 7;
let qntdDerrota = 4;
let nivel = "";

function calcularNivel(qntdVitorio, qntdDerrota){
    //calcular o saldo de vitoria
    let saldoVitoria = qntdVitorio - qntdDerrota;

    if(qntdVitorio >=101){
        nivel = "Imortal";
    } else if (qntdVitorio >= 91){
        nivel = "Lendario";
    } else if (qntdVitorio >= 81){
        nivel = "Diamente";
    } else if (qntdVitorio >= 51){
        nivel = "Ouro";
    } else if (qntdVitorio >= 21){
        nivel = "Prata";
    } else if (qntdVitorio >= 11){
        nivel = "Bronze";
    } else {
        nivel = "Ferro";
    }

    console.log("O Heroi tem o sando de " + qntdVitorio + " e esta no nivel de " + nivel);
}


