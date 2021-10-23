import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeApp from './TicTacToeApp';

ReactDOM.render(
    <React.StrictMode>
        <TicTacToeApp />
    </React.StrictMode>
, document.getElementById('root')
);


// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
if (undefined /* [snowpack] import.meta.hot */ ) {
    undefined /* [snowpack] import.meta.hot */ .accept();
}