import { getArchetypes } from "./database.js";

const allArchetypes = getArchetypes();

document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {

  
    //What does type equal?
    const detailsHtml = `
    <div>
      <h4>Greeting:</h4>
      <p></p>
      <h4>School:</h4>
      <p></p>
      <h4>Study Book:</h4>
      <p></p>
    </div>`;
  
  
    const parentTag = document.querySelector("#message");
        parentTag.innerHTML = detailsHtml;
}
}
);

export const TypeList = () => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;
  let archetypeHTML = "<ul>";
  for (const archetype of allArchetypes) {
    archetypeHTML += `<li data-type="type" 
     >${archetype.name}</li>`;
  }
  archetypeHTML += "</ul>";
  headerHtml += archetypeHTML;
  headerHtml += `</div>`;
  return headerHtml;
};

