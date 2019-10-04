document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const newDiv = document.createElement('div');
    const collectionList = document.querySelector('#game-collection');

    const titleHeading = document.createElement('h3');
    newDiv.appendChild(titleHeading);
    titleHeading.textContent = event.target.title.value;

    const genreHeading = document.createElement('h4');
    newDiv.appendChild(genreHeading);
    genreHeading.textContent = event.target.genre.value;

    const ratingParagraph = document.createElement('p');
    newDiv.appendChild(ratingParagraph);
    ratingParagraph.textContent = event.target.rating.value;

    collectionList.appendChild(newDiv);


  };

  const form = document.querySelector('#add-new-game-form');
  form.addEventListener('submit', handleFormSubmit);


});
