function mostraInput() {
    let geometrica = document.querySelector('#idGeometrica').value;
    let inputFields = document.querySelector('#inputFields');

    if (geometrica == 'circulo') {
        inputFields.innerHTML = `<input type="number" name="nmRaio" id="idRaio" placeholder="Raio">`;
    } else if (geometrica == 'retangulo') {
        inputFields.innerHTML = `<input type="number" name="nmBase" id="idBase" placeholder="Base">
      <input type="number" name="nmAltura" id="idAltura" placeholder="Altura">`;
    } else if (geometrica == 'triangulo retangulo') {
        inputFields.innerHTML = `<input type="number" name="nmBase" id="idBase" placeholder="Base">
      <input type="number" name="nmAltura" id="idAltura" placeholder="Altura">`;
    } else if (geometrica == 'triangulo equilatero') {
        inputFields.innerHTML = `<input type="number" name="nmLado" id="idLado" placeholder="Lado">`;
    }
}

function calcular() {
    let geometrica = document.querySelector('#idGeometrica').value;
    let output = document.querySelector('#output');

    if (geometrica == 'circulo') {
        let raio = parseFloat(document.querySelector('#idRaio').value);
        let area = Math.PI * raio ** 2;

        output.innerHTML = `Área: ${area.toFixed(2)}`;
    }

    else if (geometrica == 'retangulo') {
        let base = parseFloat(document.querySelector('#idBase').value);
        let altura = parseFloat(document.querySelector('#idAltura').value);
        let area = base * altura;

        output.innerHTML = `Área: ${area.toFixed(2)}`;
    }

    else if (geometrica == 'triangulo retangulo'){
        let base = parseFloat(document.querySelector('#idBase').value);
        let altura = parseFloat(document.querySelector('#idAltura').value);
        let area = (base * altura) / 2;

        output.innerHTML = `Área: ${area.toFixed(2)}`;
    }

    else if (geometrica == 'triangulo equilatero') {
        let lado = parseFloat(document.querySelector('#idLado').value);
        let area = (lado ** 2 * Math.sqrt(3)) / 4;

        output.innerHTML = `Área: ${area.toFixed(2)}`;
    }
}