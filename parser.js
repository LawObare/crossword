export function parseGrid(puzzleString) {
  if (typeof puzzleString !== 'string' || puzzleString.trim().length === 0) {
    throw new Error('Invalid puzzle string');
  }

  const rows = puzzleString.split('\n');
  if (rows.length === 0) {
    throw new Error('Empty grid');
  }

  const expectedLength = rows[0].length;
  if (expectedLength === 0) {
    throw new Error('Empty row');
  }

  const array = [];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].length !== expectedLength) {
      throw new Error('Non-uniform row length');
    }
    array[i] = [];
    for (let j = 0; j < rows[i].length; j++) {
      const char = rows[i][j];
      if (char !== '.' && char !== '0' && char !== '1' && char !== '2') {
        throw new Error(`Invalid character: ${char}`);
      }
      array[i][j] = char;
    }
  }

  return array;
}
