/*Kolaka*/

/**
 * File: solver.js
 * 
 * Role & Objective:
 * The recursive backtracking engine that systematically explores word permutations across 
 * all slots and records all valid completed configurations to detect potential ambiguity.
 * 
 * Parameters:
 * - slotIndex (Number): Index of the current slot being evaluated in the slots array.
 * - slots (Array of Objects): The complete list of extracted crossword slots.
 * - words (Array of Strings): The full array of available words.
 * - grid2D (Array of Arrays of Strings): The active grid matrix being mutated.
 * - solutions (Array): The accumulator storing valid completed solution grids.
 * - usedWords (Set or Array of Booleans): Tracking state for word availability.
 * 
 * Return Value:
 * - Does not return a value directly; instead, it mutates the solutions array in place.
 * 
 * Variables to Declare:
 * - currentSlot (Object): Holds the metadata for slots[slotIndex].
 * - i (Number): Loop index for iterating through the words array.
 * - word (String): The candidate word at words[i].
 * - backupCells (Array of Objects): Records previous cell coordinates and character values to allow rolling back grid mutations if a branch fails.
 * 
 * Expected Behavior & Logic:
 * 1. Base Case: If slotIndex === slots.length, all slots have been successfully filled:
 *    - Create a deep copy of the completed grid2D matrix.
 *    - Push the deep-copied grid into the solutions array.
 *    - Return to backtrack and check for alternative solutions (ensuring ambiguity detection).
 * 2. Fetch currentSlot = slots[slotIndex].
 * 3. Iterate through each word in words:
 *    - Skip the word if it is already marked as used in usedWords.
 *    - Call isValidPlacement(word, currentSlot, grid2D).
 *    - If valid:
 *      - Temporarily write the word into grid2D at the slot's coordinates (storing prior cell values in backupCells to enable rollback).
 *      - Mark the word index as used in usedWords.
 *      - Recursively call backtrack(slotIndex + 1, slots, words, grid2D, solutions, usedWords).
 *      - Rollback (Backtrack): Restore the modified grid cells using backupCells to their original state and unmark the word as used so alternative combinations can be explored.
 */

