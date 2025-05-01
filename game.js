console.log("✅ game.js is running");

const wordlings = [
	{ id: 'abaddon', name: 'Cosplay Abaddon', bio: 'Marches across the stars, leaving typo-free battlefields behind.', img: 'images/abbadonling.png', isCosplay: true },
	{ id: 'alien', name: 'Alien', bio: 'Communicates only in anagrams. Very polite.', img: 'images/space-wordling3.png', theme: '🚀 Space' },
	{ id: 'alpaca', name: 'Alpaca', bio: 'Soft, stubborn, and quietly brilliant at hidden words.', img: 'images/tame-animal-wordling1.png', theme: '🐾 Animals' }, 
	{ id: 'amethyst', name: 'Amethyst', bio: 'Keeps your thoughts calm and your crossword sharp.', img: 'images/gem-wordling1.png'},
	{ id: 'angron', name: 'Cosplay Angron', bio: 'Fueled by rage, but still spells meticulously.', img: 'images/angronling.png', isCosplay: true },
	{ id: 'ash-ketchum', name: 'Cosplay Ash', bio: 'Wants to be the very best — like no Wordling ever was.', img: 'images/pokeling.png', isCosplay: true },
	{ id: 'astronaut', name: 'Astronaut', bio: 'A brave explorer of alphabetic galaxies.', img: 'images/space-wordling1.png', theme: '🚀 Space' },
	{ id: 'sister-of-battle', name: 'Battle Sister', bio: 'Sings battle hymns while solving every word grid.', img: 'images/warhammer-40k-wordling2.png' },
	// { id: 'black-mage', name: 'Black Mage', img: 'images/fantasy-wordling1.png' },
	{ id: 'boxer', name: 'Boxer', bio: 'Tough on the outside, soft for victory hugs. Loves punching out tough puzzles.', img: 'images/punchling.png'},
  { id: 'butterfly', name: 'Butterfly', bio: 'Always in motion, this Wordling dances between dreams.', img: 'images/wordling5.png' },
	{ id: 'brontosaurus', name: 'Bronty', bio: 'Moves slow, thinks deep, and loves long words.', img: 'images/dinosaur-wordling3.png', theme: '🐾 Animals'},
	{ id: 'cat', name: 'Cat', bio: 'Purrs when you find a word. Meows when you miss one.', img: 'images/tame-animal-wordling4.png', theme: '🐾 Animals'},
	{ id: 'cecil', name: 'Cosplay Cecil', bio: 'Once cloaked in shadow, Cecil now shines with courage and calm.', img: 'images/ceciling.png', isCosplay: true },
	{ id: 'celestine', name: 'Cosplay Celestine', bio: 'Glows with the faith of countless finished wordsearches.', img: 'images/celestineling.png', isCosplay: true },
	// { id: 'clarinet', name: 'Clarinet', img: 'images/music-wordling1.png'},
	{ id: 'clive', name: 'Cosplay Clive', bio: 'A fierce heart hidden behind quiet resolve. Loves dramatic words.', img: 'images/cliveling.png', isCosplay: true },
  { id: 'cloud', name: 'Cosplay Cloud', bio: 'Carries a very large word sword. Silent, but brooding.', img: 'images/cloudling.png', isCosplay: true },
  { id: 'coffee', name: 'Coffee', bio: 'Wakes up early, stirs the fog, and smells like home.', img: 'images/cozy-wordling2.png' },
	{ id: 'corgi', name: 'Corgi', bio: 'Short legs. Big dreams. Endless enthusiasm for new puzzles.', img: 'images/tame-animal-wordling3.png', theme: '🐾 Animals' },
  // { id: 'cyber', name: 'Cyber', img: 'images/cyberling.png' },
	{ id: 'dance-miku', name: 'Dancing Idol', bio: 'Spins and twirls every time you find a hidden word.', img: 'images/miku-wordling2.png'},
	{ id: 'deku', name: 'Cosplay Deku', bio: 'Never gives up, even against the longest hidden words.', img: 'images/hero-academia-wordling.png', isCosplay: true },
	{ id: 'emerald', name: 'Emerald', bio: 'Soft-spoken and grounded, but guards powerful stories.', img: 'images/gem-wordling3.png'},
	{ id: 'flower-crown', name: 'Flower Crown', bio: 'Likes to hum soft vowels and frolic through wordfields.', img: 'images/wordling4.png' },
	{ id: 'fulgrim', name: 'Cosplay Fulgrim', bio: 'Exquisitely stylish. Only the fanciest, most elaborate words will do.', img: 'images/fulgrimling.png' },
	{ id: 'goku', name: 'Cosplay Goku', bio: 'Always ready to power up — especially when finding tricky words.', img: 'images/gokuling.png', isCosplay: true },
	{ id: 'igneous', name: 'Iggy', bio: 'Solid, dependable, and full of volcanic vocabulary.', img: 'images/igneous-wordling.png' },
	{ id: 'jupiter', name: 'Jupiter', bio: 'Large, bold, and always orbiting the center of attention.', img: 'images/space-wordling4.png', theme: '🚀 Space' },
	// { id: 'king', name: 'King', img: 'images/royaling.png' },
	// { id: 'knight', name: 'Knight', img: 'images/fantasy-wordling2.png' }, 
	{ id: 'leaf', name: 'Leaf', bio: 'Drifts from puzzle to puzzle, whispering secrets on the wind.', img: 'images/wordling3.png' },
  { id: 'link', name: 'Cosplay Link', bio: 'Breaks pots to find hidden letters and bonus words.', img: 'images/dekuling.png', isCosplay: true },
  { id: 'lion', name: 'Lion', bio: 'Roars in triumph when you solve a tough grid.', img: 'images/wild-animal-wordling5.png', theme: '🐾 Animals'},
	// { id: 'mecha', name: 'Mecha', img: 'images/mechaling.png'}
	// { id: 'mermaid', name: 'Mermaid', img: 'images/mermaid-wordling.png' }
	{ id: 'metamorphic', name: 'Morph', bio: 'Transforms mistakes into masterpieces.', img: 'images/metamorphic-wordling.png' },
  { id: 'moon', name: 'Moon', bio: 'Gently watches over your night puzzles.', img: 'images/space-wordling5.png', theme: '🚀 Space' },
	// { id: 'ninja', name: 'Ninja', img: 'images/ninjaling.png' },
  { id: 'news', name: 'Newsie', bio: 'Always up to date with the latest words and trends.', img: 'images/current-events-wordling1.png' },
	{ id: 'knuckles', name: 'Our Lord', bio: "Do you know de wey?", img: 'images/knuckling.png', isCosplay: true },
	// { id: 'panda', name: 'Panda', bio: 'A little shy, a little mischievous, but always cheering you on.', img: 'images/wild-animal-wordling2.png' },
	// { id: 'penguin', name: 'Penguin', img: 'images/wild-animal-wordling3.png' },
	{ id: 'perform-miku', name: 'Performing Idol', bio: 'Brings energy and sparkle to every search.', img: 'images/miku-wordling1.png' },
	{ id: 'peridot', name: 'Peridot', bio: 'Bright, curious, and full of energy. Likes sparkly words.', img: 'images/gem-wordling2.png' },
	 // { id: 'pirate', name: 'Pirate', img: 'pirateling.png' },
  { id: 'polar-bear', name: 'Polar Bear', bio: 'Cool under pressure, even when vowels run scarce.', img: 'images/wild-animal-wordling6.png', theme: '🐾 Animals' },
	{ id: 'pose-miku', name: 'Posing Idol', bio: 'Strikes a perfect pose — and a perfect word score.', img: 'images/miku-wordling3.png' },
	{ id: 'pterodactyl', name: 'Pterry', bio: 'Glides above the puzzle grid, spotting patterns from the sky.', img: 'images/dinosaur-wordling4.png', theme: '🐾 Animals' },
	{ id: 'red-panda', name: 'Red Panda', bio: 'A little shy, a little mischievous, but always cheering you on.', img: 'images/wild-animal-wordling1.png', theme: '🐾 Animals' },
  { id: 't-rex', name: 'Rex', bio: 'Can’t reach the keyboard, but has a big heart.', img: 'images/dinosaur-wordling1.png', theme: '🐾 Animals' },
	{ id: 'sailor-moon', name: 'Cosplay Sailor Moon', bio: 'Fights for love, justice, and beautifully arranged anagrams.', img: 'images/moonling.png', isCosplay: true },
	{ id: 'sapphire', name: 'Sapphire', bio: 'Dreams of oceans, stars, and rare vocabulary.', img: 'images/gem-wordling4.png' },
	{ id: 'scarf', name: 'Scarf', bio: 'Snuggles close when the words get chilly.', img: 'images/cozy-wordling1.png' },
	{ id: 'sedimentary', name: 'Sedrick', bio: 'Patiently layers letters until a word forms.', img: 'images/sedimentary-wordling.png' },
	{ id: 'sheep', name: 'Sheep', bio: 'Loves napping between puzzles... and during puzzles.', img: 'images/tame-animal-wordling2.png', theme: '🐾 Animals' },
	{ id: 'space-marine', name: 'Space Soldier', bio: 'Disciplined, determined, and ever-vigilant for stray vowels.', img: 'images/warhammer-40k-wordling1.png' },
	{ id: 'squall', name: 'Cosplay Squall', bio: 'Prefers short words, long puzzles, and deep sighs.', img: 'images/squalling.png', isCosplay: true },
	{ id: 'staff', name: 'Staff', bio: 'Old as language itself, Staff once knew every word.', img: 'images/wordling1.png' },
	{ id: 'star', name: 'Star', bio: 'Twinkles when you find especially clever words.', img:'images/space-wordling2.png', theme: '🚀 Space' },
	{ id: 'stick', name: 'Stick', bio: 'Loyal companion of Leaf. Slightly bendy. Unreasonably proud.', img: 'images/wordling2.png' },
	{ id: 'terra', name: 'Cosplay Terra', bio: 'Born from magic and memory, Terra searches for lost syllables.', img: 'images/terraling.png', isCosplay: true },
  { id: 'tiger', name: 'Tiger', bio: 'Stalks crosswords with silent strength and sharp instinct.', img: 'images/wild-animal-wordling4.png', theme: '🐾 Animals'},
  { id: 'triceratops', name: 'Trixie', bio: 'Mischievous but loyal. Favorite word: “triumph.”', img: 'images/dinosaur-wordling2.png', theme: '🐾 Animals' },
	// { id: 'trumpet', name: 'Trumpet', img: 'images/music-wordling2.png' },
  { id: 'warrior-of-light', name: 'Cosplay Warrior', bio: 'A beacon in the crossword night, ever seeking the next challenge.', img: 'images/warrioroflightling.png', isCosplay: true },
	{ id: 'tau-mech', name: 'Xeno Mech', bio: 'Calculates every letter placement with precise efficiency.', img: 'images/warhammer-40k-wordling3.png' },
	{ id: 'zelda', name: 'Cosplay Zelda', bio: 'Wields wisdom and wit with equal ease.', img: 'images/zelda-wordling.png', isCosplay: true},
  { id: 'zidane', name: 'Cosplay Zidane', bio: 'Quick with a pun and quicker on his feet.', img: 'images/zidaneling.png', isCosplay: true },
  { id: 'milestone5', name: 'Sprout', bio: 'Congrats on finding 5 unique wordlings!', img: 'images/milestone5.png', isMilestone: true },
  { id: 'milestone10', name: 'Seeker', bio: 'Congrats on finding 10 unique wordlings!', img: 'images/milestone10.png', isMilestone: true },
  { id: 'milestone25', name: 'Trailblazer', bio: 'Congrats on finding 25 unique wordlings!', img: 'images/milestone25.png', isMilestone: true },
  { id: 'milestone50', name: 'Warden', bio: 'Congrats on finding 50 unique wordlings!', img: 'images/milestone50.png', isMilestone: true },
  { id: 'milestone-all', name: 'Luminary',bio: 'You caught them all! Way to go!', img: 'images/milestone-all.png', isMilestone: true },
]

