/*function teste( texto ) {
    var nome = "Matheus;"
    alert(texto);

    var idade = prompt("Digite sua idade");
    
    document.write("Aprendendo JavaScript"); 
    
    document.write("</br>");
    
    document.write("<img src='http://google.com/google.jpg' /> ");
} */

function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome');
    
    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!!');
        area.innerHTML = 'Bem vindo...';
    }else{
         area.innerHTML = 'Bem vindo ' + texto;
     }

}

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome');
    area.innerHTML = nome + ' ' + texto;


}