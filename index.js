let passLength = document.getElementById("passLength");
let pass = document.getElementById("password");
let savePass = document.getElementById("savePassword");

function generatePassword(lenPass){
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "~'!@#$%^&*()_+{}|:<>?`-=[];,.'/";

    const data = lower + upper + numeric + symbol;
    let generator = "";

    for (let index = 0; index < lenPass; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

function getPassword(){
    const payload = generatePassword(passLength.value);
    pass.value =  payload;
}

function savePassword(){
    savePass.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(`
    password saya:\n ${pass.value}`));
    savePass.setAttribute('download','your-password.txt');
}