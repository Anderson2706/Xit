// Seleciona os elementos HTML necessários
const sensitivitySlider = document.getElementById("sensitivitySlider");
const sensitivityValue = document.getElementById("sensitivityValue");
const applyButton = document.getElementById("applyButton");

// Atualiza o valor da sensibilidade ao mover o slider
sensitivitySlider.oninput = function() {
    sensitivityValue.textContent = this.value;
}

// Função para "aplicar" a sensibilidade ao clicar no botão
applyButton.onclick = function() {
    alert("Sensibilidade ajustada para " + sensitivitySlider.value);
    // Adicione aqui lógica adicional, se necessário, para usar o valor de sensibilidade no app
}
