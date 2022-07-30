var lista = ["Gabrielle","Valentina","Alice","Dayane", 25];

if(lista.indexOf("Gabrielle") > -1){
    alert("Esse item esta na lista!!");
}else{
    alert("Opa nao encontrado");
}

//while = Enquanto.
let y = 0;

while(y < 10){

    document.write("<br><br> O valor do X é:" + y);

    y++;
}

document.write("<hr/>");
// For = para

for (let a = 0; a<10; a++ ){
    document.write("<br><br> O valor do A é: " + a);
}

document.write("<br> Escolha seu pedido: <br>");
document.write("<br> 0 - Sorvete / 1 - Suco <br>");
document.write("<br> 2 - Coca-Cola / 3 - Agua gelada <br>");

// Switch 

function pedir(){

let x = prompt("O que deseja pedir?");

switch(x){
    case "0":
        alert("Você pediu um sorvete");
        break;
    case "1": 
        alert("Você pediu um suco");
        break;
    case "2":
        alert("Você pediu uma Coca-Cola");
        break;
    case "3":
        alert("Você pediu uma Agua gelada");
        break;
    default:
        alert("Ops não temos essa opção!");
        break;
    }

}
