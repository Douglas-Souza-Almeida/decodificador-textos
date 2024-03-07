/*declarando as variaveis globais, utilizando o metodo 'querySelector'*/
let textInput = document.querySelector(".principal_texto-input_textareainput");
let textOutput = document.querySelector(".principal__texto-output__textareaoutput");
let buttonCopy = document.querySelector(".principal__texto-output__botoes_copiar");

/*funcao para encriptar - percorre toda o texto, verificando cada letra através do método 'includes' e troca as letras com o método 'replaceAll'*/ 
function encryptText(txtEncrypt) {
    let chaves = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    txtEncrypt = txtEncrypt.toLowerCase();

    for(let i=0; i < chaves.length; i++){
        if(txtEncrypt.includes(chaves[i][0])) {
            txtEncrypt = txtEncrypt.replaceAll(chaves[i][0], chaves[i][1]);
        }
    }
    return txtEncrypt;
}

/*funcao para verificar se o texto digitado contém caracteres especiais, utilizando o método 'test'*/
function verificarAcentosEspeciais(texto) {
    const caracteresEspeciais = /[áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ!@#$%^&*()+=[\]{};':"\\|,.<>?~`]/;

    if (caracteresEspeciais.test(texto)) {
        return true;
    } else {
        return false;
    }
}

/*funcao atribuida ao botao para criptografar*/
function btnCriptografar() {
    if(verificarAcentosEspeciais(textInput.value)==true) {
        alert("O texto contém acentos ou caracteres especiais!");
        textInput.value = "";
    } else {
    let txt = encryptText(textInput.value);
    textOutput.value = txt;
    textInput.value = "";
    }
}

/*funcao para descriptar - percorre toda o texto, verificando cada letra através do método 'includes' e troca as letras com o método 'replaceAll'*/ 
function decryptText(txtDecrypt) {
    let chaves = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    txtDecrypt = txtDecrypt.toLowerCase();

    for(let i=0; i < chaves.length; i++) {
        if(txtDecrypt.includes(chaves[i][0])) {
            txtDecrypt = txtDecrypt.replaceAll(chaves[i][1], chaves[i][0]);
        }
    }
    return txtDecrypt;
}

/*funcao atribuida para o botao descriptografar*/
function btnDescriptografar() {
    let txt = decryptText(textInput.value);
    textOutput.value = txt;
    textInput.value = "";
}

/*funcao do botao copiar: utilizando clipboard e writeText, copia o conteudo da presente na 'textarea' referente ao texto criptografado para a area de transferencia*/
function btnCopiar() {
    navigator.clipboard.writeText(textOutput.value).then(() => {
        console.log(`copied text: ${textOutput.value}`);
        alert('Texto copiado');
    })
    .catch((error) => {
        console.log(`failed to copy`);
    });
}

/*funcao do botao colar: utilizando clipboard e readText, cola o conteudo da area de transferencia na textarea do html correspondente ao local onde consta o texto a ser criptografado*/
function btnColar() {
    navigator.clipboard.readText()
    .then((text) => {
        document.getElementById('input_textarea').value = text;
        console.log(`pasted text: ${text}`);
    })
    .catch((error) => {
        console.error('failed to paste text:', error);
    });
}

function btnLimpar() {
    textInput.value = "";
    textOutput.value = "";
}