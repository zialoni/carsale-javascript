const menu = [
  {
    id: 1,
    title: "Toyota Prius",
    category: "toyota",
    price: 39000.0,
    img: "./images/item-1.jpeg",
    desc: `Prius v is a 7-seat premium wagon that combines the agility of a passenger car with enough space for a growing family. Everything about this powerful, smart vehicle has been designed with versatility, comfort, innovation and style in mind.`,
  },
  {
    id: 2,
    title: "Toyota Hilux",
    category: "toyota",
    price: 45000,
    img: "./images/item-2.jpeg",
    desc: `Standing bold and powerful on the road, HiLux matches an uncompromisingly strong exterior with unrivalled levels of interior style. `,
  },
  {
    id: 3,
    title: "Toyota Hilux Rugged",
    category: "toyota",
    price: 60000,
    img: "./images/item-3.jpeg",
    desc: `Discover how rock rails on the HiLux Rugged and HiLux Rugged X offer extra protection in rocky terrain. Additionally on Rugged X, the fully integrated LED light bar and LED spread beam driving lights provide greater visibility wherever you go.`,
  },
  {
    id: 4,
    title: "Audi A7",
    category: "audi",
    price: 800000,
    img: "./images/item-4.jpeg",
    desc: `The A7 is in essence, a four-door fastback version of the C7-series Audi A6, based on the Volkswagen Group MLB platform. The A7 was released before the more conventional A6 saloon/estate `,
  },
  {
    id: 5,
    title: "Audi e-tron 55",
    category: "audi",
    price: 150000,
    img: "./images/item-5.jpeg",
    desc: `fPictured Model Audi e-tron 55 quattro – Combined electric power consumption in kWh/100 km (62.1 mi): 23.1 – 21.0 (NEDC); Combined CO2 emissions in g/km: 0 `,
  },
  {
    id: 6,
    title: "Audi A1",
    category: "audi",
    price: 80000,
    img: "./images/item-6.jpeg",
    desc: `Whether sporty, luxurious or compact - at Audi you will find the right vehicle for every requirement. Discover our series vehicles!`,
  },
  {
    id: 7,
    title: "Honda City",
    category: "honda",
    price: 40000,
    img: "./images/item-7.jpeg",
    desc: `Personal space is hard to come by these days but with room to move and room to manoeuvre, the Honda City lets you reclaim yours. `,
  },
  {
    id: 8,
    title: "Honda Accord",
    category: "honda",
    price: 50000,
    img: "./images/item-8.jpeg",
    desc: `Introducing the best Accord yet – where everything from the design and comfort, to tech, performance and safety has been elevated to the next level. Even at first glance you can tell something special is going on. `,
  },
  {
    id: 9,
    title: "Honda Civic",
    category: "honda",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Make every journey one to remember in a Civic Hatch. Encapsulating Honda’s passion for innovation and human-first design, its striking silhouette and distinctive looks refuse to blend into the background.`,
  },
  {
    id: 10,
    title: "Escape",
    category: "ford",
    price: 240000,
    img: "./images/item-10.jpeg",
    desc: `ore refined. The Escape’s exterior design stands out from the rest – whether in the city or on a weekend family getaway. Complemented with a distinctively stylish and comfortable cabin, the Ford Escape is ready for some serious fun..`,
  },
  {
    id: 11,
    title: "Everest",
    category: "ford",
    price: 12500,
    img: "./images/item-11.jpeg",
    desc: `o matter your lifestyle Ford has a Special Vehicle Package to suit your needs. Ford Everest Sport delivers a sportier and more energic SUV whilst the Everest BaseCamp Accessories Pack is the perfect fit for adventure seekers.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;

      /*
      return `<option>  data-id=${category}>
        ${category} 
      </option>`;*/
    })
    .join("");
  console.log(categories);

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
