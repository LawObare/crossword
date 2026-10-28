export function formatGrid(grid2D) {
  const rowStrings = grid2D.map(row => row.join(''));
  const formattedOutput = rowStrings.join('\n');
  return formattedOutput;
}

