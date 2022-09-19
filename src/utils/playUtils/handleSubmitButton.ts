import { MarkedGuess } from "../interfaces";
import markWordle from "./mark-wordle";

export function handleSubmitButton(
  guessInput: string,
  setGuessInput: React.Dispatch<React.SetStateAction<string>>,
  allResults: MarkedGuess[],
  setAllResults: React.Dispatch<React.SetStateAction<MarkedGuess[]>>,
  todaysSolution: string,
  setSolvedStatus: React.Dispatch<React.SetStateAction<string>>
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
  if (guessInput === todaysSolution) {
    setSolvedStatus("solved");
  }
  const result = markWordle(guessInput, todaysSolution);
  setAllResults([...allResults, result]);
  setGuessInput("");
  return;
}
