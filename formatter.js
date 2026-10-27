/**
 * File: formatter.js
 * 
 * Role & Objective:
 * Transforms the final solved 2D grid matrix back into a single newline-separated 
 * string formatted for clean console output.
 * 
 * Parameters:
 * - grid2D (Array of Arrays of Strings): The successfully solved grid configuration.
 * 
 * Return Value:
 * - Returns a String representing the fully formatted crossword puzzle.
 * 
 * Variables to Declare:
 * - rowStrings (Array of Strings): Created by mapping over grid2D and joining each row array into a single string (row.join('')).
 * - formattedOutput (String): The final multi-line string created by joining rowStrings with newline characters (\n).
 * 
 * Expected Behavior & Logic:
 * 1. Map each row array in grid2D into a continuous string using .join('').
 * 2. Combine all row strings together using newline separators (\n).
 * 3. Return the final formatted multi-line string (formattedOutput).
 */
export function formatGrid(grid2D) {
  // TODO: Declare variables (rowStrings, formattedOutput)
  // TODO: Implement formatting logic
  const rowStrings = grid2D.map(row => row.join(''));
  const formattedOutput = rowStrings.join('\n');
  return formattedOutput;
}

