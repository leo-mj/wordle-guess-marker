import { SharedResult } from "../utils/game-interfaces";

interface PropsShowSharedResult {
  sharedResult: SharedResult;
  todaysSolution: string;
}

export function ShowSharedResult({
  sharedResult,
  todaysSolution,
}: PropsShowSharedResult): JSX.Element {
  const { guesses, solvedStatus, emojis } = sharedResult;
  return (
    <div className="shared-result">
      {solvedStatus === "solved" ? (
        <h3>Congratulations! </h3>
      ) : (
        <h3>Aww! The solution was: {todaysSolution.toUpperCase()}</h3>
      )}
      <p>{guesses}/6 attempts</p>
      <div className="all emojis">
        {emojis.map((emojiRow, i) => (
          <div className="emoji-row" key={i}>
            {emojiRow.map((emoji, j) => (
              <div className="one-emoji" key={j}>
                {emoji + " "}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
