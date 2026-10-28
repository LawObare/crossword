import { isValidPlacement } from './validator.js';

export function backtrack(slotIndex, slots, words, grid2D, solutions, usedWords) {
  if (solutions.length > 1) {
    return;
  }

  if (slotIndex === slots.length) {
    // Create a deep copy of the completed grid
    const gridCopy = grid2D.map(row => [...row]);
    solutions.push(gridCopy);
    return;
  }
  
  const currentSlot = slots[slotIndex];
  
  for (let i = 0; i < words.length; i++) {
    // Skip if word already used
    if (usedWords[i]) {
      continue;
    }
    
    // Skip identical words at the same slot depth to avoid redundant permutations
    if (i > 0 && words[i] === words[i - 1] && !usedWords[i - 1]) {
      continue;
    }
    
    const word = words[i];
    
    if (isValidPlacement(word, currentSlot, grid2D)) {
      // Store backup of cells we're about to modify
      const backupCells = [];
      // Write word into grid
      for (let j = 0; j < word.length; j++) {
        let currRow, currCol;
        if (currentSlot.direction === 'horizontal') {
          currRow = currentSlot.row;
          currCol = currentSlot.col + j;
        } else {
          currRow = currentSlot.row + j;
          currCol = currentSlot.col;
        }
        backupCells.push({ row: currRow, col: currCol, value: grid2D[currRow][currCol] });
        grid2D[currRow][currCol] = word[j];
      }
      
      usedWords[i] = true;
      backtrack(slotIndex + 1, slots, words, grid2D, solutions, usedWords);
      
      // Rollback
      usedWords[i] = false;
      for (let k = backupCells.length - 1; k >= 0; k--) {
        const backup = backupCells[k];
        grid2D[backup.row][backup.col] = backup.value;
      }

      if (solutions.length > 1) {
        return;
      }
    }
  }
}

