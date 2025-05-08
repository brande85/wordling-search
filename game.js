// ======================
// ✅ INIT CHECK
// ======================

console.log("✅ game.js is running");

// ======================
// 🌟 WORDLING DATA
// ======================

// -- 🧚‍♀️ Full Wordling List
console.log("📦 Loading wordlings...");

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
  { id: 'seahorse', name: 'Seahorse', bio: "It's a seahorse.", img: 'images/ocean-wordling1.png', theme: '🌊 Ocean' },
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

console.log(`📦 ${wordlings.length} wordlings loaded.`);

// -- 🖼️ Wordling Theme Collections
// -- 🗂️ [Removed] Legacy wordlingThemes no longer needed
// console.log("🗂️ wordlingThemes removed — using embedded themes and wordLists instead.");

// -- 🎁 Theme Reward Styling
console.log("🎁 Setting up theme reward settings...");
const themeRewards = {
  '🐾 Animals': {
    titleImage: 'images/title-animals2.png',
    backgroundClass: 'theme-animals',
    fontClass: 'theme-animals-font',
    mainTitle: 'images/title-animals2.png',
  },
    '🌊 Ocean': {
    titleImage: 'images/title-ocean.png',
    backgroundClass: 'theme-ocean',
    fontClass: 'theme-ocean-font',
    mainTitle: 'images/title-ocean.png',
  },
  '🚀 Space': {
    titleImage: 'images/title-space.png',
    backgroundClass: 'theme-space',
    fontClass: 'theme-space-font',
    mainTitle: 'images/title-space.png',
  },
};

// -- ✨ Cosplay Wordlings
// console.log("✨ Loading cosplay wordling list...")
const cosplayWordlings = ['abaddon', 'angron', 'ash-ketchum', 'cecil', 'celestine', 'clive', 'cloud', 'deku', 'fulgrim', 'goku', 'link', 'knuckles', 'sailor-moon', 'squall', 'terra', 'warrior-of-light', 'zelda', 'zidane']
// console.log(`✨ ${cosplayWordlings.length} cosplay wordlings ready.`);

// ======================
// 🧠 GAME STATE
// ======================

// -- 🔡 Puzzle Grid & Word Tracking
const grid = [];
let gridSize = 10;
let words = [];
let bonusWord = ''; // The hidden word
let currentListKey = '';
let currentPuzzleTheme = 'fruits'; // default

// -- 🔍 Selection Handling
let selectedCells = [];
selectedCells.direction = null;
let isMouseDown = false;
let selecting = false;
let clickStartCell = null;

// -- 🧩 DOM Cell References
const cellElements = []; // 2D array storing <div> elements for each cell

// -- 🎯 Directional Bias (heavily favors diagonals)
const weightedDirections = [
  [0, 1], [0, 1],     // ← horizontal
  [1, 0], [1, 0],     // ↑ vertical
  [1, 1], [1, 1], [1, 1], // ↘ diagonal
  [-1, 1], [-1, 1], [-1, 1] // ↗ reverse diagonal
];

// -- 🎨 Theme Progression
let activeTheme = null; // No active theme at first
let themeOrder = ['Default']; // Will include unlocked theme names like 'Space'
let currentThemeIndex = 0;
let unlockedThemes = new Set();

// -- 🌿 Wordling Unlocks
const foundWordlings = new Set(); // Tracks which Wordlings you've found
let unlockedCosplays = [];
let korokCount = 0;

// -- ✨ Wordling Pop-up
let floatingWordling = null;
let floatingWordlingImage = null;

// ======================
// 📦 UTILITY FUNCTIONS
// ======================
// These helper functions support core logic or enhance visuals.
// They don’t manage game state directly but are used across multiple systems.


// -- 🔀 Shuffle an array using Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// -- 🧱 Extract data from a grid cell DOM element
function getCellData(el) {
  return {
      element: el,
      letter: el.textContent,
      row: parseInt(el.dataset.row),
      col: parseInt(el.dataset.col)
  };
}

// -- 🎉 VISUAL EFFECTS