const wordlingThemes = {
  // ANIMALS
  cretaceousDinosaurs: ['dinosaur-wordling1.png', 'dinosaur-wordling2.png', 'dinosaur-wordling3.png', 'dinosaur-wordling4.png'],
  domesticAnimals: ['tame-animal-wordling1.png', 'tame-animal-wordling2.png', 'tame-animal-wordling3.png', 'tame-animal-wordling4.png'],
	zooAnimals: ['tame-animal-wordling1.png', 'wild-animal-wordling1.png', 'tame-animal-wordling2.png', 'wild-animal-wordling4.png', 'wild-animal-wordling5.png'],
  jurassicDinosaurs: ['dinosaur-wordling1.png', 'dinosaur-wordling2.png', 'dinosaur-wordling3.png', 'dinosaur-wordling4.png'],
  popularDinosaurs: ['dinosaur-wordling1.png', 'dinosaur-wordling2.png', 'dinosaur-wordling3.png', 'dinosaur-wordling4.png'],
  triassicDinosaurs: ['dinosaur-wordling1.png', 'dinosaur-wordling2.png', 'dinosaur-wordling3.png', 'dinosaur-wordling4.png'],
  // ASTRONOMY
	space: ['space-wordling1.png', 'space-wordling2.png', 'space-wordling3.png', 'space-wordling4.png'],
  // CURRENT EVENTS
  march2025: ['wordling5.png', 'current-events-wordling1.png', 'space-wordling5.png', 'wild-animal-wordling6.png', 'punchling.png', 'space-wordling1.png'],
  // FOOD
  fruits: ['wordling1.png', 'wordling2.png', 'wordling3.png', 'wordling4.png'],
  // GEOLOGY
  gemstones: ['gem-wordling1.png', 'gem-wordling2.png', 'gem-wordling3.png', 'gem-wordling4.png'],
  igneousRocks: ['gem-wordling1.png', 'gem-wordling2.png', 'gem-wordling3.png', 'gem-wordling4.png', 'igneous-wordling.png'],
  metamorphicRocks: ['gem-wordling1.png', 'gem-wordling2.png', 'gem-wordling3.png', 'gem-wordling4.png', 'metamorphic-wordling.png'],
  sedimentaryRocks: ['gem-wordling1.png', 'gem-wordling2.png', 'gem-wordling3.png', 'gem-wordling4.png', 'sedimentary-wordling.png'],
  // MUSIC
  miku: ['miku-wordling1.png', 'miku-wordling2.png', 'miku-wordling3.png'],
  mikusongs: ['miku-wordling1.png', 'miku-wordling2.png', 'miku-wordling3.png'],
  // POP CULTURE
  warhammerfortyksetting: ['warhammer-40k-wordling1.png', 'warhammer-40k-wordling2.png', 'warhammer-40k-wordling3.png'],
  // OTHER
  cozy: ['cozy-wordling1.png', 'cozy-wordling2.png'], 
  // add more as you build more puzzles
};

