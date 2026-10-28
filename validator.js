
export function isValidPlacement(word, slot, grid2D) {
  //Check if the word length is the same as the slot length
  if (word.length !== slot.length) {
    return false;
  }

  let i;
  let currRow;
  let currCol;
  let cellChar;
  
  for (i = 0; i < slot.length; i++) {
    if (slot.direction === 'horizontal') {
      currRow = slot.row;
      currCol = slot.col + i;
    } else {
      currRow = slot.row + i;
      currCol = slot.col;
    }
    cellChar = grid2D[currRow][currCol];


    if (cellChar === '.' || (!isNaN(cellChar) && cellChar !== ' ')) {
     continue;
    }

    if (cellChar !== word[i]) {
      return false; 
    }
  }

  return true;
}
