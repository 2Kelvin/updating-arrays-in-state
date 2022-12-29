let nextPlayerId = 4;

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
        id: nextPlayerId++,
        name: name,
      },
      ...players.slice(insertPlayerAt),
    ];
    setPlayers(nextPlayers);
    console.log(nextPlayers);
    setName("");
  }

  function handleReverseArrayClick() {
    const copiedPlayers = [...players];
    setPlayers(copiedPlayers.reverse());
  }

  return (
    <div className="list">
      <h1>Inspirational Players:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddPlayerClick}>Add</button>
      <button onClick={handleReverseArrayClick}>Reverse List</button>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name}{" "}
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setPlayers(players.filter((p) => p.id !== player.id));
              }}
            ></span>
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
