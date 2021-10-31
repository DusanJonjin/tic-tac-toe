import React from 'react';
import '../../Styles/BoardWithStatus.css';

export function BoardWithStatus({ children, gameIsActive }) {

    return (
        <section className='board-with-status'>
            {children}
        </section>
    );
}
