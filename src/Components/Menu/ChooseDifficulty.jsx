import React from 'react'

export function ChooseDifficulty({ handleChooseDifficulty }) {

    const difficulties = ['easy', 'medium', 'impossible'];

    const chooseDifficulty = difficulties.map(difficulty =>
        <option key={difficulty} value={difficulty}>
            {difficulty}
        </option>                
    );

    return (
        <div className='select-difficulty'>
            <label>Choose a difficulty:</label>
            <select onChange={e => handleChooseDifficulty(e.target.value)}>
                {chooseDifficulty}
            </select>
        </div>
    );
}