const themeRewards = {
  '🐾 Animals': {
    titleImage: 'images/title-animals2.png',
    backgroundClass: 'theme-animals',
    fontClass: 'theme-animals-font'
  },
  '🚀 Space': {
    titleImage: 'images/title-space.png',
    backgroundClass: 'theme-space',
    fontClass: 'theme-space-font'
  }
};

const cosplayWordlings = ['abaddon', 'angron', 'ash-ketchum', 'cecil', 'celestine', 'clive', 'cloud', 'deku', 'fulgrim', 'goku', 'link', 'knuckles', 'sailor-moon', 'squall', 'terra', 'warrior-of-light', 'zelda', 'zidane']

const foundWordlings = new Set(); // Tracks which Wordlings you've found

const grid = [];
let gridSize = 10;
let words = [];
let currentPuzzleTheme = 'fruits'; // default
let bonusWord = ''; // The hidden word
let korokCount = 0;
const cellElements = [];
const weightedDirections = [
  [0, 1], [0, 1],     // horizontal
  [1, 0], [1, 0],     // vertical
  [1, 1], [1, 1], [1, 1], // diagonal
  [-1, 1], [-1, 1], [-1, 1] // reverse diagonal
];
let selectedCells = [];
let isMouseDown = false;
let selecting = false;
let floatingWordling = null;
let floatingWordlingImage = null;
let unlockedCosplays = [];
let clickStartCell = null;
const shouldAvoidClumping = gridSize >= 10;
let currentListKey = '';
let unlockedThemes = new Set();
let activeTheme = null; // No active theme at first