// -- 🎨 Generate a soft pastel color
function getRandomPastel() {
	const hue = Math.floor(Math.random() * 360);
	return `hsl(${hue}, 70%, 85%)`; // pastel-like
}

// Triggers a burst of confetti on the screen (used for celebrations!)
function launchConfetti() {
	confetti({
			particleCount: 100,
			spread: 70,
			origin: { x: 0.5, y: 0.5 }
	});
}

// ======================
// 🔠 GRID FUNCTIONS
// ======================
// These functions handle the creation, population, and rendering of the puzzle grid.
// They control where letters go, how the grid is displayed, and how the word list appears.


// -- 📐 Create empty grid and DOM cell holders
function createEmptyGrid() {
  for (let i = 0; i < gridSize; i++) {
      grid[i] = [];
      cellElements[i] = [];
      for (let j = 0; j < gridSize; j++) {
      grid[i][j] = '';
      cellElements[i][j] = null;
      }
  }
  console.log("📐 Grid initialized:", gridSize + "×" + gridSize);
}

// Attempts to place a single word in the grid (direction, position, fit)
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
    let overlapCount = 0;
    
    for (let i = 0; i < word.length; i++) {
      const r = row + dir[0] * i;
      const c = col + dir[1] * i;
    
      if (
        r < 0 || r >= gridSize ||
        c < 0 || c >= gridSize
      ) {
        fits = false;
        break;
      }
    
      const existing = grid[r][c];
      if (existing) {
        if (existing !== word[i]) {
          fits = false;
          break;
        } else {
          overlapCount++;
          if (overlapCount > 1) {
            fits = false;
            break;
          }
        }
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

  // console.warn(`❌ Failed to place word: ${word}`);
  return false;
}

// -- 🧪 Try placing words in the grid
function tryPlacingWords(wordList, maxWords = Math.min(Math.floor((gridSize * gridSize) / 8), 20)) {
  console.log(`📏 Grid: ${gridSize}×${gridSize} → Max words: ${maxWords}`);
  
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
  
  // 🌟 Hidden Bonus Word
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
  
  // 🪄 Fallback: reuse a placed word
  if (!bonusWord && placed.length > 0) {
      const fallback = placed[Math.floor(Math.random() * placed.length)];
      bonusWord = fallback.value;
  }

  console.log("🧩 Words placed:", placed.map(w => w.value));
  console.log("⭐ Bonus word:", bonusWord);
  
  return placed;
}

// Randomly fills all empty grid cells with letters
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

// Renders the current grid onto the screen with event-ready cells
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

  setupAutoscroll();
}

