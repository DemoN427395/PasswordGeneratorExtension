window.onload = function() {

    let inputArea = document.querySelector("#inputArea");
    let slider = document.getElementById("myRange");
    let output = document.getElementById("output");

    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    var generatePassword = (
        length = output.innerHTML,
        characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
    ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => characters[x % characters.length])
            .join('')

            console.log(generatePassword());
            
    document.getElementById('generate').addEventListener('click', function() {
        let password = generatePassword();
        inputArea.value = password;
    });

    document.getElementById('copy').addEventListener('click', function() {
        navigator.clipboard.writeText(inputArea.value).then(function() {
            console.log('Copying to clipboard was successful!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    });
}