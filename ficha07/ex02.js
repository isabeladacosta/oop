window.onload = function() {

       let frm = document.getElementById('meufrm')

       frm.addEventListener("submit", function () {   
           
       let pass1 = document.getElementById('pass1').value
       let pass2 = document.getElementById('pass2').value

       if (pass1 != pass2)
       {
        alert('Senha Invalida')
       } else {
        alert('REGISTO EFETUADO COM SUCESSO')
       }
    
    })

   }
