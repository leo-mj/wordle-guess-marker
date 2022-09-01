export function handleSubmitButton(
  guessInput: string,
  setGuessInput: React.Dispatch<React.SetStateAction<string>>,
  allGuesses: string[],
  setAllGuesses: React.Dispatch<React.SetStateAction<string[]>>
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
  setAllGuesses([...allGuesses, guessInput]);
  setGuessInput("");
  return;
}
