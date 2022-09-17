interface PropsCurrentGuess {
  guessInput: string;
}

export function CurrentGuess({ guessInput }: PropsCurrentGuess): JSX.Element {
  const guessArray = guessInput
    .split("")
    .filter((character) => character !== "");
  while (guessArray.length < 5) {
    guessArray.push("");
  }
  return (
    <>
      <div className="allRows">
        {guessArray.map((guessLetter, i) => (
          <div key={i} className="letter" style={{ backgroundColor: "white" }}>
            <h1>{guessLetter}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
