var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var nextPlayerId = 4;

var initialPlayers = [{ id: 0, name: "Steph Curry" }, { id: 1, name: "Christiano Ronaldo" }, { id: 2, name: "Eliud Kipchoge" }, { id: 3, name: "Klay Thompson" }];

function PlayerList() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var _React$useState3 = React.useState(initialPlayers),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      players = _React$useState4[0],
      setPlayers = _React$useState4[1];

  function handleAddPlayerClick() {
    var insertPlayerAt = 2;
    var nextPlayers = [].concat(_toConsumableArray(players.slice(0, insertPlayerAt)), [{
      id: nextPlayerId++,
      name: name
    }], _toConsumableArray(players.slice(insertPlayerAt)));
    setPlayers(nextPlayers);
    console.log(nextPlayers);
    setName("");
  }

  function handleReverseArrayClick() {
    var copiedPlayers = [].concat(_toConsumableArray(players));
    setPlayers(copiedPlayers.reverse());
  }

  return React.createElement(
    "div",
    { className: "list" },
    React.createElement(
      "h1",
      null,
      "Inspirational Players:"
    ),
    React.createElement("input", { value: name, onChange: function onChange(e) {
        return setName(e.target.value);
      } }),
    React.createElement(
      "button",
      { onClick: handleAddPlayerClick },
      "Add"
    ),
    React.createElement(
      "button",
      { onClick: handleReverseArrayClick },
      "Reverse List"
    ),
    React.createElement(
      "ul",
      null,
      players.map(function (player) {
        return React.createElement(
          "li",
          { key: player.id },
          player.name,
          " ",
          React.createElement(
            "span",
            {
              className: "material-symbols-outlined",
              onClick: function onClick() {
                setPlayers(players.filter(function (p) {
                  return p.id !== player.id;
                }));
              }
            },
            "delete"
          )
        );
      })
    )
  );
}

export default function App() {
  return React.createElement(PlayerList, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));