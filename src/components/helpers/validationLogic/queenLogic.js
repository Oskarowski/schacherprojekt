export class QueenLogic {
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
   *    Possible values: { 'right-up' }, { 'right-down' }, { 'left-up' }, { 'left-down' }
   * @returns {Array} The filtered collection of tiles in the specified direction
   */
  _filterDiagonalsFields(tilesCollection, direction) {
    var allTilesInGivenDirection = [];

    // part connected with diagonals
    switch (direction) {
      case "right-up": {
        // x++ column++ && y-- row--
        const right_up = [
          { x: this._pieceColumn + 1, y: this._pieceRow - 1 },
          { x: this._pieceColumn + 2, y: this._pieceRow - 2 },
          { x: this._pieceColumn + 3, y: this._pieceRow - 3 },
          { x: this._pieceColumn + 4, y: this._pieceRow - 4 },
          { x: this._pieceColumn + 5, y: this._pieceRow - 5 },
          { x: this._pieceColumn + 6, y: this._pieceRow - 6 },
          { x: this._pieceColumn + 7, y: this._pieceRow - 7 },
        ];
        tilesCollection.forEach((tile) => {
          const tileRow = Number(tile.getAttribute(`tile-row`));
          const tileColumn = Number(tile.getAttribute(`tile-column`));

          for (var i = 0; i < right_up.length; i++) {
            const move = right_up[i];
            if (move.x === tileColumn && move.y === tileRow) {
              allTilesInGivenDirection.push(tile);
              break;
            }
          }
        });
        break;
      }
      case "right-down": {
        // x++ column++ && y++ row++
        const right_up = [
          { x: this._pieceColumn + 1, y: this._pieceRow + 1 },
          { x: this._pieceColumn + 2, y: this._pieceRow + 2 },
          { x: this._pieceColumn + 3, y: this._pieceRow + 3 },
          { x: this._pieceColumn + 4, y: this._pieceRow + 4 },
          { x: this._pieceColumn + 5, y: this._pieceRow + 5 },
          { x: this._pieceColumn + 6, y: this._pieceRow + 6 },
          { x: this._pieceColumn + 7, y: this._pieceRow + 7 },
        ];
        tilesCollection.forEach((tile) => {
          const tileRow = Number(tile.getAttribute(`tile-row`));
          const tileColumn = Number(tile.getAttribute(`tile-column`));

          for (var i = 0; i < right_up.length; i++) {
            const move = right_up[i];
            if (move.x === tileColumn && move.y === tileRow) {
              allTilesInGivenDirection.push(tile);
              break;
            }
          }
        });

        break;
      }
      case "left-up": {
        // x-- column-- && y-- row--
        const right_up = [
          { x: this._pieceColumn - 1, y: this._pieceRow - 1 },
          { x: this._pieceColumn - 2, y: this._pieceRow - 2 },
          { x: this._pieceColumn - 3, y: this._pieceRow - 3 },
          { x: this._pieceColumn - 4, y: this._pieceRow - 4 },
          { x: this._pieceColumn - 5, y: this._pieceRow - 5 },
          { x: this._pieceColumn - 6, y: this._pieceRow - 6 },
          { x: this._pieceColumn - 7, y: this._pieceRow - 7 },
        ];
        tilesCollection.forEach((tile) => {
          const tileRow = Number(tile.getAttribute(`tile-row`));
          const tileColumn = Number(tile.getAttribute(`tile-column`));

          for (var i = 0; i < right_up.length; i++) {
            const move = right_up[i];
            if (move.x === tileColumn && move.y === tileRow) {
              allTilesInGivenDirection.push(tile);
              break;
            }
          }
        });

        break;
      }
      case "left-down": {
        // x-- column-- && y++ row++
        const right_up = [
          { x: this._pieceColumn - 1, y: this._pieceRow + 1 },
          { x: this._pieceColumn - 2, y: this._pieceRow + 2 },
          { x: this._pieceColumn - 3, y: this._pieceRow + 3 },
          { x: this._pieceColumn - 4, y: this._pieceRow + 4 },
          { x: this._pieceColumn - 5, y: this._pieceRow + 5 },
          { x: this._pieceColumn - 6, y: this._pieceRow + 6 },
          { x: this._pieceColumn - 7, y: this._pieceRow + 7 },
        ];
        tilesCollection.forEach((tile) => {
          const tileRow = Number(tile.getAttribute(`tile-row`));
          const tileColumn = Number(tile.getAttribute(`tile-column`));

          for (var i = 0; i < right_up.length; i++) {
            const move = right_up[i];
            if (move.x === tileColumn && move.y === tileRow) {
              allTilesInGivenDirection.push(tile);
              break;
            }
          }
        });

        break;
      }
      default: {
        console.error("Unknown direction in _filterFields to handle");
        break;
      }
    }

    if (direction === "right-up" || direction === "left-up") {
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
    const allTilesMatchingColorOnWhichPieceIsStandingOn =
      document.querySelectorAll(`.${this._colorOfTileStandingOn}`);

    const tilesToTheRightUp = this._filterDiagonalsFields(
      allTilesMatchingColorOnWhichPieceIsStandingOn,
      "right-up"
    );
    const tilesToTheRightDown = this._filterDiagonalsFields(
      allTilesMatchingColorOnWhichPieceIsStandingOn,
      "right-down"
    );
    const tilesToTheLeftUp = this._filterDiagonalsFields(
      allTilesMatchingColorOnWhichPieceIsStandingOn,
      "left-up"
    );
    const tilesToTheLeftDown = this._filterDiagonalsFields(
      allTilesMatchingColorOnWhichPieceIsStandingOn,
      "left-down"
    );

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
      ...tilesToTheRightUp,
      ...tilesToTheRightDown,
      ...tilesToTheLeftUp,
      ...tilesToTheLeftDown,
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
