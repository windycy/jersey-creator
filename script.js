const root = document.documentElement;
const logoSelection = document.getElementById('logo-image');
const logoIcon = document.getElementById('logo-icon');
const teamNameCity = document.getElementById('team-name-city');
const teamNameLogo = document.getElementById('team-name-logo');
const mainColor = document.getElementById('mainColor');
const accent1Color = document.getElementById('accent1Color');
const accent2Color = document.getElementById('accent2Color');
const logoBkgColor = document.getElementById('logoBkgColor');
const logoColor = document.getElementById('logoColor');

teamNameCity.spellcheck = false;

let colors = [mainColor, accent1Color, accent2Color, logoBkgColor, logoColor];
let defaultColors = {
  mainColor: '#008080', 
  accent1Color: '#830483', 
  accent2Color: '#ffffff',
  logoBkgColor: '#000000',
  logoColor: '#ffffff' 
};
let states = ["Alabama", "Alaska", "Arizona", "Arkansas", "Boogerville", "Boring", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Goobertown", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rainbow City", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Whynot", "Wisconsin", "Wyoming"]
let specialCases = {
  "apple-alt": {
    city: 'Cupertino',
  },
  "bacon": {
    plural: "Bacon",
    city: 'Peppatown',
  },
  "birthday-cake": {
    plural: "Birthday Cakes",
  },
  "book": {
    city: 'Chinook',
  },
  "broom": {
    plural: "Sweeps",
  },
  "burn": {
    plural: "Flames",
  },
  "candy-cane": {
    plural: "Candy Canes",
    city: 'North Pole',
  },
  "carrot": {
    city: 'Albuquerque',
  },
  "car-battery": {
    plural: "Batteries",
  },
  "cheese": {
    plural: "Cheeseheads",
    city: 'Wisconsin',
  },
  "chess-king": {
    plural: "Kings",
  },
  "chess-knight": {
    plural: "Knights",
  },
  "chess-pawn": {
    plural: "Pawns",
  },
  "cloud-meatball": {
    plural: "Meatballs",
    city: 'Chewandswallow',
  },
  "coffee": {
    city: "Mom's Favorite",
  },
  "compact-disc": {
    plural: "CDs",
  },
  "cookie-bite": {
    plural: "Cookies",
  },
  "copyright": {
    plural: "Cs",
  },
  "dice": {
    plural: "Dice",
  },
  "dice-d20": {
    plural: "Dice",
  },
  "dog": {
    city: "Flappy",
  },
  "fish": {
    plural: "Fishes",
  },
  "ghost": {
    city: 'Scareville',
  },
  "hat-cowboy": {
    plural: "Cowboys",
  },
  "hat-cowboy-side": {
    plural: "Cowboys",
  },
  "hat-wizard": {
    plural: "Wizards",
  },
  "hockey-puck": {
    plural: "Hockey Pucks",
  },
  "holly-berry": {
    plural: "Holly Berries",
  },
  "ice-cream": {
    plural: "Ice Creams",
  },
  "jedi": {
    city: 'Tatooine',
  },
  "kiss": {
    plural: "Kisses",
  },
  "kiwi-bird": {
    city: 'New Zealand',
  },
  "meh-rolling-eyes": {
    plural: "Daniels",
  },
  "mountain": {
    city: 'Rocky',
  },
  "music": {
    plural: "Music",
  },
  "paint-brush": {
    plural: "Rosses",
    city: 'Bob',
  },
  "paper-plane": {
    plural: "Planes",
  },
  "pizza-slice": {
    city: "Parry's",
  },
  "puzzle-piece": {
    plural: "Puzzlers",
  },
  "quidditch": {
    plural: "Cannons",
    city: 'Chudley',
  },
  "registered": {
    plural: "Rs",
  },
  "shield-alt": {
    plural: "Protectors",
  },
  "ship": {
    plural: "McBoats",
    city: 'Boaty',
  },
  "skating": {
    plural: "Skaters",
  },
  "skull-crossbones": {
    plural: "Pirates",
  },
  "smile-wink": {
    plural: "Winks",
  },
  "snowman": {
    plural: "Snowmen",
    city: "Frosty's",
  },
  "space-shuttle": {
    plural: "Shuttles",
    city: "Kennedy",
  },
  "square-root-alt": {
    plural: "Not-So Squares",
  },
  "stroopwafel": {
    city: 'Dutch',
  },
  "tachometer-alt": {
    plural: "Speed Demons",
    city: 'Bonneville',
  },
  "toilet-paper": {
    plural: "TPs",
  },
  "tree": {
    city: 'Happy Little',
  },
  "tv": {
    plural: "TVs",
  },
  "user-astronaut": {
    plural: "Astronauts",
  },
  "user-ninja": {
    plural: "Ninjas",
    city: 'Sneaky',
  },
  "user-secret": {
    plural: "Secret Agents",
  },
  "water": {
    plural: "Water",
  },
  "wind": {
    plural: "Toots",
  }
};

// Recall Local Storage or set Defaults
(function initialState() {
  colors.forEach(function(elem) {
    let storedVar = localStorage.getItem(elem.name);
    if(storedVar) {
      root.style.setProperty(`--${elem.name}`, storedVar);
      elem.value = storedVar;
    } else {
      root.style.setProperty(`--${elem.name}`, defaultColors[elem.name]);
      elem.value = defaultColors[elem.name];
    }
  });
  let storedIcon = localStorage.getItem('icon');
  if(storedIcon) {
    logoIcon.className = '';
    logoIcon.classList.add("fas", `fa-${storedIcon}`);
    logoSelection.value = storedIcon;
  } else {
    logoIcon.classList.add("fas", "anchor");
  }
  teamNameLogo.innerText = makePlural(logoSelection.value);
  if(localStorage.getItem("city")) {
    teamNameCity.innerText = localStorage.getItem("city");
  } else {
    teamNameCity.innerText = cityName(logoSelection.value);
  }
})();

// Make Name Plural
function makePlural(str) {
  let plural;
  if(specialCases[str] && specialCases[str].plural) {
    plural = specialCases[str].plural;
  } else {
    let middle = str.split("-")[0].substring(1);
    let first = str[0].toUpperCase();
    let last = middle[middle.length-1];
    if(last === 'y') {
      middle = middle.substring(0, middle.length - 1);
      console.log(middle);
      plural = first + middle + "ies";
    } else if (last === 's') {
      plural = first + middle;
    } else {
      plural = first + middle + "s";
    }
  }
  return plural;
}

// Random City Names
function cityName(str) {
  let city;
  if(specialCases[str] && specialCases[str].city) {
    city = specialCases[str].city;
  } else {
    let random = Math.floor(Math.random() * states.length + 1);
    city = states[random];
  }
  localStorage.setItem('city', city);
  return city;
}

// Change the logo on input change
function updateLogo(e) {
  logoIcon.className = '';
  const logoSelect = "fa-" + e.target.value;
  logoIcon.classList.add("fas", logoSelect);
  localStorage.setItem('icon', e.target.value);
  teamNameLogo.innerText = makePlural(e.target.value);
  teamNameCity.innerText = cityName(e.target.value);
}

// Change the Main Jersey Color
function updateColorMain(e) {
  root.style.setProperty('--mainColor', e.target.value);
  localStorage.setItem('mainColor', e.target.value);
}

// Change Accent Colors
function updateColorAccent1(e) {
  root.style.setProperty('--accent1Color', e.target.value);
  localStorage.setItem('accent1Color', e.target.value);
}

function updateColorAccent2(e) {
  root.style.setProperty('--accent2Color', e.target.value);
  localStorage.setItem('accent2Color', e.target.value);
}

// Change Logo Colors
function updateColorLogoBkg(e) {
  root.style.setProperty('--logoBkgColor', e.target.value);
  localStorage.setItem('logoBkgColor', e.target.value);
}

function updateColorLogo(e) {
  root.style.setProperty('--logoColor', e.target.value);
  localStorage.setItem('logoColor', e.target.value);
}

logoSelection.addEventListener('input', updateLogo);
mainColor.addEventListener('input', updateColorMain);
accent1Color.addEventListener('input', updateColorAccent1);
accent2Color.addEventListener('input', updateColorAccent2);
logoBkgColor.addEventListener('input', updateColorLogoBkg);
logoColor.addEventListener('input', updateColorLogo);
