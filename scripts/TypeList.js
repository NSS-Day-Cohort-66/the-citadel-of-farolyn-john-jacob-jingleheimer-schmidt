import { getArchetypes } from "./database.js";

const allArchetypes = getArchetypes();
document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;
for (const archetype of allArchetypes) {
  
  if (typeClicked.dataset.type === "type") {
    //What does type equal?
    const detailsHtml = `
    <div>
      <h4>Greeting:</h4>
      <p>${archetype.greeting}</p>
      <h4>School:</h4>
      <p>${archetype.schoolId}</p>
      <h4>Study Book:</h4>
      <p>${archetype.bookId}</p>
    </div>`;
  
  
}
const parentTag = document.querySelector("#message");
    parentTag.innerHTML = detailsHtml;
}
});

export const TypeList = () => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;
  let archetypeHTML = "<ul>";
  for (const archetype of allArchetypes) {
    archetypeHTML += `<li data-type="type" data-greeting="${archetype.greeting}" data-school="${archetype.schoolId}" data-study_book="${archetype.bookId}">${archetype.name}</li>`;
  }
  archetypeHTML += "</ul>";
  headerHtml += archetypeHTML;
  headerHtml += `</div>`;
  return headerHtml;
};

