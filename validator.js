/**
 * File: validator.js
 * 
 * Role & Objective:
 * Validates whether a candidate word fits into a specified slot without violating 
 * length constraints or conflicting with pre-existing intersecting letters.
 * 
 * Parameters:
 * - word (String): The candidate word being tested.
 * - slot (Object): The target slot metadata (row, col, direction, length).
 * - grid2D (Array of Arrays of Strings): The current state of the grid.
 * 
 * Return Value:
 * - Returns a Boolean: true if the word fits completely without conflicts, otherwise false.
 * 
 * Variables to Declare:
 * - i (Number): Loop index iterating from 0 to slot.length - 1.
 * - currRow (Number): The computed row coordinate for the current character of the word.
 * - currCol (Number): The computed column coordinate for the current character of the word.
 * - cellChar (String): The character currently occupying grid2D[currRow][currCol].
 * 
 * Expected Behavior & Logic:
 * 1. Compare word.length against slot.length. If they do not match, return false.
 * 2. Iterate i from 0 to slot.length - 1:
 *    - Compute the precise currRow and currCol based on the slot's direction.
 *    - Inspect the character currently in cellChar = grid2D[currRow][currCol]:
 *      - If it is a digit (0–9) or a dot (.), the cell is unoccupied by a letter, which is valid.
 *      - If it already contains an alphabetic letter, check if it matches word[i]. If it does not match, return false (conflict).
 * 3. If all characters pass validation checks, return true.
 */
export function isValidPlacement(word, slot, grid2D) {
  // TODO: Declare variables (i, currRow, currCol, cellChar)
  // TODO: Implement placement validation logic
}

//TEST CASES

const mockGrid = [
  ['c', '.', '.', '.'],
  ['.', '.', '.', '.']
];
const slot = { row: 0, col: 0, direction: 'horizontal', length: 4 };

// Test matching intersection
const test1 = isValidPlacement('casa', slot, mockGrid);
// Test conflicting intersection
const test2 = isValidPlacement('data', slot, mockGrid);

console.log("Test 1 (Matching 'c'):", test1);
console.log("Test 2 (Conflicting 'd'):", test2);

// Test 1 (Matching 'c'): true
// Test 2 (Conflicting 'd'): false