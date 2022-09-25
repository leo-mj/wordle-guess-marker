import { green, grey, MarkedGuess, yellow } from "../game-interfaces";

export function resultsAsEmojis(allResults: MarkedGuess[]): string[][] {
  return allResults.map(transformOneResult);
}

function transformOneResult(oneResult: MarkedGuess): string[] {
  const emojiRow: string[] = [];
  for (const i in oneResult) {
    if (oneResult[i].colour === green) {
      emojiRow.push("🟩");
    } else if (oneResult[i].colour === yellow) {
      emojiRow.push("🟨");
    } else if (oneResult[i].colour === grey) {
      emojiRow.push("⬛");
    }
  }
  return emojiRow;
}
