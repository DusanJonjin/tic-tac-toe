import React from 'react';
import { symbols } from '../../Utilities/Fixtures/gameData';
import '../../Styles/ChooseSymbol.css';

export function ChooseSymbol({ handleChooseSymbol, humanSymbol }) {

    return (
        <div className='choose-option'>
            <label>Symbol:</label>
            <div>
                {symbols.map(symbol =>
                    <button 
                        type='button'
                        key={symbol} 
                        className={`symbol-btn ${symbol === humanSymbol ? 'symbol-active' : ''}`}
                        onClick={() => handleChooseSymbol(symbol)}
                    >
                        {symbol}
                    </button>
                )}
            </div>
        </div>
    );
}
