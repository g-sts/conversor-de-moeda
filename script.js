let form = document.getElementById("converterForm")

function convertMoney(){
    console.log("Funcionou")

}


form.addEventListener("submit", function(event){
    event.preventDefault()
    convertMoney()
})