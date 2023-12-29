window.onload = function() {
    document.querySelector("#generate").onclick = function(){
        console.log("Вы нажали на кнопку generate");
    }
    document.querySelector("#copy").onclick = function(){
        console.log("Вы нажали на кнопку Copy");
    }

    var generatePassword = (
        length = 20,
        characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
    ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => characters[x % characters.length])
            .join('')

    console.log(generatePassword())
}