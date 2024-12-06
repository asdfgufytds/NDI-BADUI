function autoScroll() {
    const container = document.getElementById('cookies');
    const content = document.getElementById('cookiecontent');
    let scrollPosition = 0;

    const interval = setInterval(() => {
        scrollPosition += 1;
        container.scrollTop = scrollPosition;

        if (scrollPosition >= content.scrollHeight - container.clientHeight) {
            clearInterval(interval);
            onScrollComplete();
        }
    }, 30);
}

function onScrollComplete() {
    const button = document.getElementById('enableMe');
    button.disabled = false;
}

function onButtonClick() {
    const greyOut = document.getElementById('greyOut');
    const col = document.getElementById('col');

    greyOut.style.display = 'none';
    col.style.display = 'none';

    revealCentered();
}

function revealCentered() {
    const centered = document.getElementById('centered');
    centered.style.visibility = 'visible';
    centered.style.zIndex = '3';
    centered.style.display = 'flex';
}

function handleInputKeydown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const input = event.target;
        const originalValue = input.value;

        const instructionText = document.getElementById('instructionText');
        const errorMessage = document.getElementById('errorMessage');

        input.value = '*'.repeat(originalValue.length);
        instructionText.textContent = '*'.repeat(instructionText.textContent.length);

        input.classList.add('shake');
        errorMessage.textContent = 'Erroné';

        setTimeout(() => {
            input.classList.remove('shake');
        }, 200);
    }
}

function handleInputChange() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
}

window.onload = function () {
    const input = document.getElementById('trollInput');
    input.addEventListener('keydown', handleInputKeydown);
    input.addEventListener('input', handleInputChange);

    autoScroll();
};
