window.onload = function() {

    let meufrm = document.getElementById("meufrm")

    meufrm.addEventListener("submit", function () {        
    
        let email = document.getElementById("eml").value
        let pass = document.getElementById("pass").value

        alert(pass + '#' + email)

    })

    meufrm.addEventListener("reset", function () {        
        
        let email = document.getElementById("eml").value

        document.getElementById('eml').focus()

    })

}
