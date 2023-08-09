import { getArchetypes } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {
    //What does type equal?
    const detailsHtml = `
    <div>
      <h4>Greeting:</h4>
      <h4>School:</h4>
      <h4>Study Book:</h4>
    </div>`;
  }
});

export const TypeList = () => {
  const allArchetypes = getArchetypes();
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;
  let archetypeHTML = "<ul>";
  for (const archetype of allArchetypes) {
    archetypeHTML += `<li>${archetype.name}</li>`;
  }
  archetypeHTML += "</ul>";
  headerHtml += archetypeHTML;
  headerHtml += `</div>`;
  return headerHtml;
};