// 📜 Autoscroll on drag near top/bottom of grid
function setupAutoscroll() {
  const container = document.getElementById('grid-shell'); // Make sure this is your scrollable wrapper
  let scrollSpeed = 10;
  let scrollInterval = null;

  document.addEventListener('mousemove', (e) => {
    if (!isMouseDown) {
      clearInterval(scrollInterval);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const topThreshold = containerRect.top + 40;
    const bottomThreshold = containerRect.bottom - 40;

    clearInterval(scrollInterval); // Clear any previous scrolling

    if (e.clientY < topThreshold) {
      scrollInterval = setInterval(() => {
        container.scrollTop -= scrollSpeed;
      }, 30);
    } else if (e.clientY > bottomThreshold) {
      scrollInterval = setInterval(() => {
        container.scrollTop += scrollSpeed;
      }, 30);
    }
  });

  document.addEventListener('mouseup', () => {
    clearInterval(scrollInterval); // Stop when mouse is up
  });
}

  // Updates the word list display panel with words to find
  function renderWordList() {
	const listDiv = document.getElementById('word-list');
	listDiv.innerHTML = '<strong>Find these words:</strong><br>' +
			words.map(w => `<span id="word-${w.value}">${w.display}</span>`).join(', ');
}

// ======================
// 🎮 GAMEPLAY HANDLING
// ======================
// These functions manage how players interact with the grid.
// They track selections, handle mouse/touch events, and check for valid word matches.


// -- 🧩 Generate a new puzzle grid
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
  currentPuzzleTheme = listValue;
  gridSize = parseInt(sizeValue);
  selectedCells = [];
  selectedCells.direction = null;

  console.log("🎛️ Selected list:", listValue, "| Grid size:", gridSize);

  const wordListObj = wordLists[listValue];
  if (!wordListObj || !wordListObj.words || !wordListObj.facts) {
    console.warn(`Wordlist for theme '${listValue}' is invalid or incomplete.`);
    return;
  }

  const wordList = wordListObj.words;
  const facts = wordListObj.facts;

  // 🌟 Show random fun fact
  const puzzleFact = document.getElementById('puzzle-fact');
  if (puzzleFact && facts.length > 0) {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    puzzleFact.textContent = `${randomFact}`;
  }

  // 🫥 Reset the hidden word label
  const hiddenLabel = document.getElementById('hidden-word-value');
  if (hiddenLabel) hiddenLabel.textContent = '(still hiding...)';

  // 🧱 Reset floating Wordling
  if (floatingWordling) {
    floatingWordling.remove();
    floatingWordling = null;
    floatingWordlingImage = null;
  }

  // 🧱 Build and fill grid
  createEmptyGrid();
  words = tryPlacingWords(wordList);
  fillEmptyCells();
  renderWordList();
  renderGrid();

  console.log("Placed words:", words.map(w => w.display));
  console.log("Bonus word:", bonusWord);
  
  // 🪧 Collection banner & progress
  showCollectionBanner(); // ✅ Display collection progress
	updateProgressBar();    // ✅ Refresh bar visuals
  applyActiveTheme();     // 🎨 Apply current theme visuals
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

// Clears all currently selected cells (visual + tracking)
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

// Checks if the current selection matches a placed or bonus word
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
      c.element.style.color = 'black';
    });

    if (match) {
      document.getElementById(`word-${match.value}`).classList.add('found-word');
    }

    if (isBonus) {
      const originalBonusWord = wordLists[currentListKey].words.find(w =>
      w.replace(/\s+/g, '').toUpperCase() === bonusWord
      );
      document.getElementById('hidden-word-value').textContent = originalBonusWord || bonusWord;
      const reward = createImageWordling(64, currentListKey); // 🛠️ generate reward
      if (reward) {
        showKorok(reward.chosenId); // 🛠️ pass the Wordling ID to showKorok!
      }
    }

    checkIfPuzzleComplete();
  }
  
  clearSelection();
}

// Checks if all placed words have been found and ends the puzzle
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

// Triggered when clicking/tapping a word — checks and resolves match
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

// Touch event: begins drag/select gesture
function handleTouchStart(e) {
  if (!clickMode) return;
  const target = e.target;

  if (target && target.classList.contains('cell')) {
    clearSelection();
    clickStartCell = target;
    selectCell(target);
  }
}

// Touch event: continues drag/select gesture across grid
function handleTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target && target.classList.contains('cell') && selecting) {
    selectCell(target); // 🔥 Use your core function!
  }
}

// Touch event: ends drag gesture and checks selection
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

// Optional: used for quick tap/touch selection start
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

// Optional: used for quick tap/touch selection end
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

// ======================
// 🌿 WORDLING UNLOCKS
// ======================
// Handles all reward logic and visual updates when players discover Wordlings.
// Includes floating popups, milestone rewards, cosplay unlocks, and updating the gallery.

// Randomly selects a Wordling image from the current theme for bonus rewards
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

// Creates a floating image popup for a discovered Wordling
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

// Wrapper for showWordlingPop — allows Koroks/bonus Wordlings to be passed by ID
function showKorok(wordlingId) {
  if (!wordlingId) return;
  showWordlingPop(wordlingId);
}

// Transfers the floating Wordling to the collection row after puzzle complete
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

// Appends a Wordling image to the special collection row
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

// Randomly unlocks a new cosplay Wordling after collecting enough others
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

