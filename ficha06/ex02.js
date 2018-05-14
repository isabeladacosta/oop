window.onload = function() { 

 let btn1 = document.getElementById("btn1")
 let btn2 = document.getElementById("btn2")
 let btn3 = document.getElementById("btn3")
 let btn4 = document.getElementById("btn4")
 let btn5 = document.getElementById("btn5")
 let btn6 = document.getElementById("btn6")

 let todas = document.getElementById("todas")
 let c1 = document.getElementById("c1")
 let c2 = document.getElementById("c2")

 todas.addEventListener("click", function () { 

    btn1.style.visibility= "visible"
    btn2.style.visibility= "visible"
    btn3.style.visibility= "visible"
    btn4.style.visibility= "visible"
    btn5.style.visibility= "visible"
    btn6.style.visibility= "visible"

   btn1.style.backgroundColor = "green"
   btn2.style.backgroundColor = "green"
   btn3.style.backgroundColor = "green"
   btn4.style.backgroundColor = "green"
   btn5.style.backgroundColor = "green"
   btn6.style.backgroundColor = "green"

  })

c1.addEventListener("click", function () { 
  
    btn1.style.visibility= "visible"
    btn2.style.visibility= "visible"
    btn3.style.visibility= "visible"

    btn1.style.backgroundColor = "green"
    btn2.style.backgroundColor = "green"
    btn3.style.backgroundColor = "green"
    btn4.style.visibility= "hidden"
    btn5.style.visibility= "hidden"
    btn6.style.visibility= "hidden"

  })

  c2.addEventListener("click", function () { 
  
    btn4.style.visibility= "visible"
    btn5.style.visibility= "visible"
    btn6.style.visibility= "visible"
    

    btn4.style.backgroundColor = "green"
    btn5.style.backgroundColor = "green"
    btn6.style.backgroundColor = "green"
    btn1.style.visibility= "hidden"
    btn2.style.visibility= "hidden"
    btn3.style.visibility= "hidden"

  })

}
