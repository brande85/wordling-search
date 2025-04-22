console.log("✅ game.js is running");

const wordlingThemes = {
  fruits: ['wordling1.png', 'wordling2.png', 'wordling3.png', 'wordling4.png'],
  domesticAnimals: ['wordling1.png', 'wordling2.png', 'wordling3.png', 'wordling4.png'], // reuse is fine!
  cozy: ['cozy-wordling1.png', 'cozy-wordling2.png'], 
  gemstones: ['gem-wordling1.png', 'gem-wordling2.png', 'gem-wordling3.png', 'gem-wordling4.png'],
  miku: ['miku-wordling1.png', 'miku-wordling2.png', 'miku-wordling3.png'],
  mikusongs: ['miku-wordling1.png', 'miku-wordling2.png', 'miku-wordling3.png'],
  igneousRocks: ['gem-wordling1.png', 'gem-wordling2.png', 'gem-wordling3.png', 'gem-wordling4.png', 'igneous-wordling.png'],
  sedimentaryRocks: ['gem-wordling1.png', 'gem-wordling2.png', 'gem-wordling3.png', 'gem-wordling4.png', 'sedimentary-wordling.png'],
  metamorphicRocks: ['gem-wordling1.png', 'gem-wordling2.png', 'gem-wordling3.png', 'gem-wordling4.png', 'metamorphic-wordling.png']
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
];

const grid = [];
let gridSize = 10;
let wordLists = {};
let words = [];
let currentPuzzleTheme = 'fruits'; // default
let bonusWord = ''; // The hidden word
let korokCount = 0;
const cellElements = [];
const directions = [
    [0, 1], [1, 0], [1, 1], [-1, 1]
];
let selectedCells = [];
let isMouseDown = false;
let selecting = false;
let floatingWordling = null;
let floatingWordlingImage = null;
let unlockedCosplays = [];

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
  for (let attempts = 0; attempts < 100; attempts++) {
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * gridSize);

      let fits = true;
      for (let i = 0; i < word.length; i++) {
      const r = row + dir[0] * i;
      const c = col + dir[1] * i;
      if (r < 0 || r >= gridSize || c < 0 || c >= gridSize || (grid[r][c] && grid[r][c] !== word[i])) {
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

function unlockCosplayWordling() {
  const emptyMsg = document.getElementById('cosplay-empty');
  if (emptyMsg) emptyMsg.style.display = 'none';
  
  const available = cosplayWordlings.filter(w => !unlockedCosplays.includes(w));
  if (available.length === 0) return; // all unlocked

  const chosen = available[Math.floor(Math.random() * available.length)];
  unlockedCosplays.push(chosen);

  const cosplayImg = document.createElement('img');
  cosplayImg.src = `images/${chosen}`;
  cosplayImg.alt = 'Cosplay Wordling';
  cosplayImg.className = 'wordling-img';
  cosplayImg.style.height = '64px';
  cosplayImg.style.margin = '4px';

  document.getElementById('cosplay-section').appendChild(cosplayImg);

  // Optional: Add message pop-up
  //alert('🎉 You unlocked a Cosplay Wordling!');
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

    // ✅ Increment the count ONLY when Wordling actually joins
  korokCount++;
  document.getElementById('korok-count').textContent = korokCount;

  // ✅ Check for cosplay unlocks too
  if (korokCount % 5 === 0) {
    unlockCosplayWordling();
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

// Run the game
fetch('wordlists.json')
  .then(response => response.json())
  .then(data => {
    wordLists = data;

    window.addEventListener('DOMContentLoaded', () => {
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

      // ✅ Now it's safe
      generatePuzzle();
    });
  });
