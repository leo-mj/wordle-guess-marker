import { green, MarkedGuess } from "../game-interfaces";

export function checkSolvedStatus(
  allResults: MarkedGuess[],
  setSolvedStatus: React.Dispatch<React.SetStateAction<string>>
): void {
  if (allResults.length <= 6 && allResults.some(hasOnlyGreens)) {
    setSolvedStatus("solved");
    return;
  } else if (allResults.length === 6) {
    setSolvedStatus("failed");
  }
  return;
}

function hasOnlyGreens(oneResult: MarkedGuess): boolean {
  for (const i in oneResult) {
    if (oneResult[i].colour !== green) {
      return false;
    }
  }
  return true;
}
