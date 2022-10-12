import { GroupStats } from "../../utils/multiplayer-interfaces";

interface IPropsGroupStats {
  groupStats: GroupStats[];
  user: string;
}

export function OneGroupStats({
  groupStats,
  user,
}: IPropsGroupStats): JSX.Element {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
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
          {groupStats !== null &&
            groupStats.map((statRow, index) => (
              <tr
                key={index}
                style={
                  statRow.username === user
                    ? { backgroundColor: "#e0fbfc", color: "black" }
                    : { backgroundColor: "#3d5a80", color: "white" }
                }
              >
                <td>{index + 1}</td>
                <td>{statRow.username}</td>
                <td>{statRow.solved_percentage}%</td>
                <td>{statRow.total_games}</td>
                <td>{statRow.avg_guesses}</td>
                <td>{statRow.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
