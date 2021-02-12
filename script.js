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
  let troublesome = ["bacon", "birthday-cake", "broom", "burn", "candy-cane", "car-battery", "cheese", "chess-king", "chess-knight", "chess-pawn", "cloud-meatball", "compact-disc", "cookie-bite", "copyright", "dice", "dice-d20", "fish", "hat-cowboy", "hat-cowboy-side", "hat-wizard", "hockey-puck", "holly-berry", "ice-cream", "kiss", "meh-rolling-eyes", "music", "paint-brush", "paper-plane", "puzzle-piece", "quidditch", "registered", "shield-alt", "ship", "skating", "skull-crossbones", "smile-wink", "snowman", "space-shuttle", "square-root-alt", "tachometer-alt", "toilet-paper", "tv", "user-astronaut", "user-ninja", "user-secret", "water", "wind"];
  let troubleIdx = troublesome.findIndex(trouble => trouble === str);
  let plural;
  if(troubleIdx > -1) {
    switch (troublesome[troubleIdx]) {
      case 'bacon':
        return plural = "Bacon";
      case 'birthday-cake':
        return plural = "Birthday Cakes";
      case 'broom':
        return plural = "Sweeps";
      case 'burn':
        return plural = "Flames";
      case 'candy-cane':
        return plural = "Candy Canes";
      case 'car-battery':
        return plural = "Batteries";
      case 'cheese':
        return plural = "Cheeseheads";
      case 'chess-king':
        return plural = "Kings";
      case 'chess-knight':
        return plural = "Knights";
      case 'chess-pawn':
        return plural = "Pawns";
      case 'cloud-meatball':
        return plural = "Meatballs";
      case 'compact-disc':
        return plural = "CDs";
      case 'cookie-bite':
        return plural = "Cookies";
      case 'copyright':
        return plural = "Cs";
      case 'dice':
        return plural = "Dice";
      case 'dice-d20':
        return plural = "Dice";
      case 'fish':
        return plural = "Fishes";
      case 'hat-cowboy':
        return plural = "Cowboys";
      case 'hat-cowboy-side':
        return plural = "Cowboys";
      case 'hat-wizard':
        return plural = "Wizards";
      case 'hockey-puck':
        return plural = "Hockey Pucks"
      case 'holly-berry':
        return plural = "Holly Berries"
      case 'ice-cream':
        return plural = "Ice Creams";
      case 'kiss':
        return plural = "Kisses";
      case 'meh-rolling-eyes':
        return plural = "Daniels";
      case 'music':
        return plural = "Music";
      case 'paint-brush':
        return plural = "Rosses";
      case 'paper-plane':
        return plural = "Planes";
      case 'puzzle-piece':
        return plural = "Puzzlers";
      case 'quidditch':
        return plural = "Cannons";
      case 'registered':
        return plural = "Rs";
      case 'shield-alt':
        return plural = "Protectors";
      case 'ship':
        return plural = "McBoats";
      case 'skating':
        return plural = "Skaters";
      case 'skull-crossbones':
        return plural = "Pirates";
      case 'smile-wink':
        return plural = "Winks";
      case 'snowman':
        return plural = "Snowmen";
      case 'space-shuttle':
        return plural = "Shuttles";
      case 'square-root-alt':
        return plural = "Not-So Squares";
      case 'tachometer-alt':
        return plural = "Speed Demons";
      case 'toilet-paper':
        return plural = "TPs";
      case 'tv':
        return plural = "TVs";
      case 'user-astronaut':
        return plural = "Astronauts";
      case 'user-ninja':
        return plural = "Ninjas";
      case 'user-secret':
        return plural = "Secret Agents";
      case 'water':
        return plural = "Water";
      case 'wind':
        return plural = "Toots";
    }
  }
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
  return plural;
}

// Random City Names
function cityName(str) {
  let special = ["apple-alt", "bacon", "book", "candy-cane", "carrot", "cheese", "cloud-meatball", "coffee", "dog", "ghost", "jedi", "kiwi-bird", "mountain", "paint-brush", "pizza-slice", "quidditch", "ship", "snowman", "space-shuttle", "stroopwafel", "tachometer-alt", "tree", "user-ninja"];
  let specialIdx = special.findIndex(value => value === str);
  let states = ["Alabama", "Alaska", "Arizona", "Arkansas", "Boogerville", "Boring", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Goobertown", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rainbow City", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Whynot", "Wisconsin", "Wyoming"]
  let city = "Florida";
  if(specialIdx > -1) {
    switch (special[specialIdx]) {
      case 'apple-alt':
        return city = 'Cupertino';
      case 'bacon':
        return city = 'Peppatown';
      case 'book':
        return city = 'Chinook';
      case 'candy-cane':
        return city = 'North Pole';
      case 'carrot':
        return city = 'Albuquerque';
      case 'cheese':
        return city = 'Wisconsin';
      case 'cloud-meatball':
        return city = 'Chewandswallow';
      case 'coffee':
        return city = "Mom's Favorite";
      case 'dog':
        return city = "Flappy";
      case 'ghost':
        return city = 'Scareville';
      case 'jedi':
        return city = 'Tatooine';
      case 'kiwi-bird':
        return city = 'New Zealand'
      case 'mountain':
        return city = 'Rocky';
      case 'paint-brush':
        return city = 'Bob';
      case 'pizza-slice':
        return city = "Parry's";
      case 'quidditch':
        return city = 'Chudley';
      case 'ship':
        return city = 'Boaty';
      case 'snowman':
        return city = "Frosty's";
      case 'space-shuttle':
        return city = "Kennedy";
      case 'stroopwafel':
        return city = 'Dutch';
      case 'tachometer-alt':
        return city = 'Bonneville';
      case 'tree':
        return city = 'Happy Little';
      case 'user-ninja':
        return city = 'Sneaky';
    };
    localStorage.setItem('city', city);
  } else {
    let random = Math.floor(Math.random() * states.length + 1);
    city = states[random];
    localStorage.setItem('city', city);
  }
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
