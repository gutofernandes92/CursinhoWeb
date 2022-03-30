const tx_nome = document.getElementById("tx-nome");
const tx_email = document.getElementById("tx-email");
const bt_enviar = document.getElementById("tx-enviar");
const p_erros = document.getElementById("msg-erros");
 

function validar_nome() {
    if (tx_nome.value.trim() == "") {
        p_erros.innerText = "O nome não pode ser vazio";
        return false;
    }
    return false;
}

function validar_email()   {
    if (tx_email.value.trim() == "") {
        p_erros.innerText = "O email não pode ser vazio"
        return false;
    }
    return false;
}

bt_enviar.addEventListener("click", function(event){
    if (!validar_nome() || !validar_email())  {
        alert("Preencha os campos obrigatórios!");
        event.preventDefault();
    }
  
});