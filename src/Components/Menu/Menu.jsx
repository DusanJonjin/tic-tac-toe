import React from 'react';
import '../../Styles/Menu.css';

export function Menu(props) {

    const {
        children,
        handleGameType,
        handleGameStart,
        computerIsPlaying
    } = props;

    const types = ['1 player', '2 players'];

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

    return (
        <section className='menu'>
            <form>
                <div className='game'>
                    <label>Choose a game:</label>           
                    {chooseGame}
                </div>
                <div className={`select-options ${!computerIsPlaying && 'no-select'}`}>
                    {children}
                </div>
                <button type='submit' onClick={e => handleGameStart(e)}>Start a new game</button>
            </form>
        </section>
    );
}
