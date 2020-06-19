document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);
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

    const race = document.createElement('h2');
    race.textContent = form.race.value;
    partyListItem.appendChild(race);

    const classification = document.createElement('h2')
    classification.textContent = form.classification.value;
    partyListItem.appendChild(classification);


    return partyListItem;
}