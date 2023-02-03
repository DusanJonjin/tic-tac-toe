import React from 'react';
import { difficulties } from '../../Utilities/Fixtures/gameData';
import '../../Styles/ChooseDifficulty.css';

export function ChooseDifficulty({ handleChooseDifficulty }) {

    return (
        <div className='choose-option'>
            <label>Difficulty:</label>
            <div>
                <select 
                    className='select-difficulty'
                    onChange={e => handleChooseDifficulty(e.target.value)}
                >
                    {difficulties.map(difficulty =>
                        <option key={difficulty} value={difficulty}>
                            {difficulty}
                        </option>
                    )}   
                </select>
            </div>
        </div>
    );
}
