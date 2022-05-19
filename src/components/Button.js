import React from "react";
import '../style/Button.css';

function Button({text, buttonClass, clicListener}){
    return(
        <div className='button-container'>
        <button 
        className={buttonClass ? 'buttonCount' : 'buttonRestart'}
        onClick={clicListener}
        > 
            {text}
        
        </button>
        </div>

    );
}
export default Button