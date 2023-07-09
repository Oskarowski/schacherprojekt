import { trackingWhosTurn } from "./helpers.js";
import * as pawnLogic from "../helpers/validationLogic/pawnLogic.js";
import * as knightLogic from "../helpers/validationLogic/knightLogic.js";
import * as RookLogic from "../helpers/validationLogic/rookLogic.js";
import * as BishopLogic from "../helpers/validationLogic/bishopLogic.js";
import * as KingLogic from "../helpers/validationLogic/kingLogic.js";
import * as QueenLogic from "../helpers/validationLogic/queenLogic.js";

/**
 * Represents the state of a piece's movement.
 * @typedef {'stay' | 'move' | 'beat'} PieceMovementState
 * @return  'stay' | 'move' | 'beat'
 */
export function validateMove(fieldDroppedInto, draggedElementObj) {
  if (!isGoodPieceBeingDropped(draggedElementObj)) return "stay";

  const droppedIntoObj = {
    toRow:
      fieldDroppedInto.getAttribute("tile-row") ||
      fieldDroppedInto.parentNode.getAttribute("tile-row"),
    toColumn:
      fieldDroppedInto.getAttribute("tile-column") ||
      fieldDroppedInto.parentNode.getAttribute("tile-column"),
  };

  if (!isNotPlacingOnOwnPiece(fieldDroppedInto, draggedElementObj))
    return "stay";

  /** @type {'stay' | 'move' | 'beat'} */
  var possibleStateOfMove = "stay";

  switch (draggedElementObj.pieceElement.id.toLowerCase()) {
    case "pawn": {
      if (
        pawnLogic.normalMove(fieldDroppedInto, draggedElementObj) &&
        pawnLogic.beatingMove(fieldDroppedInto, draggedElementObj)
      ) {
        possibleStateOfMove = "beat";
      } else if (pawnLogic.normalMove(fieldDroppedInto, draggedElementObj)) {
        possibleStateOfMove = "move";
      } else if (pawnLogic.beatingMove(fieldDroppedInto, draggedElementObj)) {
        possibleStateOfMove = "beat";
      }
      break;
    }
    case "knight": {
      const canMove = knightLogic.normalMove(
        fieldDroppedInto,
        draggedElementObj
      );
      const isThatBeatingMove = knightLogic.beatingMove(
        fieldDroppedInto,
        draggedElementObj
      );

      if (isThatBeatingMove) {
        possibleStateOfMove = "beat";
      } else if (canMove) {
        possibleStateOfMove = "move";
      }
      break;
    }
    case "rook": {
      const Rook = new RookLogic.RookLogic(fieldDroppedInto, draggedElementObj);

      const canBeat = Rook.canIBeatOpponentsPiece();
      const canMove = Rook.canIMakeAMove();

      if (canBeat) {
        possibleStateOfMove = "beat";
      } else if (canMove) possibleStateOfMove = "move";
      break;
    }
    case "bishop": {
      const Bishop = new BishopLogic.BishopLogic(
        fieldDroppedInto,
        draggedElementObj
      );

      const canBeat = Bishop.canIBeatOpponentsPiece();
      const canMove = Bishop.canIMakeAMove();

      if (canBeat) {
        possibleStateOfMove = "beat";
      } else if (canMove) possibleStateOfMove = "move";
      break;
    }
    case "queen": {
      const Queen = new QueenLogic.QueenLogic(
        fieldDroppedInto,
        draggedElementObj
      );

      const canBeat = Queen.canIBeatOpponentsPiece();
      const canMove = Queen.canIMakeAMove();

      if (canBeat) {
        possibleStateOfMove = "beat";
      } else if (canMove) possibleStateOfMove = "move";
      break;
    }
    case "king": {
      const King = new KingLogic.KingLogic(fieldDroppedInto, draggedElementObj);

      const canBeat = King.canIBeatOpponentsPiece();
      const canMove = King.canIMakeAMove();

      if (canBeat) {
        possibleStateOfMove = "beat";
      } else if (canMove) possibleStateOfMove = "move";
      break;
    }
    default:
      console.log("No idea how to handle this case");
      break;
  }

  //   console.log("possibleStateOfMove: ", possibleStateOfMove);
  return possibleStateOfMove;
}

function isNotPlacingOnOwnPiece(fieldDroppedInto, draggedElementObj) {
  if (!fieldDroppedInto.firstChild) {
    return true;
  }
  return draggedElementObj.pieceElement.classList[1] ===
    fieldDroppedInto.classList[1]
    ? false
    : true;
}

function isGoodPieceBeingDropped(draggedElementObj) {
  switch (trackingWhosTurn.toLowerCase()) {
    case "white": {
      if (draggedElementObj.pieceElement.classList.contains("lighter")) {
        return true;
      }
      break;
    }
    case "black": {
      if (draggedElementObj.pieceElement.classList.contains("darker")) {
        return true;
      }
      break;
    }
    default:
      return false;
  }
  return false;
}