// Checks how many Wordlings the player has found and unlocks milestone rewards
function checkMilestoneUnlocks() {
  const totalStandard = wordlings.filter(w => !w.isMilestone).length;

  const totalUnlocked = [...foundWordlings].filter(id => {
    const w = wordlings.find(w => w.id === id);
    return w && !w.isMilestone;
  }).length;

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

// Shows a popup message for milestone unlocks
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

// ======================
// 🖼️ GALLERY / MODALS
// ======================
// Controls the display and interactivity of the Wordling gallery and bio modal.
// Handles filtering, unlocking, and modal toggling for collected Wordlings.


// Builds the full Wordling gallery, including standard, themed, and special Wordlings
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

// Shows the modal with a Wordling's image, name, and bio
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

// Closes the Wordling bio modal when the close button is clicked
document.getElementById('bio-close').addEventListener('click', () => {
  const modal = document.getElementById('bio-modal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
});

// ======================
// 📈 PROGRESS TRACKING
// ======================
// Tracks the player's collection progress, milestone status, and theme unlocks.
// Updates the progress bar, banner messages, and unlock notifications.

// Updates the main progress bar to reflect total Wordlings found
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

// Displays a banner showing how many Wordlings have been found for the current theme
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

// Unlocks new themes once all Wordlings from that theme are found
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

// ======================
// 🌈 THEME PICKER
// ======================
// Handles theme selection, preview rendering, and applying unlocked visual themes.
// Themes are unlocked by collecting all Wordlings in a category.

// Shows and updates the theme picker UI based on unlocked themes
function updateThemePicker() {
  const picker = document.getElementById('theme-picker');
  picker.style.display = 'block'; // Always show

  themeOrder = ['Default', ...Object.keys(themeRewards).filter(t => unlockedThemes.has(t))];
  currentThemeIndex = Math.max(0, themeOrder.indexOf(activeTheme || 'Default'));
  renderThemePreview();
}

// Renders the current theme preview (image + label)
function renderThemePreview() {
  const current = themeOrder[currentThemeIndex];
  const image = document.getElementById('theme-title-image');
  const label = document.getElementById('theme-label');

  if (current === 'Default') {
    image.src = 'images/wordling-title.png'; // Create or use a default title image
    label.textContent = 'Default';
    activeTheme = null;
  } else {
    const reward = themeRewards[current];
    image.src = reward.titleImage;
    label.textContent = current;
    activeTheme = current;
  }

  applyActiveTheme();
}

// Applies the active theme's visual styling to the grid
function applyActiveTheme() {
	console.log('Applying theme:', activeTheme);

  const container = document.getElementById('grid-container');
  container.className = ''; // Clear previous background classes

  const allLetters = document.querySelectorAll('.grid-letter');
  allLetters.forEach(l => l.className = 'grid-letter'); // Reset fonts

  if (activeTheme && themeRewards[activeTheme]) {
    const reward = themeRewards[activeTheme];
    container.classList.add(reward.backgroundClass);

    allLetters.forEach(l => l.classList.add(reward.fontClass));
  }

  if (theme.mainTitle) {
    document.getElementById('main-title-image').src = theme.mainTitle;
  }
}

// 🌙 Sets the global light/dark mode
function setTheme(mode) {
  document.body.setAttribute('data-theme', mode);
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) toggleBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
}

// Toggles between light and dark mode
function toggleTheme() {
  const current = document.body.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

// ======================
// 🚀 GAME INITIALIZATION & EVENT LISTENERS
// ======================
// Sets up the game when the page loads and connects UI buttons to their handlers.
// This is where everything gets wired together and launched.

// 🏁 Launch the game when the DOM is ready
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

  document.getElementById('theme-left').addEventListener('click', () => {
  currentThemeIndex = (currentThemeIndex - 1 + themeOrder.length) % themeOrder.length;
  renderThemePreview();
});

document.getElementById('theme-right').addEventListener('click', () => {
  currentThemeIndex = (currentThemeIndex + 1) % themeOrder.length;
  renderThemePreview();
});
	
  document.getElementById('close-gallery').addEventListener('click', () => {
    document.getElementById('wordling-gallery').classList.add('hidden');
  });

  // ✅ Run the game at startup
  generatePuzzle();
	updateThemePicker();
});
