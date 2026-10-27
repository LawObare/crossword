/**
 * File: slotExtractor.js
 * 
 * Role & Objective:
 * Scans the 2D grid matrix cell by cell to identify word starting positions 
 * and trace their horizontal and vertical lengths.
 * 
 * Parameters:
 * - grid2D (Array of Arrays of Strings): The parsed grid structure.
 * 
 * Return Value:
 * - Returns an Array of Objects representing all valid slots. Each slot object contains:
 *   - row (Number): Starting row index.
 *   - col (Number): Starting column index.
 *   - direction (String): Either 'horizontal' or 'vertical'.
 *   - length (Number): The exact character length of the slot.
 * 
 * Variables to Declare:
 * - slots (Array of Objects): The master collection storing all discovered slot objects.
 * - rowCount (Number): Total number of rows in grid2D (grid2D.length).
 * - colCount (Number): Total number of columns in grid2D (grid2D[0].length).
 * - row, col (Numbers): Loop variables tracking the current cell coordinates during grid iteration.
 * - len (Number): Working variable used to measure the length of a horizontal or vertical word slot.
 * - r, c (Numbers): Internal pointers used to scan ahead rightward or downward when measuring slot lengths.
 * 
 * Expected Behavior & Logic:
 * 1. Iterate through every coordinate (row, col) in grid2D.
 * 2. When a cell contains a digit greater than 0:
 *    - Horizontal Check: Trace rightward from col + 1 using pointer c until hitting a grid boundary or a dot (.). If the calculated length (len) is greater than 1, push a horizontal slot object to your slots list.
 *    - Vertical Check: Trace downward from row + 1 using pointer r until hitting a grid boundary or a dot (.). If the calculated length (len) is greater than 1, push a vertical slot object to your slots list.
 * 3. Return the complete list of extracted slot objects.
 */
export function extractSlots(grid2D) {
  // TODO: Declare variables (slots, rowCount, colCount, row, col, len, r, c)
  // TODO: Implement slot extraction logic
}