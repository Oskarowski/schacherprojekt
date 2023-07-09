export class KingLogic {
  _colorOfPiece = null;
  _colorOfTileStandingOn = null;
  _pieceRow = null;
  _pieceColumn = null;
  _targetRow = null;
  _targetColumn = null;
  _targetRowIfWithOpponent = null;
  _targetColumnIfWithOpponent = null;

  //   _allPossibleMoves = [];

  constructor(fieldDroppedInto, draggedElementObj) {
    this._colorOfPiece =
      draggedElementObj.pieceElement.classList[1].toLowerCase();
    this._colorOfTileStandingOn =
      draggedElementObj.pieceElement.parentNode.classList[1];
    this._pieceRow = Number(
      draggedElementObj.pieceElement.parentNode.getAttribute("tile-row")
    );
    this._pieceColumn = Number(
      draggedElementObj.pieceElement.parentNode.getAttribute("tile-column")
    );

    const hasPieceInFieldDroppedInto = fieldDroppedInto.firstChild;
    if (hasPieceInFieldDroppedInto) {
      this._targetRowIfWithOpponent = Number(
        fieldDroppedInto.parentNode.getAttribute("tile-row")
      );
      this._targetColumnIfWithOpponent = Number(
        fieldDroppedInto.parentNode.getAttribute("tile-column")
      );
    } else {
      this._targetRow = Number(fieldDroppedInto.getAttribute("tile-row"));
      this._targetColumn = Number(fieldDroppedInto.getAttribute("tile-column"));
    }
  }

  /**
   *Filters the tiles collection based on the given direction
   * @param {Array} tilesCollection - The collection of tiles to be filtered
   *    Possible values: { 'right-up' }, { 'right-down' }, { 'left-up' }, { 'left-down' }
   * @returns {Array} The filtered collection of tiles in the specified direction
   */
  _filterFields(tilesCollection) {
    var allTilesInGivenDirection = [];

    const allPossibilitiesOfMove = [
      {
        row: this._pieceRow - 1,
        column: this._pieceColumn,
      },
      {
        row: this._pieceRow - 1,
        column: this._pieceColumn + 1,
      },
      {
        row: this._pieceRow,
        column: this._pieceColumn + 1,
      },
      {
        row: this._pieceRow + 1,
        column: this._pieceColumn + 1,
      },
      {
        row: this._pieceRow + 1,
        column: this._pieceColumn,
      },
      {
        row: this._pieceRow + 1,
        column: this._pieceColumn - 1,
      },
      {
        row: this._pieceRow,
        column: this._pieceColumn - 1,
      },
      {
        row: this._pieceRow - 1,
        column: this._pieceColumn - 1,
      },
    ];

    tilesCollection.forEach((tile) => {
      const tileRow = Number(tile.getAttribute(`tile-row`));
      const tileColumn = Number(tile.getAttribute(`tile-column`));
      for (const move of allPossibilitiesOfMove) {
        if (tileRow === move.row && tileColumn === move.column) {
          allTilesInGivenDirection.push(tile);
        }
      }
    });

    return allTilesInGivenDirection;
  }

  _calculateAllPossibleMoves() {
    const exactlyRowIn = document.querySelectorAll(
      `[tile-row="${this._pieceRow}"]`
    );
    const rowBefore = document.querySelectorAll(
      `[tile-row="${this._pieceRow - 1}"]`
    );
    const rowAfter = document.querySelectorAll(
      `[tile-row="${this._pieceRow + 1}"]`
    );

    const allTilesNearbyKing = [...exactlyRowIn, ...rowBefore, ...rowAfter];

    const allViableTilesForPiece = this._filterFields(allTilesNearbyKing);

    return allViableTilesForPiece;
  }

  canIMakeAMove() {
    const allViableTilesForPiece = this._calculateAllPossibleMoves();
    for (var i = 0; i < allViableTilesForPiece.length; i++) {
      const possibleTile = allViableTilesForPiece[i];
      if (
        Number(possibleTile.getAttribute("tile-row")) === this._targetRow &&
        Number(possibleTile.getAttribute("tile-column")) === this._targetColumn
      ) {
        return true;
      }
    }
    return false;
  }

  canIBeatOpponentsPiece() {
    const allViableTilesForPiece = this._calculateAllPossibleMoves();
    for (var i = 0; i < allViableTilesForPiece.length; i++) {
      const possibleTile = allViableTilesForPiece[i];

      if (
        Number(possibleTile.getAttribute("tile-row")) ===
          this._targetRowIfWithOpponent &&
        Number(possibleTile.getAttribute("tile-column")) ===
          this._targetColumnIfWithOpponent
      ) {
        return true;
      }
    }
    return false;
  }
}
