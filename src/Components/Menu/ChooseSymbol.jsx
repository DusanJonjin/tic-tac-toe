import React from 'react';
import '../../Styles/ChooseSymbol.css'

export function ChooseSymbol({ handleChooseSymbol, humanSymbol }) {

    const symbols = ['X', 'O'];

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
