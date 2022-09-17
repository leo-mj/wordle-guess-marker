import { useState } from "react";
import { PlayWordle } from "./components/PlayWordle";

function App(): JSX.Element {
  const [guessing, setGuessing] = useState<boolean>(false);
  return (
    <>
      <div className="menu-buttons">
        {guessing ? (
          <button className="menu-button" onClick={() => setGuessing(false)}>
            Back to main menu
          </button>
        ) : (
          <button className="menu-button" onClick={() => setGuessing(true)}>
            Play
          </button>
        )}
      </div>
      {<PlayWordle />}
    </>
  );
}

export default App;
