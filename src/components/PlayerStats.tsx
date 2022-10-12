import axios from "axios";
import { useEffect, useState } from "react";
import { arrangeEmojis } from "../utils/arrangeEmojis";
import { baseURL } from "../utils/databaseURL";
import { GroupEntry, Stats } from "../utils/multiplayer-interfaces";

interface IPlayerStatsProps {
  user: string;
  password: string;
  setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PlayerStats({
  user,
  password,
  setShowStats,
}: IPlayerStatsProps): JSX.Element {
  const [stats, setStats] = useState<Stats | null>(null);
  const [history, setHistory] = useState<GroupEntry[] | null>(null);

  useEffect(() => {
    const loadStatsAndHistory = async () => {
      const res = (await axios.get(baseURL + `users/stats/${user}/${password}`))
        .data;
      setStats(res.stats[0]);
      setHistory(res.history);
    };
    try {
      loadStatsAndHistory();
    } catch (error) {
      console.error(error);
    }
  }, [password, user]);

  return (
    <>
      {stats !== null && (
        <div className="all-entries">
          <h3>Stats</h3>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Solved</th>
                <th>Games</th>
                <th>
                  Guesses<br></br>/ Game
                </th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{stats.username}</td>
                <td>{stats.solved_percentage}%</td>
                <td>{stats.total_games}</td>
                <td>{stats.avg_guesses}</td>
                <td>{stats.points}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="all-entries">
        <h3>Last 5 Games</h3>
        {history !== null &&
          history.map((entry, i) => (
            <div className="group-entry" key={i}>
              <div className="group-entry-description">
                <b>{entry.username}</b>
                <p>{entry.solved_status}</p>
                <p>{entry.guesses}/6 attempts</p>
              </div>
              <div className="group-entry-emojis">
                {arrangeEmojis(entry.emojis).map((emojiRow, i) => (
                  <div key={i}>{emojiRow}</div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <button onClick={() => setShowStats(false)}>Close</button>
    </>
  );
}
