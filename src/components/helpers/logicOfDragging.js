import * as validation from './validateMove.js'
import * as helpers from './helpers.js'

var fromRow = null
var fromColumn = null
var pieceElement = null

export var draggedElementObj = {
  fromRow: fromRow,
  fromColumn: fromColumn,
  pieceElement: pieceElement
}

/**
 * updates the dragged element object
 * @param {*} event
 * @returns NULL
 */
function startOfDrag(event) {
  draggedElementObj.fromRow = event.target.parentNode.getAttribute('tile-row')
  draggedElementObj.fromColumn = event.target.parentNode.getAttribute('tile-column')
  draggedElementObj.pieceElement = event.target
}

var hoveringOverWhichElement = {}

/**
 * logic applied when dragging over other HTML elements
 * @param {*} event
 */
function overOfDrag(event) {
  event.preventDefault()
  var overRow = event.target.getAttribute('tile-row') || null
  var overColumn = event.target.getAttribute('tile-column') || null

  if (
    hoveringOverWhichElement.hoveringOverRow !== overRow ||
    hoveringOverWhichElement.hoveringOverColumn !== overColumn
  ) {
    event.target.classList.add('dragging-over-tile')
  }
  hoveringOverWhichElement = {
    hoveringOverRow: event.target.getAttribute('tile-row'),
    hoveringOverColumn: event.target.getAttribute('tile-column')
  }

  setTimeout(() => {
    event.target.classList.remove('dragging-over-tile')
  }, 200)
}

function dropOfDrag(event) {
  event.stopPropagation()

  switch (validation.validateMove(event.target, draggedElementObj)) {
    case 'stay': {
      return
    }
    case 'move': {
      makeNormalMove(event)
      return
    }
    case 'beat': {
      makeBeatingMove(event)
      return
    }
    default: {
      console.log('Totally invalid move')
      return
    }
  }
}

export function addDragListenersToPieces() {
  const allPieces = document.querySelectorAll('#map-of-tiles .tile')
  allPieces.forEach((pieceElement) => {
    pieceElement.addEventListener('dragstart', startOfDrag)
    pieceElement.addEventListener('dragover', overOfDrag)
    pieceElement.addEventListener('drop', dropOfDrag)
  })
  return allPieces
}

function makeNormalMove(e) {
  e.target.append(draggedElementObj.pieceElement)
  helpers.changePlayer()
  return
}

function makeBeatingMove(e) {
  e.target.parentNode.append(draggedElementObj.pieceElement)
  e.target.remove()
  helpers.changePlayer()
  return
}

// why functions: startOfDrag, overOfDrag, dropOfDrag cannot be voids?
