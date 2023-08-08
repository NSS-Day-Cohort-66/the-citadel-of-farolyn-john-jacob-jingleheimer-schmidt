import { getBooks, getSchools, getArchetypes } from "./database.js";

const archetypes = getArchetypes();

document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {
    let allBooks = getBooks();
    let studyBook = {};
    for (const book of allBooks) {
      if (parseInt(typeClicked.dataset.bookid) === book.id) {
        studyBook = book;
      }
    }

    let allSchools = getSchools();
    let typeSchool = {};
    for (const school of allSchools) {
      if (school.id === parseInt(typeClicked.dataset.schoolid)) {
        typeSchool = school;
      }
    }

    // TODO: Greeting
    const detailsContainer = document.querySelector("#details_container");
    detailsContainer.innerHTML = `
    <div>
      <h3>Greeting:</h3>
        <p>${typeClicked.dataset.greeting}</p>
      <h3>School:</h3>
        <p>${typeSchool.name}</p>
      <h3>Study Book:</h3>
        <p>${studyBook.name}</p>
    </div>`;
  }
});

export const TypeList = () => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;
  headerHtml += `<ul>`;
  for (const type of archetypes) {
    headerHtml += `<li class="option" data-type="type" data-id="${type.id}" data-bookId=${type.bookId} data-greeting="${type.greeting}" data-schoolId=${type.schoolId}>${type.name}</li>`;
  }
  headerHtml += `</ul>`;
  headerHtml += `</div>`;

  return headerHtml;
};
