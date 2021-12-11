import React from 'react';

export function ChooseGame({ handleGameType, computerIsPlaying }) {

    const types = ['1 player', '2 players'];

    const playersCount = computerIsPlaying ? '1' : '2';

    return (
        <div className='choose-option'>
            <label>Game:</label> 
            <div>          
                {types.map((gameType, i) =>
                    <button
                        key={gameType}
                        type='button'
                        className={`game-btn ${gameType.includes(playersCount) ? 'btn-active' : ''}`}
                        onClick={() => handleGameType(i)}
                    >
                        {gameType}
                    </button>      
                )}
            </div>
        </div>
    );
}
