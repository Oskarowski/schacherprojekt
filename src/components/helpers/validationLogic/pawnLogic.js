export function normalMove(fieldDroppedInto, draggedElementObj) {
  /**
   * Represents who's pawn is moving
   * @type { 'lighter' | 'darker' }
   */
  const pawnColor = draggedElementObj.pieceElement.classList[1].toLowerCase();

  const pawnRow = Number(
    draggedElementObj.pieceElement.parentNode.getAttribute("tile-row")
  );
  const pawnColumn = Number(
    draggedElementObj.pieceElement.parentNode.getAttribute("tile-column")
  );

  const targetRow = Number(fieldDroppedInto.getAttribute("tile-row"));
  const targetColumn = Number(fieldDroppedInto.getAttribute("tile-column"));

  switch (pawnColor) {
    case "lighter": {
      if (
        pawnRow === 1 &&
        pawnColumn === targetColumn &&
        pawnRow + 2 === targetRow
      ) {
        return true;
      } else if (pawnColumn === targetColumn && pawnRow + 1 === targetRow) {
        return true;
      } else return false;
    }
    case "darker": {
      if (
        pawnRow === 6 &&
        pawnColumn === targetColumn &&
        pawnRow - 2 === targetRow
      ) {
        return true;
      } else if (pawnColumn === targetColumn && pawnRow - 1 === targetRow) {
        return true;
      } else return false;
    }
  }
}

export function beatingMove(fieldDroppedInto, draggedElementObj) {
  /**
   * Represents who's pawn is moving
   * @type { 'lighter' | 'darker' }
   */
  const pawnColor = draggedElementObj.pieceElement.classList[1].toLowerCase();

  const pawnRow = Number(
    draggedElementObj.pieceElement.parentNode.getAttribute("tile-row")
  );
  const pawnColumn = Number(
    draggedElementObj.pieceElement.parentNode.getAttribute("tile-column")
  );

  const hasOpponentPieceInDieldDroppedInto = fieldDroppedInto.firstChild;
  if (!hasOpponentPieceInDieldDroppedInto) return false;

  const targetRow = Number(
    fieldDroppedInto.parentNode.getAttribute("tile-row")
  );
  const targetColumn = Number(
    fieldDroppedInto.parentNode.getAttribute("tile-column")
  );

  switch (pawnColor) {
    case "lighter": {
      if (pawnColumn + 1 === targetColumn && pawnRow + 1 === targetRow) {
        return true;
      } else if (pawnColumn - 1 === targetColumn && pawnRow + 1 === targetRow) {
        return true;
      } else return false;
    }
    case "darker": {
      if (pawnColumn + 1 === targetColumn && pawnRow - 1 === targetRow) {
        return true;
      } else if (pawnColumn - 1 === targetColumn && pawnRow - 1 === targetRow) {
        return true;
      } else return false;
    }
  }
}
