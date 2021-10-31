import React from 'react';

export function ChooseSymbol({ handleChooseSymbol }) {

    const symbols = ['X', 'O'];

    const chooseSymbol= symbols.map(symbol =>
        <option key={symbol} value={symbol}>
            {symbol}
        </option>      
    );

    return (
        <div className='select-symbol'>
            <label>Choose your symbol:</label>
            <select onChange={e => handleChooseSymbol(e.target.value)}>
                {chooseSymbol}
            </select>
        </div>
    );
}
