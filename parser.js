/**
 * File: parser.js
 * 
 * Role & Objective:
 * Converts the raw, multi-line puzzle string into a structured 2D array while 
 * validating grid integrity, character rules, and rectangular dimensions.
 * 
 * Parameters:
 * - puzzleString (String): The raw input puzzle string.
 * 
 * Return Value:
 * - Returns an Array of Arrays of Characters/Strings (grid2D) upon success.
 * - Throws an error or returns null/false if validation fails.
 * 
 * Variables to Declare:
 * - rows (Array of Strings): Holds the individual lines obtained by splitting puzzleString via \n.
 * - grid2D (Array of Arrays of Strings): The working 2D matrix being constructed.
 * - expectedLength (Number): The length of the first row, used to validate that all subsequent rows are uniform.
 * - i, j (Numbers): Loop counters used for string and array iteration.
 * 
 * Expected Behavior & Logic:
 * 1. Split puzzleString by newline characters (\n) into an array of row strings.
 * 2. Ensure there is at least one row.
 * 3. Validate that every row has the exact same character length to guarantee a rectangular grid (expectedLength).
 * 4. Validate that all characters within the grid belong strictly to the allowed set (0–9, ., or \n).
 * 5. Map each row string into an array of individual character strings and return the 2D array.
 */