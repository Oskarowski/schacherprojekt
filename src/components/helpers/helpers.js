export let trackingWhosTurn = "white";

export function updateContentOfWhosTurn() {
  const display = document.getElementById("whos-turn-display");
  display.innerHTML = `${trackingWhosTurn.toUpperCase()}'s TURN `;
}

export const changePlayer = function () {
  switch (trackingWhosTurn) {
    case "white":
      trackingWhosTurn = "black";
      break;
    case "black":
      trackingWhosTurn = "white";
      break;
  }
  updateContentOfWhosTurn();
};
