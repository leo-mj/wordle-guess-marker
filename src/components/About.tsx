interface IAboutProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

export function About({ setSelectedPage }: IAboutProps): JSX.Element {
  return (
    <div className="about">
      <h3>About</h3>
      <div className="about-section">
        <p>Play a game of Wordle</p>
        <button onClick={() => setSelectedPage("play")}>Play</button>
      </div>
      <div className="about-section">
        <p>Log in to:</p>
        <ul>
          <li>Join groups</li>
          <li>Share your results</li>
          <li>See the leaderboard</li>
        </ul>
        <button onClick={() => setSelectedPage("login")}>Login</button>
      </div>
      <div className="about-section">
        <p> Create an account to: </p>
        <ul>
          <li>See your past results</li>
          <li>Check your stats</li>
        </ul>
        <button onClick={() => setSelectedPage("register")}>Register</button>
      </div>
    </div>
  );
}
