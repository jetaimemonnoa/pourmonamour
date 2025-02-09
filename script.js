const messages = [
    "Vraiment ?",
    "Nan t'es sérieux ??",
    "T'abuses...",
    "Noa stp...",
    "Jepeuplou",
    "Si tu dis non, je vais être vraiment triste...",
    "Vraiment triste...",
    "Vraiment VRAIMENT triste...",
    "Ok, j'arrête de demander.",
    "Mais juste dis oui putain >:("
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
