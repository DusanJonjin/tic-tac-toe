import React from 'react';

export function Menu(props) {

    const {
        handleGameType,
        handleChooseSymbol,
        handleChooseDifficulty,
        handleGameStart,
        computerIsPlaying
    } = props;

    const game = {
        types: ['1 player', '2 players'],
        symbols: ['X', 'O'],
        difficulties: ['easy', 'medium', 'impossible']
    }

    const { types, symbols, difficulties } = game;

    const playersCount = computerIsPlaying ? '1' : '2';

    const chooseGame = types.map((gameType, i) =>
        <button
            key={gameType}
            type='button'
            className={`game-btn ${gameType.includes(playersCount) ? 'btn-active' : ''}`}
            onClick={() => handleGameType(i)}
        >
            {gameType}
        </button>      
    );

    const chooseSymbol= symbols.map(symbol =>
        <option key={symbol} value={symbol}>
            {symbol}
        </option>      
    );

    const chooseDifficulty = difficulties.map(difficulty =>
      <option key={difficulty} value={difficulty}>
          {difficulty}
      </option>                
    );

    return (
        <section>
        <form>
            <label>Choose a game:</label>
            {chooseGame}
            <div className={`select-symbol ${!computerIsPlaying && 'no-select'}`}>
                <div>
                    <label>Choose your symbol:</label>
                    <select onChange={e => handleChooseSymbol(e.target.value)}>
                        {chooseSymbol}
                    </select>
                </div>
                <div>
                    <label>Choose a difficulty:</label>
                    <select onChange={e => handleChooseDifficulty(e.target.value)}>
                        {chooseDifficulty}
                    </select>
                </div>
            </div>
            <button type='submit' onClick={e => handleGameStart(e)}>Start a new game</button>
        </form>
    </section>
    );
}
