import { parseGrid } from './parser.js';
import { extractSlots } from './slotExtractor.js';
import { backtrack } from './solver.js';
import { formatGrid } from './formatter.js';

export function crosswordSolver(emptyPuzzle, words) {
  try {
    // 1. Input Validation
    if (typeof emptyPuzzle !== 'string' || emptyPuzzle.length === 0) {
      console.log('Error');
      return;
    }
    if (!Array.isArray(words)) {
      console.log('Error');
      return;
    }
    // Check all words are non-empty strings
    for (let i = 0; i < words.length; i++) {
      if (typeof words[i] !== 'string' || words[i].length === 0) {
        console.log('Error');
        return;
      }
    }
    // Check for duplicate words in words pool (crossword words must be unique)
    const uniqueWords = new Set(words);
    if (uniqueWords.size !== words.length) {
      console.log('Error');
      return;
    }
    
    // 2. Grid Parsing
    let grid2D;
    try {
      grid2D = parseGrid(emptyPuzzle);
    } catch (e) {
      console.log('Error');
      return;
    }
    
    // 3. Slot Extraction
    let slots;
    try {
      slots = extractSlots(grid2D);
    } catch (e) {
      console.log('Error');
      return;
    }
    
    // 4. Structural Verification
    if (slots.length !== words.length) {
      console.log('Error');
      return;
    }
    
    if (slots.length === 0) {
      console.log('Error');
      return;
    }
    
    // 5. Backtracking Execution
    const solutions = [];
    const usedWords = new Array(words.length).fill(false);
    // Make a deep copy of grid to work with
    const workingGrid = grid2D.map(row => [...row]);
    
    backtrack(0, slots, words, workingGrid, solutions, usedWords);
    
    // 6. Uniqueness Check & Output
    if (solutions.length === 1) {
      const result = formatGrid(solutions[0]);
      console.log(result);
      return;
    } else {
      console.log('Error');
      return;
    }
  } catch (e) {
    console.log('Error');
    return;
  }
}

const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ["casa", "alan", "ciao", "anta"];

crosswordSolver(emptyPuzzle, words);