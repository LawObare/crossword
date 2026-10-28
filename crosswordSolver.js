/**
 * File: crosswordSolver.js
 * 
 * Role & Objective:
 * The primary orchestrator and entry point for the program. It coordinates input 
 * validation, grid parsing, slot extraction, backtracking, uniqueness verification, 
 * and final console output display or error handling.
 * 
 * Parameters:
 * - emptyPuzzle (String): A multi-line string representing the empty crossword grid template.
 * - words (Array of Strings): An array containing the pool of words available to fill the grid.
 * 
 * Variables to Declare:
 * - grid2D (Array of Arrays of Strings): Stores the 2D grid structure returned by parseGrid.
 * - slots (Array of Objects): Stores the slot metadata objects returned by extractSlots.
 * - solutions (Array): An accumulator array used to store all valid completed grid configurations found during backtracking.
 * - usedWords (Set or Array of Booleans): Tracks which word indices have already been assigned to slots during recursion to prevent reuse.
 * 
 * Expected Behavior & Logic:
 * 1. Input Validation: Verify that emptyPuzzle is a non-empty string and words is a valid array of strings. If validation fails, print 'Error' and terminate.
 * 2. Grid Parsing: Call parseGrid(emptyPuzzle) to convert the flat string into a 2D array. If parsing encounters malformed formatting or non-uniform rows, print 'Error'.
 * 3. Slot Extraction: Call extractSlots(grid2D) to retrieve all available word slots.
 * 4. Structural Verification: Check that the total number of extracted slots matches the length of the words array. If they do not match, print 'Error'.
 * 5. Backtracking Execution: Initialize an empty solutions array and a tracking mechanism for used words, then call backtrack(...).
 * 6. Uniqueness Check & Output:
 *    - If solutions.length === 1, pass the single solution grid to formatGrid(...) and print the resulting string to the console.
 *    - If solutions.length === 0 or solutions.length > 1, print 'Error' to the console.
 */
import { parseGrid } from './parser.js';
import { extractSlots } from './slotExtractor.js';
import { backtrack } from './solver.js';
import { formatGrid } from './formatter.js';

export function crosswordSolver(emptyPuzzle, words) {
  // TODO: Declare variables (grid2D, slots, solutions, usedWords)
  // TODO: Implement orchestration logic
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
    // Check all words are strings
    for (let i = 0; i < words.length; i++) {
      if (typeof words[i] !== 'string') {
        console.log('Error');
        return;
      }
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