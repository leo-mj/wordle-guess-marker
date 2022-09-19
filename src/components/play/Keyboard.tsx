import { handleSubmitButton } from "../../utils/playUtils/handleSubmitButton";
import { MarkedGuess } from "../../utils/game-interfaces";

interface PropsKeyboard {
  guessInput: string;
  setGuessInput: React.Dispatch<React.SetStateAction<string>>;
  allResults: MarkedGuess[];
  setAllResults: React.Dispatch<React.SetStateAction<MarkedGuess[]>>;
  todaysSolution: string;
}

export function Keyboard({
  guessInput,
  setGuessInput,
  allResults,
  setAllResults,
  todaysSolution,
}: PropsKeyboard): JSX.Element {
  return (
    <div id="keyboard">
      <div className="keyboard-row">
        {"Q W E R T Y U I O P".split(" ").map((letter, i) => (
          <button
            className="key"
            key={i}
            onClick={() => setGuessInput(guessInput + letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        {"A S D F G H J K L".split(" ").map((letter, i) => (
          <button
            className="key"
            key={i}
            onClick={() => setGuessInput(guessInput + letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        <button
          className="key"
          onClick={() =>
            handleSubmitButton(
              guessInput,
              setGuessInput,
              allResults,
              setAllResults,
              todaysSolution
            )
          }
        >
          {" "}
          ↩{" "}
        </button>
        {"Z X C V B N M".split(" ").map((letter, i) => (
          <button
            className="key"
            key={i}
            onClick={() => setGuessInput(guessInput + letter)}
          >
            {letter}
          </button>
        ))}
        <button
          className="key"
          onClick={() =>
            setGuessInput(guessInput.substring(0, guessInput.length - 1))
          }
        >
          {" "}
          ⌫{" "}
        </button>
      </div>
    </div>
  );
}
