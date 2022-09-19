import { MarkedGuess } from "../game-interfaces";
import markWordle from "./mark-wordle";

export function handleSubmitButton(
  guessInput: string,
  setGuessInput: React.Dispatch<React.SetStateAction<string>>,
  allResults: MarkedGuess[],
  setAllResults: React.Dispatch<React.SetStateAction<MarkedGuess[]>>,
  todaysSolution: string
): void {
  if (guessInput.length > 5) {
    alert("Too many letters!");
    setGuessInput("");
    return;
  } else if (guessInput.length < 5) {
    alert("Not enough letters!");
    setGuessInput("");
    return;
  }
  const result = markWordle(guessInput, todaysSolution);
  setAllResults([...allResults, result]);
  setGuessInput("");
  return;
}
