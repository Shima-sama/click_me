_button = document.getElementById("_button")
box = document.getElementById("box")

_button.addEventListenser("click",function(){
    _h3 = document.createElement("h3")
    _h3.textContent = "ฮวย"
    box.append(_h3)
})
