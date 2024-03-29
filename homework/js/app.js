document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const newDiv = document.createElement('div');
    const collectionList = document.querySelector('#game-collection');
    newDiv.classList.add('game-item');

    const titleHeading = document.createElement('h3');
    newDiv.appendChild(titleHeading);
    titleHeading.textContent = event.target.title.value;

    const genreHeading = document.createElement('h4');
    newDiv.appendChild(genreHeading);
    genreHeading.textContent = event.target.genre.value;

    const typeHeading = document.createElement('h5');
    newDiv.appendChild(typeHeading);
    typeHeading.textContent = event.target.type.value;

    const ratingParagraph = document.createElement('p');
    newDiv.appendChild(ratingParagraph);
    ratingParagraph.textContent = event.target.rating.value;

    collectionList.appendChild(newDiv);

    const deleteAllButton = document.querySelector('#delete-all-button');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);


  };

  const form = document.querySelector('#add-new-game-form');
  form.addEventListener('submit', handleFormSubmit);


});

const handleDeleteAllClick = function (event) {
  const gameCollection = document.querySelector('#game-collection');
  gameCollection.innerHTML = '';
};
