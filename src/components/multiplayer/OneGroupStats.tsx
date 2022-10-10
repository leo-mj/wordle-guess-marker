import { GroupStats } from "../../utils/multiplayer-interfaces";

interface IPropsGroupStats {
  groupStats: GroupStats[];
}

export function OneGroupStats({ groupStats }: IPropsGroupStats): JSX.Element {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Solved</th>
            <th>Games</th>
            <th>Avg Guesses</th>
          </tr>
        </thead>
        <tbody>
          {groupStats !== null &&
            groupStats.map((statRow, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{statRow.username}</td>
                <td>{statRow.solved_percentage}%</td>
                <td>{statRow.total_games}</td>
                <td>{statRow.avg_guesses}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
