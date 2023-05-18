var selectedCount = 0;
var selectedNumbers = [];

var grid = document.getElementById('grid');

for (var i = 1; i <= 49; i++) {
    var button = document.createElement('button');
    button.className = 'button';
    button.textContent = i;
    button.addEventListener('click', toggleSelection);
    grid.appendChild(button);
}

function toggleSelection() {
    if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        selectedCount--;
        var index = selectedNumbers.indexOf(parseInt(this.textContent));
        if (index > -1) {
            selectedNumbers.splice(index, 1);
        }
    } else {
        if (selectedCount >= 5) {
        return;
        }
        this.classList.add('selected');
        selectedCount++;
        selectedNumbers.push(parseInt(this.textContent));
    }

var drawButton = document.getElementById('drawButton');
    if (selectedCount >= 5) {
        drawButton.disabled = false;
    } else {
        drawButton.disabled = true;
    }
}

function drawNumbers() {
    var drawnNumbers = [];
    var drawCount = 5;
    var maxNumber = 49;

    while (drawnNumbers.length < drawCount) {
        var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (!drawnNumbers.includes(randomNumber)) {
            drawnNumbers.push(randomNumber);
        }
    }

    var matchedNumbers = [];
    for (var i = 0; i < selectedNumbers.length; i++) {
        if (drawnNumbers.includes(selectedNumbers[i])) {
            matchedNumbers.push(selectedNumbers[i]);
        }
    }

    var resultMessage;
    if (matchedNumbers.length === 0) {
        resultMessage = " | Vous n'avez aucun numéro.. (Perdu)";
    } else if (matchedNumbers.length === 1) {
        resultMessage = " | 1 numéro correspondant : " + matchedNumbers.join(", ");
    } else {
        resultMessage = matchedNumbers.length("|") + " numéros correspondants : " + matchedNumbers.join(", ");
    }
    
    var resultContainer = document.getElementById("result");
    resultContainer.textContent = "Numéros tirés : " + drawnNumbers.join(", ") + "\n\n" + resultMessage;
}
