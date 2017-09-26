import React, {Component} from 'react';

const Film = ({films}) => {
    

        if (!films) return null;

        const filmNode = films.map((film, index) => {
            return(
            <li key = {index}>{film.show_title}</li>
            )
        })

        return (
            <ol className = "film">
                {filmNode}
            </ol>
        )
    }

    export default Film;