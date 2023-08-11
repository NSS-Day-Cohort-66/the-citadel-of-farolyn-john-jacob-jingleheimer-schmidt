import { getSchools } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;

  if (schoolClicked.dataset.type === "school") {
    const detailsHtml = `
      <div>
        <h4>Description:</h4>
        <h4>Disclaimer:</h4>
        <h4>Currently accepting the following Magician Types:</h4>
      </div>
    `;
  }
});

// Automate HTML listing schools


export const SchoolList = () => {
  const schools = getSchools()
  
  let headerHtml = `<div id="schools_container" class="content_block">
                      <h3>Magic Schools:</h3>`;
  
  
  for (const school of schools) {
                  headerHtml += `<ul>
                  <li data-type="school">${school.name}</li>
                  </ul>`
  
                }
    headerHtml += `</div>`;
                
  return headerHtml;
};
