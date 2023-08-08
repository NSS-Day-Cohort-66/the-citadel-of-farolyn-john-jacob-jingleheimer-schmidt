import { getSchools, getArchetypes } from "./database.js";

const schools = getSchools();

document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;
  const schoolId = parseInt(schoolClicked.dataset.id);
  const allArchetypes = getArchetypes();

  if (schoolClicked.dataset.type === "school") {
    const archetypesToShow = [];
    for (const type of allArchetypes) {
      if (type.schoolId === schoolId) {
        archetypesToShow.push(type);
      }
    }

    let archetypesList = "<ul>";
    for (const type of archetypesToShow) {
      archetypesList += `<li>${type.name}</li>`;
    }
    archetypesList += "</ul>";

    const detailsContainer = document.querySelector("#details_container");
    detailsContainer.innerHTML = `
    <div>
      <h3>Description:</h3>
      <p>${schoolClicked.dataset.description}</p>
      <h3>Disclaimer:</h3>
      <p>${schoolClicked.dataset.disclaimer}</p>
      <h3>Currently accepting the following Magician Types:</h3>
      <p>${archetypesList}</p>
    </div>`;
  }
});

export const SchoolList = () => {
  let headerHtml = `<div id="schools_container" class="content_block">`;
  headerHtml += `<h3>Magic Schools:</h3>`;
  headerHtml += `<ul>`;
  for (const school of schools) {
    headerHtml += `<li class="option" data-type="school" data-description="${school.description}" data-id="${school.id}" data-disclaimer="${school.disclaimer}">${school.name}</li>`;
  }
  headerHtml += `</ul>`;
  headerHtml += `</div>`;

  return headerHtml;
};
