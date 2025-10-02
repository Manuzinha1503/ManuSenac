function receberNumeros(){
    var nome = document.getElementById('nome').value
    var estado = document.getElementById('estado').value;
    var cidade = document.getElementById('cidade').value;
    var compra = parseInt (document.getElementById('compra').value);
    var fisico = document.getElementById('compra');
    var juridico = document.getElementById('compra');
    var resultado = "";
    if(fisico.checked){
                resultado = fisico.value;
            }else if (juridico.checked){
                resultado = juridico.value
            }
    
    alert(nome + estado + cidade + compra + resultado)
}