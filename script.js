function calcular(){
  var testResults = get_lista()


  var textTable = document.getElementById("text_table");
  var nHTML = '';
  for (var i = 0; i < testResults.length; i++) {
   for(var j=0; j<testResults[i].length; j++){
      nHTML+= testResults[i][j]+ ' ';
   }
   nHTML = '<div>' + nHTML + '</div>';
  }
  textTable.innerHTML = nHTML;
}


function get_lista(){
  var lista = [];
  contador = 0
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let cota = Number(document.getElementById("cota").value) + 0.1;

  var c = 100/a * b;

  for (var i = 1/10; i <= cota; i= i + 1/10 ) {
    d = i/100*c
    lista[contador] = [i.toFixed(1), d.toFixed(3)]
    contador++;
    }
  console.log(lista)
  return lista;
}