function createEmptyGrid() {
  for (let i = 0; i < gridSize; i++) {
      grid[i] = [];
      cellElements[i] = [];
      for (let j = 0; j < gridSize; j++) {
      grid[i][j] = '';
      cellElements[i][j] = null;
      }
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function getCellData(el) {
  return {
      element: el,
      letter: el.textContent,
      row: parseInt(el.dataset.row),
      col: parseInt(el.dataset.col)
  };
}

function tryPlacingWords(wordList, maxWords = 12) {
  const placed = [];
  const copy = [...wordList];
  shuffle(copy);
  
  for (let originalWord of copy) {
    const cleanWord = originalWord.replace(/\s+/g, '').toUpperCase();

    if (cleanWord.length > gridSize) continue; // skip overly long words
    if (placed.length >= maxWords) break;

    if (placeWord(cleanWord)) {
        placed.push({ display: originalWord, value: cleanWord });
    }
  }
  
  // 🌟 Add a hidden bonus word (guaranteed)!
  const allWords = wordList.filter(w => !placed.some(p => p.display === w));
  shuffle(allWords);
  bonusWord = ''; // reset before attempting placement
  
  for (let i = 0; i < allWords.length; i++) {
    const candidate = allWords[i].replace(/\s+/g, '').toUpperCase();
    if (!placed.some(p => p.value === candidate) && placeWord(candidate)) {
        bonusWord = candidate;
        break;
    }
  }
  
  // 🪄 Optional backup: reuse a placed word if nothing else fits
  if (!bonusWord && placed.length > 0) {
      const fallback = placed[Math.floor(Math.random() * placed.length)];
      bonusWord = fallback.value;
  }
  
  return placed;
}

function generatePuzzle() {
  console.log("🧩 generatePuzzle() was called!");
  
  const overlay = document.getElementById('congrats-overlay');
  if (overlay) overlay.style.display = 'none';
  const blocker = document.getElementById('interaction-blocker');
  if (blocker) blocker.style.display = 'none';
  const gridElement = document.getElementById('grid');
  if (gridElement) gridElement.classList.remove('grid-disabled');

  const sizeSelect = document.getElementById('size-select');
  const listSelect = document.getElementById('wordlist-select');
  if (!sizeSelect || !listSelect) {
    console.warn("Missing size-select or wordlist-select elements.");
    return;
  }

  const sizeValue = sizeSelect.value;
  const listValue = listSelect.value;
  currentListKey = listValue
  console.log("Selected wordlist:", listValue);
  console.log("Available keys in wordLists:", Object.keys(wordLists));
  currentPuzzleTheme = listValue;

  const wordListObj = wordLists[listValue];
  if (!wordListObj || !wordListObj.words || !wordListObj.facts) {
    console.warn(`Wordlist for theme '${listValue}' is invalid or incomplete.`);
    return;
  }

  const wordList = wordListObj.words;
  const facts = wordListObj.facts;

  const puzzleFact = document.getElementById('puzzle-fact');
  if (puzzleFact && facts.length > 0) {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    puzzleFact.textContent = `${randomFact}`;
  }

    const hiddenLabel = document.getElementById('hidden-word-value');
  if (hiddenLabel) hiddenLabel.textContent = '(still hiding...)';
	
  if (floatingWordling) {
    floatingWordling.remove();
    floatingWordling = null;
    floatingWordlingImage = null;
  }

  gridSize = parseInt(sizeValue);

  selectedCells = [];
  selectedCells.direction = null;

  createEmptyGrid();
  const maxWords = Math.floor(gridSize * 0.8); // scale with grid size
  words = tryPlacingWords(wordList, maxWords);
  fillEmptyCells();
  renderWordList();
  renderGrid();

  console.log("Placed words:", words.map(w => w.display));
  console.log("Bonus word:", bonusWord);

  showCollectionBanner(); // ✅ Display banner as soon as a puzzle is loaded
	updateProgressBar();
}

function placeWord(word) {
  const directions = [
    [0, 1],   // right
    [1, 0],   // down
    [1, 1],   // diagonal down-right
    [-1, 1]   // diagonal up-right
  ];

  for (let attempts = 0; attempts < 100; attempts++) {
    const dir = directions[Math.floor(Math.random() * directions.length)];
    const row = Math.floor(Math.random() * gridSize);
    const col = Math.floor(Math.random() * gridSize);

    let fits = true;

    for (let i = 0; i < word.length; i++) {
      const r = row + dir[0] * i;
      const c = col + dir[1] * i;

      if (
        r < 0 || r >= gridSize ||
        c < 0 || c >= gridSize ||
        (grid[r][c] && grid[r][c] !== word[i])
      ) {
        fits = false;
        break;
      }
    }

    if (fits) {
      for (let i = 0; i < word.length; i++) {
        const r = row + dir[0] * i;
        const c = col + dir[1] * i;
        grid[r][c] = word[i];
      }
      return true;
    }
  }

  console.warn(`❌ Failed to place word: ${word}`);
  return false;
}

function fillEmptyCells() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
		if (!grid[i][j]) {
			grid[i][j] = letters[Math.floor(Math.random() * letters.length)];
			}
		}
	}
}

function renderWordList() {
	const listDiv = document.getElementById('word-list');
	listDiv.innerHTML = '<strong>Find these words:</strong><br>' +
			words.map(w => `<span id="word-${w.value}">${w.display}</span>`).join(', ');
}

