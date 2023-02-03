import React from 'react';
import { gameTypes } from '../../Utilities/Fixtures/gameData';
import '../../Styles/ChooseGame.css';

export function ChooseGame({ handleGameType, computerIsPlaying }) {

    const playersCount = computerIsPlaying ? '1' : '2';

    return (
        <div className='choose-option'>
            <label>Game:</label> 
            <div>          
                {gameTypes.map((gameType, i) =>
                    <button
                        key={gameType}
                        type='button'
                        className={`game-btn ${gameType.includes(playersCount) ? 'game-btn-active' : ''}`}
                        onClick={() => handleGameType(i)}
                    >
                        {gameType}
                    </button>      
                )}
            </div>
        </div>
    );
}
