console.log("✅ game.js is running");

const wordlings = [
	{ id: 'abaddon', name: 'Cosplay Abaddon', img: 'images/abbadonling.png', isCosplay: true },
	{ id: 'alien', name: 'Alien', img: 'images/space-wordling3.png' },
	{ id: 'alpaca', name: 'Alpaca', img: 'images/tame-animal-wordling1.png' }, 
	{ id: 'amethyst', name: 'Amethyst', img: 'images/gem-wordling1.png'},
	{ id: 'angron', name: 'Cosplay Angron', img: 'images/angronling.png', isCosplay: true },
	{ id: 'pokemon', name: 'Cosplay Ash', img: 'images/pokeling.png', isCosplay: true },
	{ id: 'astronaut', name: 'Astronaut', img: 'images/space-wordling1.png' },
	{ id: 'sister-of-battle', name: 'Battle Sister', img: 'images/warhammer-40k-wordling2.png' },
	// { id: 'black-mage', name: 'Black Mage', img: 'images/fantasy-wordling1.png' },
	{ id: 'boxer', name: 'Boxer', img: 'images/punchling.png'},
  { id: 'butterfly', name: 'Butterfly', img: 'images/wordling5.png'},
	{ id: 'bronty', name: 'Bronty', img: 'images/dinosaur-wordling3.png'},
	{ id: 'cat', name: 'Cat', img: 'images/tame-animal-wordling4.png'},
	{ id: 'cecil', name: 'Cosplay Cecil', img: 'images/ceciling.png', isCosplay: true },
	{ id: 'celestine', name: 'Cosplay Celestine', img: 'images/celestineling.png', isCosplay: true },
	// { id: 'clarinet', name: 'Clarinet', img: 'images/music-wordling1.png'},
	{ id: 'clive', name: 'Cosplay Clive', img: 'images/cliveling.png', isCosplay: true },
  { id: 'cloud', name: 'Cosplay Cloud', img: 'images/cloudling.png', isCosplay: true },
  { id: 'coffee', name: 'Coffee', img: 'images/cozy-wordling2.png' },
	{ id: 'corgi', name: 'Corgi', img: 'images/tame-animal-wordling3.png' },
  // { id: 'cyber', name: 'Cyber', img: 'images/cyberling.png' },
	{ id: 'dance-miku', name: 'Dancing Idol', img: 'images/miku-wordling2.png'},
	{ id: 'deku', name: 'Cosplay Deku', img: 'images/hero-academia-wordling.png', isCosplay: true },
	{ id: 'emerald', name: 'Emerald', img: 'images/gem-wordling3.png'},
	{ id: 'flower-crown', name: 'Flower Crown', img: 'images/wordling4.png' },
	{ id: 'fulgrim', name: 'Cosplay Fulgrim', img: 'images/fulgrimling.png' },
	{ id: 'goku', name: 'Cosplay Goku', img: 'images/gokuling.png', isCosplay: true },
	{ id: 'igneous', name: 'Iggy', img: 'images/igneous-wordling.png' },
	{ id: 'jupiter', name: 'Jupiter', img: 'images/space-wordling4.png' },
	// { id: 'king', name: 'King', img: 'images/royaling.png' },
	// { id: 'knight', name: 'Knight', img: 'images/fantasy-wordling2.png' }, 
	{ id: 'leaf', name: 'Leaf', img: 'images/wordling3.png' },
  { id: 'link', name: 'Cosplay Link', img: 'images/dekuling.png', isCosplay: true },
  { id: 'lion', name: 'Lion', img: 'images/wild-animal-wordling5.png'},
	// { id: 'mecha', name: 'Mecha', img: 'images/mechaling.png'}
	// { id: 'mermaid', name: 'Mermaid', img: 'images/mermaid-wordling.png' }
	{ id: 'metamorphic', name: 'Morph', img: 'images/metamorphic-wordling.png' },
  { id: 'moon', name: 'Moon', img: 'images/space-wordling5.png' },
	// { id: 'ninja', name: 'Ninja', img: 'images/ninjaling.png' },
  { id: 'news', name: 'Newsie', img: 'current-events-wordling1.png' },
	{ id: 'knuckles', name: 'Our Lord', img: 'images/knuckling.png', isCosplay: true },
	// { id: 'panda', name: 'Panda', img: 'images/wild-animal-wordling2.png' },
	// { id: 'penguin', name: 'Penguin', img: 'images/wild-animal-wordling3.png' },
	{ id: 'perform-miku', name: 'Performing Idol', img: 'images/miku-wordling1.png' },
	{ id: 'peridot', name: 'Peridot', img: 'images/gem-wordling2.png' },
	 // { id: 'pirate', name: 'Pirate', img: 'pirateling.png' },
  { id: 'polar-bear', name" 'Polar Bear', img: 'images/wild-animal-wordling6.png' },
	{ id: 'pose-miku', name: 'Posing Idol', img: 'images/miku-wordling3.png' },
	{ id: 'pterry', name: 'Pterry', img: 'images/dinosaur-wordling4.png' },
	{ id: 'red-panda', name: 'Red Panda', img: 'images/wild-animal-wordling1.png' },
  { id: 't-rex', name: 'Rex', img: 'images/dinosaur-wordling1.png' },
	{ id: 'sailor-moon', name: 'Cosplay Sailor Moon', img: 'images/moonling.png', isCosplay: true },
	{ id: 'sapphire', name: 'Sapphire', img: 'images/gem-wordling4.png' },
	{ id: 'scarf', name: 'Scarf', img: 'images/cozy-wordling1.png' },
	{ id: 'sedimentary', name: 'Sedrick', img: 'images/sedimentary-wordling.png' },
	{ id: 'sheep', name: 'Sheep', img: 'images/tame-animal-wordling2.png' },
	{ id: 'space-marine', name: 'Space Soldier', img: 'images/warhammer-40k-wordling1.png' },
	{ id: 'squall', name: 'Cosplay Squall', img: 'images/squalling.png', isCosplay: true },
	{ id: 'staff', name: 'Staff', img: 'images/wordling1.png' },
	{ id: 'star', name: 'Star', img: 'images/space-wordling2.png' },
	{ id: 'stick', name: 'Stick', img: 'images/wordling2.png' },
	{ id: 'terra', name: 'Cosplay Terra', img: 'images/terraling.png', isCosplay: true },
  { id: 'tiger', name" 'Tiger', img: 'images/wild-animal-wordling4.png'},
  { id: 'trixie', name: 'Trixie', img: 'images/dinosaur-wordling2.png' },
	// { id: 'trumpet', name: 'Trumpet', img: 'images/music-wordling2.png' },
  { id: 'warrior-of-light', name: 'Cosplay Warrior', img: 'images/warrioroflightling.png', isCosplay: true },
	{ id: 'tau-mech', name: 'Xeno Mech', img: 'images/warhammer-40k-wordling3.png' },
	{ id: 'zelda', name: 'Cosplay Zelda', img: 'images/zelda-wordling.png', isCosplay: true},
  { id: 'zidane', name: 'Cosplay Zidane', img: 'images/zidaneling.png', isCosplay: true },
  { id: 'milestone5', name: 'Sprout', img: 'images/milestone5.png', isMilestone: true },
  { id: 'milestone10', name: 'Seeker', img: 'images/milestone10.png', isMilestone: true },
  { id: 'milestone25', name: 'Trailblazer', img: 'images/milestone25.png', isMilestone: true },
  { id: 'milestone50', name: 'Warden', img: 'images/milestone50.png', isMilestone: true },
  { id: 'milestone-all', name: 'Luminary', img: 'images/milestone-all.png', isMilestone: true },
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

const cosplayWordlings = [
  'pokeling.png',
  'dekuling.png',
  'moonling.png',
  'gokuling.png',
  'cloudling.png',
  'ceciling.png',
  'squalling.png',
  'terraling.png',
  'warrioroflightling.png',
  'zidaneling.png',
	'abbadonling.png',
	'angronling.png',
	'celestineling.png',
	'fulgrimling.png',
  'cliveling.png',
	'hero-academia-wordling.png',
	'knuckling.png',
	'zelda-wordling.png'
];

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
  e.preventDefault();
  const target = e.target.closest('.cell');
  if (target) {
    selecting = true;
    clearSelection(); // 🔥 reset any previous selection
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
  if (selecting) {
    selecting = false;
    checkSelectedWord();
    clearSelection();
    selectedCells = [];
  }
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

function createImageWordling(size = 48, theme = 'fruits', returnImageOnly = true) {
	const army = wordlingThemes[theme] || ['wordling1.png'];
	const chosen = army[Math.floor(Math.random() * army.length)];

	const img = document.createElement('img');
	img.src = `images/${chosen}`;
	img.alt = 'Wordling';
	img.className = 'wordling-img';
	img.style.width = `${size}px`;

	return returnImageOnly ? img : { img, chosen };
}

function getWordlingIdFromImagePath(imagePath) {
  const match = wordlings.find(w => w.img === imagePath);
  return match ? match.id : null;
}

function showWordlingPop(imageFile) {
  // Remove any existing pop-up
  const old = document.getElementById('label-wordling');
  if (old) old.remove();

  const label = document.getElementById('hidden-word-value');
  const wordling = document.createElement('img');
  wordling.src = `images/${imageFile}`;
  wordling.classList.add('wordling-pop');
  wordling.id = 'label-wordling';

  const labelBox = label.getBoundingClientRect();

  // 🛠️ Define the offsets before using them
  const offsetX = labelBox.left + window.scrollX + labelBox.width + 10;
  const offsetY = labelBox.top + window.scrollY - 10;

  wordling.style.left = `${offsetX}px`;
  wordling.style.top = `${offsetY}px`;

  document.body.appendChild(wordling);

  // Track it
  floatingWordling = wordling;
  floatingWordlingImage = imageFile;

  // 🎉 Confetti!
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

  if ([...specialSection.children].some(img => img.src.includes(imagePath))) return;

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

  const chosen = available[Math.floor(Math.random() * available.length)];
  unlockedCosplays.push(chosen);

  const fullPath = `images/${chosen}`;
  const id = getWordlingIdFromImagePath(fullPath);

  // ✅ Add to found set (so it shows in gallery + progress)
  if (id) foundWordlings.add(id);

  // ✅ Add to the visible special Wordlings section
  addSpecialWordlingToPage(fullPath, 'Cosplay Wordling');

  renderGallery();
  updateProgressBar();
  checkMilestoneUnlocks();
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

function showKorok() {
	const existingPop = document.getElementById('label-wordling');
	if (existingPop) existingPop.remove();

	if (bonusWord) {
			document.getElementById('hidden-word-value').textContent = bonusWord;
	}

	const { chosen } = createImageWordling(48, currentPuzzleTheme, false);
	showWordlingPop(chosen); // just shows it — we’ll move it later
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
				showKorok();
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

  const imagePath = `images/${floatingWordlingImage}`;
  const id = getWordlingIdFromImagePath(imagePath);
  if (id) foundWordlings.add(id);
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
		document.getElementById('grid').classList.add('grid-disabled');
		document.getElementById('interaction-blocker').style.display = 'block';
	}
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
  if (!grid || !specialGrid) return;

  grid.innerHTML = '';
  specialGrid.innerHTML = '';

  wordlings.forEach(w => {
    const found = foundWordlings.has(w.id);
    const card = document.createElement('div');
    card.classList.add('wordling-card');
    if (found) card.classList.add('unlocked');

    const tag = w.isMilestone ? 'Milestone' :
                w.isCosplay ? 'Cosplay' : null;

    card.innerHTML = `
      <img src="${w.img}" alt="${w.name}">
      <div>${found ? w.name : '???'}</div>
      ${tag ? `<div class="wordling-tag">${tag}</div>` : ''}
    `;

    if (tag) {
      specialGrid.appendChild(card); // Cosplay or Milestone
    } else {
      grid.appendChild(card); // Regular Wordling
    }
  });
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
});