function renderGrid() {
	const gridDiv = document.getElementById('grid');
	gridDiv.innerHTML = '';
	gridDiv.style.gridTemplateColumns = `repeat(${gridSize}, 30px)`; // <-- this fixes it!

	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
		const cell = document.createElement('div');
		cell.textContent = grid[i][j];
		cell.className = 'cell';
		cell.dataset.row = i;
		cell.dataset.col = j;

		cell.addEventListener('mousedown', (e) => {
			e.preventDefault();
			isMouseDown = true;
			clearSelection();
			selectCell(cell);
		});

		cell.addEventListener('mouseenter', () => {
			if (isMouseDown) selectCell(cell);
		});

		cell.addEventListener('mouseup', () => {
			isMouseDown = false;
			checkSelectedWord();
		});

                cell.addEventListener('click', () => {
                  handleClickSelection(cell);
                });

    cell.addEventListener('touchstart', (e) => {
  e.preventDefault();
  handleTouchClickStart(e);
}, { passive: false });

cell.addEventListener('touchend', (e) => {
  e.preventDefault();
  handleTouchClickEnd(e);
}, { passive: false });

		cell.addEventListener('touchstart', handleTouchStart, { passive: false });
		cell.addEventListener('touchmove', handleTouchMove, { passive: false });
		cell.addEventListener('touchend', handleTouchEnd);

		gridDiv.appendChild(cell);
		cellElements[i][j] = cell;
		}
	}

	document.body.addEventListener('mouseup', () => {
		isMouseDown = false;
		checkSelectedWord();
	});
}

function handleTouchStart(e) {
  if (!clickMode) return;
  const target = e.target;

  if (target && target.classList.contains('cell')) {
    clearSelection();
    clickStartCell = target;
    selectCell(target);
  }
}


function handleTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target && target.classList.contains('cell') && selecting) {
    selectCell(target); // 🔥 Use your core function!
  }
}

function handleTouchEnd(e) {
  if (!clickMode || !clickStartCell) return;
  const target = e.target;

  if (target && target.classList.contains('cell')) {
    const start = {
      row: parseInt(clickStartCell.dataset.row),
      col: parseInt(clickStartCell.dataset.col)
    };
    const end = {
      row: parseInt(target.dataset.row),
      col: parseInt(target.dataset.col)
    };

    const dRow = end.row - start.row;
    const dCol = end.col - start.col;

    const len = Math.max(Math.abs(dRow), Math.abs(dCol));
    const dirRow = Math.sign(dRow);
    const dirCol = Math.sign(dCol);

    clearSelection();
    for (let i = 0; i <= len; i++) {
      const r = start.row + dirRow * i;
      const c = start.col + dirCol * i;
      if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) break;
      const cell = cellElements[r][c];
      selectCell(cell);
    }

    checkSelectedWord();
  }
  clickStartCell = null;
}

function selectCell(cell) {
	const row = parseInt(cell.dataset.row);
	const col = parseInt(cell.dataset.col);

	const last = selectedCells[selectedCells.length - 1];

	// Start with first cell
	if (!last) {
		cell.classList.add('selected');
		selectedCells.push({ row, col, letter: grid[row][col], element: cell });
		return;
	}

	// Undo/backtrack if dragging over previous cell
	if (
		selectedCells.length > 1 &&
		row === selectedCells[selectedCells.length - 2].row &&
		col === selectedCells[selectedCells.length - 2].col
	) {
		last.element.classList.remove('selected');
		selectedCells.pop();
		return;
	}

	// Already selected elsewhere: ignore
	if (selectedCells.some(c => c.row === row && c.col === col)) return;

	// Lock direction from first two cells
	if (selectedCells.length === 1) {
		const dRow = row - last.row;
		const dCol = col - last.col;
		if ((dRow === 0 && dCol === 0) || Math.abs(dRow) > 1 || Math.abs(dCol) > 1) return;

		selectedCells.direction = [dRow, dCol];
	} else if (selectedCells.direction) {
		// Allow small error margin for direction
		const expectedRow = last.row + selectedCells.direction[0];
		const expectedCol = last.col + selectedCells.direction[1];

		const rowDiff = Math.abs(expectedRow - row);
		const colDiff = Math.abs(expectedCol - col);

		if (rowDiff > 0.2 || colDiff > 0.2) return; // allow slight error
	}

	// Save the original background color so we can restore it
	const previousColor = cell.style.backgroundColor;
	
	cell.classList.add('selected');
	cell.dataset.prevColor = previousColor || ''; // store inline color if any
	cell.style.backgroundColor = ''; // let CSS handle the selected style
	selectedCells.push({ row, col, letter: grid[row][col], element: cell });
}

function handleClickSelection(cell) {
  if (!clickStartCell) {
    clearSelection();
    clickStartCell = cell;
    selectCell(cell);
    return;
  }

  const start = {
    row: parseInt(clickStartCell.dataset.row),
    col: parseInt(clickStartCell.dataset.col)
  };
  const end = {
    row: parseInt(cell.dataset.row),
    col: parseInt(cell.dataset.col)
  };

  const dRow = end.row - start.row;
  const dCol = end.col - start.col;

  const len = Math.max(Math.abs(dRow), Math.abs(dCol));
  const dirRow = Math.sign(dRow);
  const dirCol = Math.sign(dCol);

  clearSelection();
  for (let i = 0; i <= len; i++) {
    const r = start.row + dirRow * i;
    const c = start.col + dirCol * i;

    if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) break;

    const target = cellElements[r][c];
    selectCell(target);
  }

  checkSelectedWord();
  clickStartCell = null;
}

function handleTouchClickStart(e) {
  if (!clickStartCell) {
    const target = document.elementFromPoint(
      e.touches[0].clientX,
      e.touches[0].clientY
    );
    if (target && target.classList.contains('cell')) {
      clearSelection();
      clickStartCell = target;
      selectCell(target);
    }
  }
}

