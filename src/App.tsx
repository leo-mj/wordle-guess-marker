import { useState } from "react";
import { PlayWordle } from "./components/PlayWordle";

function App(): JSX.Element {
  const [guessing, setGuessing] = useState<boolean>(false);
  return (
    <>
      {!guessing && <button onClick={() => setGuessing(true)}>Play</button>}
      {guessing && <PlayWordle setGuessing={setGuessing} />}
    </>
  );
}

export default App;
