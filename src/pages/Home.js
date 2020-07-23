import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Home = async () => {
  const id = getHash();
  const characters = await getData();
  const pages = await getData(id);
  let pagesPagination = [];
  for (let i = 1; i <= characters.info.pages; i++) {
    pagesPagination.push(i);
  }
  const view = `
  <div class="Characters">
    ${pages.results
      .map(
        (character) => `<article class="Character-item">
          <a href="#/${character.id}">
            <img src="${character.image}" alt="${character.name}" />
            <div class="character-itemDetails">
              <h2>${character.name}</h2>
              <div class="character-speciesCover">
                <h3>${character.species}</h3>
              </div>
            </div>
          </a>
  </article>
  `
      )
      .join("")}
  </div>
  <div class="Pagination-footer">
    <h2>Pages</h2>
    <div class="Pagination">
    ${pagesPagination
      .map(
        (number) => `
          <a href="#/?page=${number}">
            <span>Page ${number}</span>
          </a>`
      )
      .join("")}
    </div>
  </div>
  `;
  return view;
};

export default Home;
