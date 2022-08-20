import React, { useState } from "react";

import BaseLayout from "./Header/Header";
import TicTacToe from "./Dashboard/tic_tac_toe";
import Players from "./Players/Players";

function App() {
  const [players, setPlayers] = useState({
    firstPlayer: {
      name: 'Player 1',
      score: 0,
    },
    secondPlayer: {
      name: 'Player 2',
      score: 0,
    },
  });
  const [startGame, setStartGame] = useState(false);
  return (
    // Initially dislpays the Player Component, until the Player is willing to start the game
    <BaseLayout>
      {startGame ? <TicTacToe setPlayers={setPlayers} setStartGame={setStartGame} players={players} /> : <Players players={players} setPlayers={setPlayers} setStartGame={setStartGame} />}
    </BaseLayout>
  );
}

export default App;
