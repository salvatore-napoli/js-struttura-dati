/* PARTE DATI */
const cardList = document.getElementById('cardList');
const powerFilter = document.getElementById('powerFilter');
const cardTypeFilter = document.getElementById('cardTypeFilter');

const fieldCodes = ['W', 'U', 'B', 'R', 'G'];

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
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

	  picture: 'images/grizzlybears.png',
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

	  picture: 'images/realmwalker.png',
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

		cardColor: 'red',
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

	  picture: 'images/hammer.png',
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

		cardColor: 'green',
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

	  picture: 'images/swindle.png',
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

		cardColor: 'green',
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

	  picture: 'images/snowfield.png',
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
function displayCards(array, displayElement) {
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
/* end PARTE LOGICA */


/* PARTE OUTPUT */
displayCards(cards, cardList);
addFilterOption(powerValues, powerFilter);
addFilterOption(cardTypes, cardTypeFilter);

// Mostrare le carte filtrate per power
$('#powerFilter').change(function () {
  const value = parseInt($(this).val());
  const arrayByPower = filterByPower(cards, value);

  cardList.innerHTML = '';
  if (isNaN(value)) {
    displayCards(cards, cardList);
  } else {
    displayCards(arrayByPower, cardList);
  };
});

// Mostrare le carte filtrate per cardType
$('#cardTypeFilter').change(function () {
  const value = $(this).val();
  const arrayByCardType = filterByCardType(cards, value);

  cardList.innerHTML = '';
  if (value === ' ') {
    displayCards(cards, cardList);
  } else {
    displayCards(arrayByCardType, cardList);
  };
});
/* end PARTE OUTPUT */
