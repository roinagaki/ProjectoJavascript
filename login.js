(function(){
    $(document).ready(function(){
        $('.alt-form').click(function(){
            $('.form-contenido').animate({
                height: "toggle",
                opacity: 'toggle'
            }, 600); 

        });
    })
}())

const email = document.getElementById("correo")
const pass = document.getElementById("pass")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(pass.value.lenght <6){
        warnings += `La password no es valida`
    }
    console.log(regexEmail.text(email.value))
    if(regexEmail.text(email.value)){

    }
})