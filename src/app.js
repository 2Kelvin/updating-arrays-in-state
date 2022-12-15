let initialPlayers = [
  { id: 0, name: "Steph Curry" },
  { id: 1, name: "Christiano Ronaldo" },
  { id: 2, name: "Klay Thompson" },
];

function PlayerList() {
  const [name, setName] = React.useState("");
  const [players, setPlayers] = React.useState(initialPlayers);

  function handleAddPlayerClick() {
    setName("");
    setPlayers([
      ...players,
      {
        id: players[players.length - 1].id + 1,
        name: name,
      },
    ]);
  }

  return (
    <div className="list">
      <h1>Inspiring Players:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddPlayerClick}>Add</button>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name}{" "}
            <button
              onClick={() => {
                setPlayers(players.filter((p) => p.id !== player.id));
              }}
            >
              Delete
            </button>
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
