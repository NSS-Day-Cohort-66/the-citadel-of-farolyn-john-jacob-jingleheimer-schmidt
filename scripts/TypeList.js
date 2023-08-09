document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {
    const detailsHtml = `
    <div>
      <h4>Greeting:</h4>
      <p>${greeting}</p>
      <h4>School:</h4>
      <p>${school}</p>
      <h4>Study Book:</h4>
      <p>${study_book}</p>
    </div>`;
    return detailsHtml
  }
});

export const TypeList = () => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;

  headerHtml += `</div>`;
  return headerHtml;
};

