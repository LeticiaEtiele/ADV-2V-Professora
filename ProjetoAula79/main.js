
arrayAlunos = [];
	
function enviar()
{
    
    var name1 = document.getElementById("nomeAluno1").value;
    var name2 = document.getElementById("nomeAluno2").value;
    var name3 = document.getElementById("nomeAluno3").value;
    var name4 = document.getElementById("nomeAluno4").value;

    arrayAlunos.push(name1);
    arrayAlunos.push(name2);
    arrayAlunos.push(name3);
    arrayAlunos.push(name4);

    console.log(arrayAlunos);
    
    document.getElementById("displayName").innerHTML = arrayAlunos;
    document.getElementById("btnEnviar").style.display = "none"; /*Esconder o btnEnviar */
    document.getElementById("btnOrganizar").style.display = "inline-block"; /*Exibir o btnOrganizar */

}

function organizar()
{
	arrayAlunos.sort(); //Organizar nomes em ordem alfabetica
    console.log(arrayAlunos);
	document.getElementById("displayName").innerHTML = arrayAlunos;
}