function handleTouchClickEnd(e) {
  if (clickStartCell) {
    const target = document.elementFromPoint(
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    );
    if (target && target.classList.contains('cell')) {
      const start = {
        row: parseInt(clickStartCell.dataset.row),
        col: parseInt(clickStartCell.dataset.col)
      };
      const end = {
        row: parseInt(target.dataset.row),
        col: parseInt(target.dataset.col)
      };

      const dRow = end.row - start.row;
      const dCol = end.col - start.col;

      const len = Math.max(Math.abs(dRow), Math.abs(dCol));
      const dirRow = Math.sign(dRow);
      const dirCol = Math.sign(dCol);

      clearSelection();
      for (let i = 0; i <= len; i++) {
        const r = start.row + dirRow * i;
        const c = start.col + dirCol * i;
        if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) break;
        const cell = cellElements[r][c];
        selectCell(cell);
      }

      checkSelectedWord();
    }
    clickStartCell = null;
  }
}

function clearSelection() {
	selectedCells.forEach(cell => {
		cell.element.classList.remove('selected');
		if (cell.element.dataset.prevColor) {
			cell.element.style.backgroundColor = cell.element.dataset.prevColor;
			delete cell.element.dataset.prevColor;
		}
	});
	selectedCells = [];
	selectedCells.direction = null; // Reset direction
}

function getRandomPastel() {
	const hue = Math.floor(Math.random() * 360);
	return `hsl(${hue}, 70%, 85%)`; // pastel-like
}

function createImageWordling(size, theme, returnImageOnly = false) {
  const army = wordLists[theme]?.wordlings || ['staff'];
  const chosenId = army[Math.floor(Math.random() * army.length)];
  const wordling = wordlings.find(w => w.id === chosenId);

  if (!wordling) return null; // fallback safe!

  const img = document.createElement('img');
  img.src = wordling.img;
  img.alt = wordling.name;
  img.className = 'wordling-img';
  img.style.width = `${size}px`;

  return returnImageOnly ? img : { img, chosenId }; // 🛠 Return BOTH if needed
}

function showWordlingPop(wordlingId) {
  const wordlingData = wordlings.find(w => w.id === wordlingId);
  if (!wordlingData) return;

  const label = document.getElementById('hidden-word-value');
  if (!label) return;

  // Remove any existing pop-up
  const old = document.getElementById('label-wordling');
  if (old) old.remove();

  const wordling = document.createElement('img');
  wordling.src = wordlingData.img;
  wordling.classList.add('wordling-pop');
  wordling.id = 'label-wordling';

  const labelBox = label.getBoundingClientRect();
  const offsetX = labelBox.left + window.scrollX + labelBox.width + 10;
  const offsetY = labelBox.top + window.scrollY - 10;

  wordling.style.left = `${offsetX}px`;
  wordling.style.top = `${offsetY}px`;

  document.body.appendChild(wordling);

  floatingWordling = wordling;
  floatingWordlingImage = wordlingId; // 🛠 Save the ID directly now!

  confetti({
    particleCount: 30,
    spread: 60,
    startVelocity: 25,
    origin: {
      x: offsetX / window.innerWidth,
      y: offsetY / window.innerHeight
    }
  });
}

function addSpecialWordlingToPage(imagePath, alt = 'Special Wordling') {
  const emptyMsg = document.getElementById('special-empty');
  if (emptyMsg) emptyMsg.style.display = 'none';
  
  const specialSection = document.getElementById('special-wordling-row'); // ✅ this is the correct target
  if (!specialSection) return;
	
  // ✅ Check only <img> elements
  if ([...specialSection.querySelectorAll('img')].some(img => img.src.includes(imagePath))) return;

  const wordlingImg = document.createElement('img');
  wordlingImg.src = imagePath;
  wordlingImg.alt = alt;
  wordlingImg.className = 'wordling-img';
  wordlingImg.style.height = '64px';
  wordlingImg.style.margin = '4px';

  specialSection.appendChild(wordlingImg);
}

function unlockCosplayWordling() {
  const emptyMsg = document.getElementById('cosplay-empty');
  if (emptyMsg) emptyMsg.style.display = 'none';

  const available = cosplayWordlings.filter(w => !unlockedCosplays.includes(w));
  if (available.length === 0) return; // All cosplay Wordlings unlocked

  const chosenId = available[Math.floor(Math.random() * available.length)];
  unlockedCosplays.push(chosenId);

  const cosplayWordling = wordlings.find(w => w.id === chosenId);
  if (cosplayWordling) {
    foundWordlings.add(cosplayWordling.id);
    addSpecialWordlingToPage(cosplayWordling.img, cosplayWordling.name);
  }

renderGallery();
updateProgressBar();
checkMilestoneUnlocks();
checkThemeUnlocks();
}

function checkMilestoneUnlocks() {
  const totalStandard = wordlings.filter(w => !w.isMilestone).length;
  const totalUnlocked = [...foundWordlings].filter(id =>
    wordlings.some(w => w.id === id && !w.isMilestone)
	).length;

  if (totalUnlocked >= 5 && !foundWordlings.has('milestone5')) {
  foundWordlings.add('milestone5');

  const sprout = wordlings.find(w => w.id === 'milestone5');
    if (sprout) addSpecialWordlingToPage(sprout.img, 'Milestone Wordling');

    showMilestonePopup('🎉 You unlocked the Sprout Wordling!');
  }

  if (totalUnlocked >= 10 && !foundWordlings.has('milestone10')) {
    foundWordlings.add('milestone10');
    const seeker = wordlings.find(w => w.id === 'milestone10');
    if (seeker) addSpecialWordlingToPage(seeker.img, 'Milestone Wordling');
    showMilestonePopup('✨ You unlocked the Seeker Wordling!');
   }

  if (totalUnlocked >= 25 && !foundWordlings.has('milestone25')) {
    foundWordlings.add('milestone25');
    const trailblazer = wordlings.find(w => w.id === 'milestone25');
    if (trailblazer) addSpecialWordlingToPage(trailblazer.img, 'Milestone Wordling');
    showMilestonePopup('🌟 You unlocked the Trailblazer Wordling!');
  }

  if (totalUnlocked >= 50 && !foundWordlings.has('milestone50')) {
    foundWordlings.add('milestone50');
    const warden = wordlings.find(w => w.id === 'milestone50');
    if (warden) addSpecialWordlingToPage(warden.img, 'Milestone Wordling');
    showMilestonePopup('🛡️ You unlocked the Warden Wordling!');
  }

  if (totalUnlocked >= totalStandard && !foundWordlings.has('milestone-all')) {
    foundWordlings.add('milestone-all');
    const luminary = wordlings.find(w => w.id === 'milestone-all');
    if (luminary) addSpecialWordlingToPage(luminary.img, 'Milestone Wordling');
    showMilestonePopup('🌠 You unlocked the Luminary Wordling!');
  }

  // Optionally update UI after unlock
	checkThemeUnlocks();
  updateProgressBar();
  renderGallery();
}

