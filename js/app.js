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
    
}