import React from 'react';

function Button({placeholder, disabled}) {
    return (
        <button
            type="button" disabled={disabled}
            onClick={() => console.log({placeholder})}
        >
            {placeholder}
        </button>
    )

}

export default Button;