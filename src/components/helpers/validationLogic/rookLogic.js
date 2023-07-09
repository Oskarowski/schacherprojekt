export class RookLogic {
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
   * @param {string} direction - The direction to filter the tiles
   *    Possible values: { 'right' }, { 'left' }, { 'up' }, { 'down' }
   * @returns {Array} The filtered collection of tiles in the specified direction
   */
  _filterFields(tilesCollection, direction) {
    const plane =
      direction === "right" || direction === "left"
        ? "tile-column"
        : "tile-row";
    var allTilesInGivenDirection = [];

    switch (direction) {
      case "right": {
        tilesCollection.forEach((tile) => {
          if (this._pieceColumn < tile.getAttribute(`${plane}`)) {
            allTilesInGivenDirection.push(tile);
          }
        });
        break;
      }
      case "left": {
        tilesCollection.forEach((tile) => {
          if (this._pieceColumn > tile.getAttribute(`${plane}`)) {
            allTilesInGivenDirection.push(tile);
          }
        });

        break;
      }
      case "up": {
        tilesCollection.forEach((tile) => {
          if (this._pieceRow > tile.getAttribute(`${plane}`)) {
            allTilesInGivenDirection.push(tile);
          }
        });

        break;
      }
      case "down": {
        tilesCollection.forEach((tile) => {
          if (this._pieceRow < tile.getAttribute(`${plane}`)) {
            allTilesInGivenDirection.push(tile);
          }
        });
        break;
      }
      default: {
        console.error("Unknown direction in _filterFields to handle");
        break;
      }
    }
    if (direction === "up" || direction === "left") {
      allTilesInGivenDirection = allTilesInGivenDirection.reverse();
    }

    const allViableMovesInGivenDirection = [];
    var isEnemyInPath = false;
    for (var i = 0; i < allTilesInGivenDirection.length; i++) {
      const tile = allTilesInGivenDirection[i];
      const isThereOtherPiece = tile.firstChild;
      if (isThereOtherPiece && !isEnemyInPath) {
        allViableMovesInGivenDirection.push(tile);
        break;
      }
      if (!isThereOtherPiece && !isEnemyInPath) {
        allViableMovesInGivenDirection.push(tile);
      } else if (isThereOtherPiece) {
        isEnemyInPath = true;
      }
    }

    return allViableMovesInGivenDirection;
  }

  _calculateAllPossibleMoves() {
    const wholeRowCollection = document.querySelectorAll(
      `[tile-row="${this._pieceRow}"]`
    );
    const wholeColumnCollection = document.querySelectorAll(
      `[tile-column="${this._pieceColumn}"]`
    );

    const tilesToTheRight = this._filterFields(wholeRowCollection, "right");
    const tilesToTheLeft = this._filterFields(wholeRowCollection, "left");
    const tilesToTheUp = this._filterFields(wholeColumnCollection, "up");
    const tilesToTheDown = this._filterFields(wholeColumnCollection, "down");

    const allViableTilesForPiece = [
      ...tilesToTheRight,
      ...tilesToTheLeft,
      ...tilesToTheUp,
      ...tilesToTheDown,
    ];

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
