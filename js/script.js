/* PARTE DATI */
const cardList = document.getElementById('cardList');
const powerFilter = document.getElementById('powerFilter');
const cardTypeFilter = document.getElementById('cardTypeFilter');
const cardsContainer = document.getElementById('cardsContainer');

const fieldCodes = ['W', 'U', 'B', 'R', 'G'];

const cardTypes = [
  'Terreno',
  'Creatura',
  'Incantesimo',
  'Artefatto',
  'Istantanea',
  'Stregoneria'
];

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

};

const powerValues = [1, 2, 3, 4, 5];

const cards = [
	{
	  cardName: 'Grizzly Bears',

	  cost: {
	    genericCostNumber: 1,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'https://cantrip.ru/images/arts/Bears.jpg',
	  cardType: cardTypes[1],
	  cardObject: 'Bear',

	  editionType: editions['BL'],

		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		story: 'blablablablablablabla',

		authorString: 'by Name Surname',

	  score: {
	    power: 1,  // filtrarlo per power
	    toughness: 2,
	  },

		cardColor: 'green',
	},

	{
	  cardName: 'Realmwalker',

	  cost: {
	    genericCostNumber: 2,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/8/e8a0877c-5217-422d-89b8-92f951068693.jpg',
	  cardType: cardTypes[1],
	  cardObject: 'Sorcerer',

	  editionType: editions['BL'],

		description: 'gthyjtuhgvfgthyrtgfv',
		story: 'jhgfrtyegbfhty',

		authorString: 'by Name Surname',

	  score: {
	    power: 3,  // filtrarlo per power
	    toughness: 1,
	  },

		cardColor: 'green',
	},

	{
	  cardName: 'Hammer of Nazahn',

	  cost: {
	    genericCostNumber: 4,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'https://64.media.tumblr.com/ea1686e60afa081b72c7caf45eb6b9f9/tumblr_pn3ctdEFuK1xq05xmo1_640.jpg',
	  cardType: cardTypes[3],
	  cardObject: 'Hammer',

	  editionType: editions['SP'],

		description: 'jhytghjhg',
		story: 'jhgfd',

		authorString: 'by Name Surname',

	  score: {
	    power: 3,  // filtrarlo per power
	    toughness: 5,
	  },

		cardColor: 'blue',
	},

	{
	  cardName: 'Spell Swindle',

	  cost: {
	    genericCostNumber: 3,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'https://images.magicdeck.app/crops/pxln/7573612c-eded-445f-9bc9-853ffe8be9cd.jpg',
	  cardType: cardTypes[2],
	  cardObject: 'Spell',

	  editionType: editions['BL'],

		description: 'ujyhyu75hygb',
		story: 'ujhyyu7yrhgb',

		authorString: 'by Name Surname',

	  score: {
	    power: 5,  // filtrarlo per power
	    toughness: 4,
	  },

		cardColor: 'yellow',
	},

	{
	  cardName: 'Snowfield Sinkhole',

	  cost: {
	    genericCostNumber: 0,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'https://lh3.googleusercontent.com/proxy/Nfc4MynK3aVCm8ayDo2FlsppbxsC24pcyYYtM8bQTMnNnZzlcvQYPaY1ZhPvdUbMUFwSl-J52d_2nKYmSCy_NxwnHkpGj_R3fM15hq04a14cmAHkGqoZk8Vfz2CUbtMiqf1lO2stcnfNr5Pbw-xZeLb8',
	  cardType: cardTypes[0],
	  cardObject: 'Snowfield',

	  editionType: editions['SP'],

		description: 'jhghhyrurhyyhgtf',
		story: 'jhyghty6rthg',

		authorString: 'by Name Surname',

	  score: {
	    power: 4,  // filtrarlo per power
	    toughness: 1,
	  },

		cardColor: 'white',
	},
];
/* end PARTE DATI */



/* PARTE LOGICA */
// Mostrare le carte per nome
function cardsByName(array, displayElement) {
  array.forEach((element) => {
    displayElement.innerHTML += `
    <div>${element.cardName}</div>
    `;
  });
};

// Aggiungere opzioni a filtri
function addFilterOption(array, filterElement) {
  array.forEach((element) => {
    filterElement.innerHTML += `
    <option value="${element}">${element}</option>
    `;
  });
};

// Creare elenco carte filtrate per power
function filterByPower(array, filterValue) {
  return array.filter((element, index, arr) => {
    return element.score.power === filterValue;
  });
};

// Creare elenco carte filtrate per cardType
function filterByCardType(array, filterValue) {
  return array.filter((element, index, arr) => {
    return element.cardType === filterValue;
  });
};

// Mostrare le carte filtrate per power
function powerFiltered(displayElement, funToExecute) {
  $('#powerFilter').change(function () {
    const value = parseInt($(this).val());
    const arrayByPower = filterByPower(cards, value);

    displayElement.innerHTML = '';
    if (isNaN(value)) {
      funToExecute(cards, displayElement);
    } else {
      funToExecute(arrayByPower, displayElement);
    };
  });
};

// Mostrare le carte filtrate per cardType
function cardTypeFiltered(displayElement, funToExecute) {
  $('#cardTypeFilter').change(function () {
    const value = $(this).val();
    const arrayByCardType = filterByCardType(cards, value);

    displayElement.innerHTML = '';
    if (value === ' ') {
      funToExecute(cards, displayElement);
    } else {
      funToExecute(arrayByCardType, displayElement);
    };
  });
};
/* end PARTE LOGICA */



/* PARTE OUTPUT */
cardsByName(cards, cardList);
addFilterOption(powerValues, powerFilter);
addFilterOption(cardTypes, cardTypeFilter);
powerFiltered(cardList, cardsByName);
cardTypeFiltered(cardList, cardsByName);
/* end PARTE OUTPUT */



/* ABBELLIMENTO */
function displayCards(array, displayElement) {
  array.forEach((element) => {
    const {cardName, picture, cardType, cardObject, description, story, authorString, cardColor} = element;
    const costNumber = element.cost.genericCostNumber;
    const powerValue = element.score.power;
    const toughnessValue = element.score.toughness;


    displayElement.innerHTML += `
    <div class="cardTemplate">
      <div class="cardContainer" style="background-color: ${cardColor};">
  			<div class="cardHeader card-section">
  				<div class="cardTitle">
            ${cardName}
  				</div>
  				<div class="cardCost">
            ${costNumber}
  				</div>
  			</div>
  			<div class="cardPicture card-section">
          <img src="${picture}" />
  			</div>
  			<div class="cardTypeObject card-section">
          ${cardType} — ${cardObject}
  			</div>
  			<div class="cardDescript card-section">
  				<p class="cardDescription">${description}</p>
  				<p class="cardStory">${story}</p>
          <div class="cardValues">
            ${powerValue} / ${toughnessValue}
          </div>
  			</div>
		  </div>
      <div class="cardFooter">
        <div class="cardAuthor">
          ${authorString}
        </div>
      </div>
		</div>
    `;
  });
};


displayCards(cards, cardsContainer);
powerFiltered(cardsContainer, displayCards);
cardTypeFiltered(cardsContainer, displayCards);
/* end ABBELLIMENTO */
