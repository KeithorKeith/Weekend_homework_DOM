document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

    const rollDiceButton = document.querySelector('#roll-dice');
    rollDiceButton.addEventListener('click', handleRollDice);
})




const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const partyListItem = createPartyListItem(event.target);
    const partyList = document .querySelector('#party-list');
    partyList.appendChild(partyListItem);

    event.target.reset();
}

const createPartyListItem = function (form) {
    const partyListItem = document.createElement('li');
    partyListItem.classList.add('party-list-item');

    const name = document.createElement('h1');
    name.textContent = form.name.value;
    partyListItem.appendChild(name);

    const rollDice = document.createElement('h4');
    const statusHidden = document.getElementById("status-hidden")
    rollDice.textContent =  statusHidden.value;
    partyListItem.appendChild(rollDice);

    const race = document.createElement('h2');
    race.textContent = form.race.value;
    partyListItem.appendChild(race);

    const classification = document.createElement('h2')
    classification.textContent = form.classification.value;
    partyListItem.appendChild(classification);

    return partyListItem;
}

const handleRollDice = function (event) {
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const status = document.getElementById("status")
    const statusHidden = document.getElementById("status-hidden")
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = `Your stats total ${diceTotal}`
    statusHidden.value = diceTotal
    // if (d1 === d2) {
    //     status.innerHTML += " Doubles, you have earned extra exp!";
    // }
}

const handleDeleteAllClick = function (event) {
    const partyList = document.querySelector('#party-list')
    partyList.innerHTML = '';
}

