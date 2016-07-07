var level = 1;
var score = 0;
var randomWord;
var splitRandomWord;
var joinSplitRandomWord;
// var timerId = setInterval(timer, 1000);
// var timerCount = 60;
// var gameOver = false;

// hard mode word bank
var wordArray = ["able", "about", "acid", "across", "again", "almost", "angle", "army", "back", "basket", "because", "beautiful", "board", "food", "frame", "other", "opposite", "start", "spring", "stone", "summer", "fall", "box", "bright", "broken", "brother", "brown", "brush", "canvas", "camera", "cheap", "chalk", "chance", "cheese", "chemical", "comfort", "comb", "come", "collar", "copy", "copper", "gold", "silver", "bronze", "cover", "cow", "cat", "dog", "sonic", "parrot", "views", "kicker", "quarterback", "running", "point", "guard", "forward", "center", "backward", "rewind", "common", "credit", "current", "crack", "crime", "curve", "daughter", "dark", "light", "sun", "moon", "design", "destruction", "detail", "degree", "dependent", "disgust", "division", "debt", "death", "different", "door", "down", "upside", "brightside", "liquid", "list", "little", "living", "lock", "loose", "loud", "love", "heart", "broken", "machine", "make", "male", "female", "women", "men", "manager", "mark", "send", "servant", "butler", "school", "screw", "scissor", "hammer", "round", "square", "winter", "weather", "cloudy", "week", "weight", "where", "waiting", "waste", "warm", "cold", "transport", "train", "trucker", "driver", "trouble", "trousers", "boxer", "referee", "basketball", "football", "soccer", "tomorrow", "tongue", "ticket", "master", "concert", "thunder", "lightning", "heat", "jazz", "teach", "sweet", "salty", "sugar", "owner", "page", "ornament", "straight", "soup", "sound", "solid", "some", "dumb", "smart", "genius", "solid", "soft", "move", "mouth", "mother", "dove", "glove", "error", "equal", "effect", "education", "edge", "east", "west", "north", "south", "engine", "egg", "effect", "earth", "jupiter", "shock", "shoe", "short", "shut", "slide", "simple", "amuse", "event", "false", "true", "family", "father", "mother", "sister", "brother", "uncle", "aunt", "feather", "feeble", "feelings", "fat", "skinny", "example", "birth", "force", "garden", "general", "give", "glass", "burst", "church", "horse", "house", "insect", "color", "collar", "island", "education", "agreement", "automatic", "mountain", "needle", "necessary", "sneeze", "squeeze", "bottle", "parcel", "parallel", "suggestion", "tendency", "government", "pleasure", "hammer", "cheese", "carriage", "discussion", "development", "selection", "yesterday", "whistle", "distribution", "machine", "manager", "secretary", "javascript", "python", "ruby", "objective", "science", "computer", "dialog", "physical", "payment", "system", "operation", "expansion", "experience", "amusement", "military", "general", "assembly", "migration", "microscope", "temperature", "elephant", "continent", "experiment", "nucleus", "molecule", "platinum", "skeleton", "metamorphosis", "eclispe", "photosynthesis", "asteroid", "glacier", "pressure", "communication", "evolution", "practice", "evident", "approach", "establish", "property", "instance", "passage", "circumstances", "constitute", "earnest", "territory", "financial", "majority", "advocate", "multitude", "illustrious", "esteem", "credible", "perpetual", "elaborate", "substantial", "frontier", "warrant", "flourish", "proceeding", "extravagant", "venerate", "exploited", "imposed", "humiliate", "suffrage", "indication", "dispatch", "latitude", "undertaking", "predecessor", "propriety", "consecrate", "fathom", "partisan", "faction", "manifestation", "scrupulous", "mortify", "tribunal", "exasperate", "conjure", "ominous", "admonish", "acquiesce", "sentinel", "precision", "deference", "impertinent", "insinuate", "explicate", "morbid", "pastoral", "stipulate", "constrained", "aversion", "perpetrate", "disconcert", "symmetry", "arbitrate", "chastise", "projection", "semblance", "fortitude", "purport", "enigma", "assiduous", "vassal", "outskirts", "prospective", "rudiment", "ideology", "astronomy", "audacious", "dutiful", "parity", "pillage", "foreboding", "livelihood", "stupendous", "wrangle", "crevice", "craven", "plumber", "hostage", "intrepid", "patronize", "morals", "evolve", "waive", "scrutinize", "execrate", "encumber", "cavalier", "warrior", "august", "tenacious", "opposition", "conservatory", "dictionary", "twist", "grudges", "renegade", "encroachment", "accentuate", "palpitate", "malevolent", "amalgamate", "proxy", "disembark", "trapping", "spectral", "remission", "invoke", "species", "happiness", "difficult", "obtuse", "ancestry", "alcove", "inflammatory", "makeshift", "industry"];

// random number generator
var randomNumber = function() {
	var number = [Math.floor(Math.random()*wordArray.length)];
	return number;
}

// shuffle generator
var shuffleWord = function(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// random word generator
var word = function() {
  randomWord = wordArray[randomNumber()];
  splitRandomWord = randomWord.split('');
  shuffleWord(splitRandomWord);
  joinSplitRandomWord = splitRandomWord.join('');
  console.log(joinSplitRandomWord);
}

function gameState() {
  word();
}

function answerChecker() {
  var answer = $('#answerBox').val();
  if (answer.toLowerCase() === randomWord) {
    console.log("Correct!");
  }
  else {
    console.log("Incorrect!");
    console.log("Correct answer is " + randomWord);
  }
}

gameState();
