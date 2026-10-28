export function extractSlots(grid2D) {
  let slots = [];
  let rowCount = grid2D.length;
  let colCount = rowCount > 0 ? grid2D[0].length : 0;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      const char = grid2D[row][col];
      if (char === '.') {
        continue;
      }

      const expectedStarts = parseInt(char, 10);
      let actualStarts = 0;

      // Check horizontal start
      const canStartH = (col === 0 || grid2D[row][col - 1] === '.') &&
                        (col + 1 < colCount && grid2D[row][col + 1] !== '.');
      if (canStartH) {
        let len = 1;
        let c = col + 1;
        while (c < colCount && grid2D[row][c] !== '.') {
          len++;
          c++;
        }
        slots.push({ row, col, direction: 'horizontal', length: len });
        actualStarts++;
      }

      // Check vertical start
      const canStartV = (row === 0 || grid2D[row - 1][col] === '.') &&
                        (row + 1 < rowCount && grid2D[row + 1][col] !== '.');
      if (canStartV) {
        let len = 1;
        let r = row + 1;
        while (r < rowCount && grid2D[r][col] !== '.') {
          len++;
          r++;
        }
        slots.push({ row, col, direction: 'vertical', length: len });
        actualStarts++;
      }

      if (actualStarts !== expectedStarts) {
        throw new Error(`Slot count mismatch at row ${row}, col ${col}: expected ${expectedStarts}, found ${actualStarts}`);
      }
    }
  }

  return slots;
}