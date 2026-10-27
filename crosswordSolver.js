/*Kolaka*/

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
