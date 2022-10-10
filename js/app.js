let wrapper = document.querySelector(".bottom");
let dynamicSelect = document.querySelector("#select1");

let pokemon = pokemons.splice(0, 100);

const newData = pokemon.map(item => {
  return {
    img: item.img,
    name: item.name,
    type: item.type,
    weight: item.weight,
    age: item.candy_count,
  };
});

// console.log(newData);

dynamicSelect.addEventListener("change", e => {
  renderData(e.target.value.toLowerCase());
});

renderData();

function renderData(query) {
  const filterType = newData.filter(e => {
    return e.value === query;
  });

  //   console.log(filterType);

  newData.forEach(e => {
    const card = document.createElement("div");
    card.setAttribute("class", "card box shadow");
    card.innerHTML = `
              <img src="${e.img}" alt="${e.name}" width="157" height="157">
              <span class="chiziq"></span>
              <h3 class="card__title">${e.name}</h3>
              <p class="card__text">${e.type}</p>
              <div class="card__wrapper">
                  <span class="card__span">${e.weight}</span>
                  <span class="card__span">${
                    e.age !== undefined ? e.age + " age" : "DAMDA"
                  }</span>
              </div>
          `;

    $(".bottom").appendChild(card);
  });
}

const types = [];

function type() {
  newData.forEach(e => {
    e.type.forEach(item => {
      if (!types.includes(item)) {
        types.push(item);
      }
    });
  });
}

type();

types.forEach(e => {
  const option = document.createElement("option");
  option.setAttribute("class", "option-item");
  option.innerHTML = `${e}`;

  $("#select1").appendChild(option);
});

let selectValue = "";

$("#select1").addEventListener("change", evt => {
  selectValue = evt.target.value;

  for (let i = 0; i < newData.length; i++) {
    let found = newData[i];

    console.log(found);
  }
});
