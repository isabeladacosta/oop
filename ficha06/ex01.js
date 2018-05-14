window.onload = function() { 

  let par = document.getElementById("p1")
  let txtA = document.getElementById("txtArea")
  let btn = document.getElementById("btn")

  par.innerHTML = "Bem vindo a minha pagina!"

  btn.addEventListener("click", function () {   

    if(txtA.value != null){
        document.getElementById("p1").innerHTML = "Bem vindo a minha pagina, " + txtA.value + "!"
    } else {
        par.innerHTML = "Bem vindo a minha pagina!"
    }

      })

 }
