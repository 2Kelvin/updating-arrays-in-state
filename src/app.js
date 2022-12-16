let initialPlayers = [
  { id: 0, name: "Steph Curry" },
  { id: 1, name: "Christiano Ronaldo" },
  { id: 2, name: "Eliud Kipchoge" },
  { id: 3, name: "Klay Thompson" },
];

function PlayerList() {
  const [name, setName] = React.useState("");
  const [players, setPlayers] = React.useState(initialPlayers);

  function handleAddPlayerClick() {
    const insertPlayerAt = 2;
    const nextPlayers = [
      ...players.slice(0, insertPlayerAt),
      {
        id: players[insertPlayerAt].id + players[players.length - 1].id,
        name: name,
      },
      ...players.slice(insertPlayerAt),
    ];
    setPlayers(nextPlayers);
    setName("");
  }

  return (
    <div className="list">
      <h1>Inspirational Players:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddPlayerClick}>Add</button>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name}{" "}
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setPlayers(players.filter((p) => p.id !== player.id));
              }}
            >
              delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <PlayerList />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
