document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

        // Atribuição da animação ao "Inscreva-se"

        const inscrevaseHTML = document.querySelector('.title-inscrevase');
        const inscrevaseTexto = inscrevaseHTML.textContent;
        const inscrevaseSplit = inscrevaseTexto.split("");
        
        inscrevaseHTML.textContent = "";
        for (let i = 0; i < inscrevaseSplit.length; i++)
        {
            inscrevaseHTML.innerHTML += "<span>" + inscrevaseSplit[i] + "</span>";
        }

        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick(){
            const span = inscrevaseHTML.querySelectorAll('span')[char];
            span.classList.add('fade');
            char++;
            if(char == 11){
                complete();
                return;
            }
        }

        function complete(){
            clearInterval(timer);
            timer = null;
        }   

        // Atribuição da animação do formulário

        setTimeout(() => { document.getElementById("nome").classList.add('fade'); }, 150);
        setTimeout(() => { document.getElementById("nome-label").classList.add('fade'); }, 200);
        
        setTimeout(() => { document.getElementById("email").classList.add('fade'); }, 250);
        setTimeout(() => { document.getElementById("email-label").classList.add('fade'); }, 300);
        
        setTimeout(() => { document.getElementById("tel-label").classList.add('fade'); }, 350);
        setTimeout(() => { document.getElementById("tel").classList.add('fade'); }, 400);
        setTimeout(() => { document.getElementById("telefone-container").classList.add('fade'); }, 400);
        setTimeout(() => { document.querySelector('.masked').classList.add('fade'); }, 400);
        setTimeout(() => { document.querySelector('.shell').classList.add('fade'); }, 400);
        
        setTimeout(() => { document.getElementById("form-div-cidade-estado").classList.add('fade'); }, 450);
        
        setTimeout(() => { document.getElementById("cidade").classList.add('fade'); }, 500);
        setTimeout(() => { document.getElementById("cidade-label").classList.add('fade'); }, 550);
        
        setTimeout(() => { document.getElementById("uf").classList.add('fade'); }, 600);
        setTimeout(() => { document.getElementById("uf-label").classList.add('fade'); }, 650);
        
        setTimeout(() => { document.getElementById("form-div-checkbox-termos").classList.add('fade'); }, 700);
          
        setTimeout(() => { document.getElementById("form-input-submit").classList.add('fade'); }, 750);

    }
}

// Checkbox customizada

const checkboxTermos = document.getElementById("checkboxTermos");

function toggleCheck(){
    if(checkboxTermos.checked == true) {
        document.getElementById("custom-checkbox").style.backgroundColor = '#c7c7c7';
        document.getElementById("custom-checkbox").style.backgroundImage = 'url(./img/check.png)';
        document.getElementById("custom-checkbox").style.backgroundSize = '15px';
        document.getElementById("custom-checkbox").style.backgroundRepeat = 'no-repeat';
        document.getElementById("custom-checkbox").style.backgroundPosition = 'center';
        document.getElementById("custom-checkbox").style.transition = '0.4s';
    }
    else {
        document.getElementById("custom-checkbox").style.backgroundImage = 'none';
        document.getElementById("custom-checkbox").style.transition = '0.4s';
        document.getElementById("custom-checkbox").style.backgroundColor = '#e3e3e3';
    }
}

// Validação do submit

function validSubmit() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const cidade = document.getElementById("cidade").value;

    if(nome == ""){
        document.getElementById("nome").style.border = "solid 1px red";
        document.getElementById("nome").placeholder = "Insira seu nome";
    }

    if(email == ""){
        document.getElementById("email").style.border = "solid 1px red";
        document.getElementById("email").placeholder = "Insira seu e-mail";
    }

    if(tel == "" || tel.length < 10){
        document.getElementById("telefone-container").style.border = "solid 1px red";
        document.getElementById("tel").placeholder = "Insira seu telefone";
    }

    if(cidade == ""){
        document.getElementById("cidade").style.border = "solid 1px red";
        document.getElementById("cidade").placeholder = "Insira a cidade";
    }

    if(document.getElementById("checkboxTermos").checked == false) {
        document.getElementById("custom-checkbox").style.border = "solid 1px red";
        document.getElementById("custom-checkbox").style.borderRadius = "5px";
    }
}

function inputReset(formId) {
    formId.style.border = "none";
}

function inputTelReset() {
    document.getElementById("telefone-container").style.border = "none";
}

function inputCheckReset()
{
    document.getElementById("custom-checkbox").style.border = "none";
}
