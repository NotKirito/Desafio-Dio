let nomeHerio = "Romario"
let xpAtual = 7007

let XP = [1000, 2000, 5000,    7000, 8000, 9000 , 10.000]


if (xpAtual < XP[0]){
    console.log(`O Herói de nome ${nomeHerio} está no nível de Ferro`)
} 
else if (xpAtual <= XP[1]){
    console.log(`O Herói de nome ${nomeHerio} está no nível de Bronze`)
}
else if (xpAtual <= XP[2]){
    console.log(`O Herói de nome ${nomeHerio} está no nível de Prata`)
}
else if (xpAtual <= XP[3]){
    console.log(`O Herói de nome ${nomeHerio} está no nível de Ouro`)
}
else if (xpAtual <= XP[4]){
    console.log(`O Herói de nome ${nomeHerio} está no nível de Platina`)
}
else if (xpAtual <= XP[5]){
    console.log(`O Herói de nome ${nomeHerio} está no nível de Ascendente`)
}
else if (xpAtual <= XP[6]){
    console.log(`O Herói de nome ${nomeHerio} está no nível de Imortal`)
}
else if (xpAtual > XP[6]){
    console.log(`O Herói de nome ${nomeHerio} está no nível de Radiante`)
}


/*
for (let i=0; i < XP.length; i++ ){
    switch(XP){
        case 1000 :

        break;
    }
}

switch (XP) {
    case 1000:
       console.log(`O Herói de nome ${nomeHerio} está no nível de ferro`)   
    break;
    case 1001:

    break;
    case 2000:

    break;
    case 2001:

    break;
    case 5000:

    break;
    case 6001:

    break;
    case 7000:

    break;
    case 7001:

    break;
    case 8001:

    break;
    case 9000:

    break;
    case 9001:

    break;
    case 10.000:

    break;
    case 10.001:

    break;

}

*/