function showMilestonePopup(message) {
  const popup = document.createElement('div');
  popup.className = 'milestone-popup';
  popup.textContent = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add('fade-out');
    setTimeout(() => popup.remove(), 1000);
  }, 2000);
}

function showKorok(wordlingId) {
  if (!wordlingId) return;
  showWordlingPop(wordlingId);
}

function checkSelectedWord() {
  if (selectedCells.length === 0) return;
  
  const word = selectedCells.map(c => c.letter).join('');
  const reversed = word.split('').reverse().join('');

  const match = words.find(w => w.value === word || w.value === reversed);
  const isBonus = word === bonusWord || reversed === bonusWord;

  if (match || isBonus) {
    const pastel = getRandomPastel();
    selectedCells.forEach(c => {
      c.element.style.backgroundColor = pastel;
      c.element.classList.add('found');
    });

    if (match) {
      document.getElementById(`word-${match.value}`).classList.add('found-word');
    }

    if (isBonus) {
      const reward = createImageWordling(64, currentListKey); // 🛠️ generate reward
      if (reward) {
        showKorok(reward.chosenId); // 🛠️ pass the Wordling ID to showKorok!
      }
    }

    checkIfPuzzleComplete();
  }
  
  clearSelection();
}

function moveLabelWordlingToRow() {
  if (!floatingWordling || !floatingWordlingImage) return;
	
  const emptyMsg = document.getElementById('army-empty');
  if (emptyMsg) emptyMsg.style.display = 'none';
  
  if (!floatingWordling || !floatingWordlingImage) return;

  // Clean up the label Wordling
  floatingWordling.removeAttribute('id');
  floatingWordling.classList.remove('wordling-pop');
  floatingWordling.classList.add('wordling-row-img');
  floatingWordling.removeAttribute('style');

  const row = document.getElementById('wordling-row');

  row.appendChild(floatingWordling);

  if (floatingWordlingImage) {
    foundWordlings.add(floatingWordlingImage);
  }
  renderGallery();
  updateProgressBar();

    // ✅ Increment the count ONLY when Wordling actually joins
  korokCount++;
  document.getElementById('korok-count').textContent = korokCount;

  // ✅ Check for cosplay unlocks too
  if (korokCount % 5 === 0) {
    unlockCosplayWordling();
    updateProgressBar();
    checkMilestoneUnlocks();
  }
	checkThemeUnlocks();

  // Clear the reference after moving
  floatingWordling = null;
  floatingWordlingImage = null;
}

function checkIfPuzzleComplete() {
	const found = document.querySelectorAll('.found-word').length;
	if (found === words.length) {
		document.getElementById('congrats-overlay').style.display = 'flex';
		launchConfetti(); // 🎉 Right here!
		moveLabelWordlingToRow(); // 🌟 move the Wordling to the row
    showCollectionBanner();
		document.getElementById('grid').classList.add('grid-disabled');
		document.getElementById('interaction-blocker').style.display = 'block';
	}
}

function showCollectionBanner() {
  const banner = document.getElementById('collection-banner');
  if (!banner) return;

  const wordlistSelect = document.getElementById('wordlist-select');
  if (!wordlistSelect) return;
  
  const selectedValue = wordlistSelect.value;
  const currentWordlist = wordLists[selectedValue];

  if (!currentWordlist || !currentWordlist.wordlings) {
    banner.style.display = 'none';
    return;
  }

  const themeWordlings = currentWordlist.wordlings;
  const unlockedCount = themeWordlings.filter(id => foundWordlings.has(id)).length;

  if (unlockedCount === themeWordlings.length) {
    banner.textContent = `✅ You've found all Wordlings for this puzzle!`;
    banner.classList.add('sparkle'); // optional extra flair
  } else {
    const remaining = themeWordlings.length - unlockedCount;
    banner.textContent = `🌟 ${remaining} Wordlings still hiding in this theme!`;
    banner.classList.remove('sparkle');
  }

  banner.style.display = 'block';
}

function launchConfetti() {
	confetti({
			particleCount: 100,
			spread: 70,
			origin: { x: 0.5, y: 0.5 }
	});
}

// 🌙 Theme handling
function setTheme(mode) {
  document.body.setAttribute('data-theme', mode);
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) toggleBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.body.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

