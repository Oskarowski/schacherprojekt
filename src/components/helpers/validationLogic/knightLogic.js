var knightRow;
var knightColumn;

function prepareDate(draggedElementObj) {
  knightRow = Number(
    draggedElementObj.pieceElement.parentNode.getAttribute("tile-row")
  );

  knightColumn = Number(
    draggedElementObj.pieceElement.parentNode.getAttribute("tile-column")
  );
}

export function normalMove(fieldDroppedInto, draggedElementObj) {
  prepareDate(draggedElementObj);

  const targetRow = Number(fieldDroppedInto.getAttribute("tile-row"));
  const targetColumn = Number(fieldDroppedInto.getAttribute("tile-column"));

  const possibleMoves = [
    {
      gitRow: knightRow + 2,
      gitColumn: knightColumn + 1,
    },
    {
      gitRow: knightRow + 1,
      gitColumn: knightColumn + 2,
    },
    {
      gitRow: knightRow - 1,
      gitColumn: knightColumn + 2,
    },
    {
      gitRow: knightRow - 2,
      gitColumn: knightColumn + 1,
    },
    {
      gitRow: knightRow - 2,
      gitColumn: knightColumn - 1,
    },
    {
      gitRow: knightRow - 1,
      gitColumn: knightColumn - 2,
    },
    {
      gitRow: knightRow + 1,
      gitColumn: knightColumn - 2,
    },
    {
      gitRow: knightRow + 2,
      gitColumn: knightColumn - 1,
    },
  ];

  for (var i = 0; i < possibleMoves.length; i++) {
    const possibleMove = possibleMoves[i];
    if (
      possibleMove.gitRow === targetRow &&
      possibleMove.gitColumn === targetColumn
    ) {
      return true;
    }
  }
  return false;
}

export function beatingMove(fieldDroppedInto, draggedElementObj) {
  prepareDate(draggedElementObj);
  const hasOpponentPieceInFieldDroppedInto = fieldDroppedInto.firstChild;

  const targetRow = Number(
    fieldDroppedInto.parentNode.getAttribute("tile-row")
  );
  const targetColumn = Number(
    fieldDroppedInto.parentNode.getAttribute("tile-column")
  );

  const possibleMoves = [
    {
      gitRow: knightRow + 2,
      gitColumn: knightColumn + 1,
    },
    {
      gitRow: knightRow + 1,
      gitColumn: knightColumn + 2,
    },
    {
      gitRow: knightRow - 1,
      gitColumn: knightColumn + 2,
    },
    {
      gitRow: knightRow - 2,
      gitColumn: knightColumn + 1,
    },
    {
      gitRow: knightRow - 2,
      gitColumn: knightColumn - 1,
    },
    {
      gitRow: knightRow - 1,
      gitColumn: knightColumn - 2,
    },
    {
      gitRow: knightRow + 1,
      gitColumn: knightColumn - 2,
    },
    {
      gitRow: knightRow + 2,
      gitColumn: knightColumn - 1,
    },
  ];

  for (var i = 0; i < possibleMoves.length; i++) {
    const possibleMove = possibleMoves[i];
    if (
      possibleMove.gitRow === targetRow &&
      possibleMove.gitColumn === targetColumn
    ) {
      if (hasOpponentPieceInFieldDroppedInto) return true;
      else return false;
    }
  }
  return false;
}
