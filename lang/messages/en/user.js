// All user-facing messages live here. Import these from js/script.js
// Using simple functions lets us template dynamic numbers without logic in the view layer.
export const USER_MESSAGES = {
  labelHowMany: "How many buttons to create?", // label text (kept in HTML too)
  invalidCount: "Please enter a number between 3 and 7.",
  starting: (n) => `Starting a game with ${n} buttons…`,
  observing: (n) => `Memorize the order. Pausing for ${n} second${n === 1 ? '' : 's'}…`,
  scramblingRound: (i, n) => `Scrambling… ${i} of ${n}`,
  getReadyToRecall: "Now click the buttons in the original left-to-right order!",
  excellent: "Excellent memory!",
  wrong: "Wrong order!",
  reset: "Starting a new game…",
};