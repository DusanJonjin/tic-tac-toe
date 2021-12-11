import React from 'react';
import { ChooseGame } from './ChooseGame';
import '../../Styles/Menu.css';

export function Menu(props) {

    const {
        children,
        handleGameType,
        handleGameStart,
        computerIsPlaying
    } = props;

    return (
        <section className='menu'>
            <form className={`menu-form`}>
                <div className={`choose-options-wrap`}>
                    <ChooseGame 
                        handleGameType={handleGameType} 
                        computerIsPlaying={computerIsPlaying}
                    />
                    <div className={`select-options ${!computerIsPlaying ? 'no-select' : ''}`}>
                        {children}
                    </div>
                </div>
                <button type='submit' onClick={e => handleGameStart(e)}>Start a new game</button>
            </form>
        </section>
    );
}
