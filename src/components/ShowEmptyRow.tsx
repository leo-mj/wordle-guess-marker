interface PropsEmptyRow {
  row: string[];
}

export function ShowEmptyRow({ row }: PropsEmptyRow): JSX.Element {
  return (
    <div className="allRows">
      {row.map((cell, j) => (
        <div
          key={j}
          className="letter"
          style={{ backgroundColor: "white", color: "white" }}
        >
          <h1>.</h1>
        </div>
      ))}
    </div>
  );
}
