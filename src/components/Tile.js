import React from 'react';

function Tile({title, text1, text2, image, alternative}) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
            <img src={image} alt={alternative}/>
        </section>
    );
}

export default Tile;