function updateProgressBar() {
  const total = wordlings.filter(w => !w.isHidden).length; // excludes hidden/milestone Wordlings
  const found = [...foundWordlings].filter(id =>
    wordlings.some(w => w.id === id && !w.isHidden)
  ).length;

  const percent = Math.round((found / total) * 100);

  document.getElementById('progress-count').textContent = found;
  document.getElementById('progress-total').textContent = total;
  document.getElementById('progress-fill').style.width = `${percent}%`;
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const specialGrid = document.getElementById('special-gallery');
  const themeSection = document.getElementById('theme-gallery');
  if (!grid || !specialGrid || !themeSection) return;

  grid.innerHTML = '';
  specialGrid.innerHTML = '';
  themeSection.innerHTML = '';

  const themeGroups = {};

  wordlings.forEach(w => {
    const found = foundWordlings.has(w.id);
    const card = document.createElement('div');
    card.classList.add('wordling-card');
    if (found) card.classList.add('unlocked');

    const tag = w.isMilestone ? 'Milestone' :
                w.isCosplay ? 'Cosplay' : null;

    const tagHTML = tag ? `<div class="wordling-tag">${tag}</div>` : '';

    card.innerHTML = `
      <img src="${w.img}" alt="${w.name}">
      <div>${found ? w.name : '???'}</div>
      ${tagHTML}
    `;

    if (tag) {
      specialGrid.appendChild(card);
    } else if (w.theme) {
      if (!themeGroups[w.theme]) themeGroups[w.theme] = [];
      themeGroups[w.theme].push({ card, found });
    } else {
      grid.appendChild(card);
    }

    if (found) {
      card.addEventListener('click', () => {
        showWordlingBio(w);
      });
    }
  });

  const sortedThemes = Object.keys(themeGroups).sort();

  sortedThemes.forEach(theme => {
    const header = document.createElement('h3');
    header.className = 'theme-header';
    header.textContent = theme;

    const row = document.createElement('div');
    row.className = 'gallery-grid'; // Matches the rest of the gallery layout

    themeGroups[theme].forEach(({ card }) => {
      row.appendChild(card);
    });

    themeSection.appendChild(header);
    themeSection.appendChild(row);
  });
}

function showWordlingBio(wordling) {
  const modal = document.getElementById('bio-modal');
  const img = document.getElementById('bio-img');
  const name = document.getElementById('bio-name');
  const text = document.getElementById('bio-text');

  img.src = wordling.img;
  name.textContent = wordling.name;
  text.textContent = wordling.bio || 'A mysterious Wordling without a story yet...';

  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

// Close button
document.getElementById('bio-close').addEventListener('click', () => {
  const modal = document.getElementById('bio-modal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
});

function updateThemePicker() {
  const picker = document.getElementById('theme-picker');
  const options = document.getElementById('theme-options');
  
  options.innerHTML = '';

  picker.style.display = 'block'; // Always show the picker

  const defaultBtn = document.createElement('button');
  defaultBtn.className = 'theme-choice-btn';
  defaultBtn.innerHTML = `<span>Default</span>`;
  defaultBtn.addEventListener('click', () => {
    activeTheme = null;
    applyActiveTheme();
  });
  options.appendChild(defaultBtn);

  Object.keys(themeRewards).forEach(themeName => {
    const reward = themeRewards[themeName];
    if (!reward) return;
  
    const btn = document.createElement('button');
    btn.className = 'theme-choice-btn';
    btn.innerHTML = `<img src="${reward.titleImage}" alt="${themeName}" style="height: 50px;">`;
  
    if (unlockedThemes.has(themeName)) {
      btn.addEventListener('click', () => {
        activeTheme = themeName;
        applyActiveTheme();
      });
    } else {
      btn.disabled = true;
      btn.title = 'Unlock all Wordlings in this theme to use this!';
      btn.classList.add('locked-theme');
    }
  
    options.appendChild(btn);
  });
}

function applyActiveTheme() {
  const container = document.getElementById('grid-container');
  container.className = ''; // Clear old theme

  const allLetters = document.querySelectorAll('.grid-letter');
  allLetters.forEach(l => {
    l.className = 'grid-letter'; // Reset fonts
  });

  if (activeTheme) {
    const reward = themeRewards[activeTheme];
    if (reward) {
      container.classList.add(reward.backgroundClass);
      allLetters.forEach(l => {
        l.classList.add(reward.fontClass);
      });
    }
  }
}

function checkThemeUnlocks() {
  const themes = new Set(wordlings.filter(w => w.theme).map(w => w.theme));

  for (let theme of themes) {
    const themedWordlings = wordlings.filter(w => w.theme === theme);
    const allFound = themedWordlings.every(w => foundWordlings.has(w.id));

    if (allFound && !unlockedThemes.has(theme)) {
      unlockedThemes.add(theme);
      showMilestonePopup(`🎉 Theme Unlocked: ${theme}`);
      updateThemePicker();
    }
  }
}

// Run the game
window.addEventListener('DOMContentLoaded', () => {
  // 🌓 Auto-detect from system
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

  const gridShell = document.getElementById('grid-shell');
  if (gridShell && gridSize >= 12 && window.innerWidth < 600) {
    gridShell.classList.add('show-scroll');
  } else if (gridShell) {
    gridShell.classList.remove('show-scroll');
  }

  const gridContainer = document.getElementById('grid-container');
  if (gridSize === 12 && gridContainer) {
    gridContainer.classList.add('zoom-out');
  }

  const newGameBtn = document.getElementById('new-game-btn');
  if (newGameBtn) {
    newGameBtn.addEventListener('click', generatePuzzle);
  }

  document.getElementById('open-gallery').addEventListener('click', () => {
    document.getElementById('wordling-gallery').classList.remove('hidden');
    renderGallery(); // Ensure gallery is updated each time
    updateProgressBar();
  });

  const galleryModal = document.getElementById('wordling-gallery');

  galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
      galleryModal.classList.add('hidden');
    }
  });
	
  document.getElementById('close-gallery').addEventListener('click', () => {
    document.getElementById('wordling-gallery').classList.add('hidden');
  });

  // ✅ Run the game at startup
  generatePuzzle();
	updateThemePicker();
});
