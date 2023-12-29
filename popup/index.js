window.onload = function() {

    let inputArea = document.querySelector("#inputArea");

    // let inputLength = document.querySelector("#inputLength");

    var generatePassword = (
        length = 20,
        characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
    ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => characters[x % characters.length])
            .join('')

    document.getElementById('generate').addEventListener('click', function() {
        let password = generatePassword();
        inputArea.value = password;
        console.log(password);
    });

    document.getElementById('copy').addEventListener('click', function() {
        navigator.clipboard.writeText(inputArea.value).then(function() {
            console.log('Copying to clipboard was successful!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    });

}